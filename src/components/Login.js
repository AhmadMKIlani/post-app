import React, { useState } from 'react';
import { validEmail, validPassword } from './regex.js';
import "./Nav.css";


const Login = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailErr, setEmailErr] = useState(false);
   const [pwdError, setPwdError] = useState(false);

   const storeUser = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.filter(ele => {
        return(ele.useremail === email)
    })[0]

    if (email === "" && password === "") {
      setEmailErr(true);
      setPwdError(true);
    }else if(email === user.useremail && password === user.userpassword){
        alert("you have successfully logged-in ");
        window.location.assign("/card");
        }else{
            alert("please make sure the username/email/password are correct ");
        }
    }
 


   return (
      <div className='container'>
         <div className="ui equal width form ">
         <form className="ui form" onSubmit={storeUser}>
            <div className="fields">
            <div className="field">
            <label>email</label>
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            {emailErr && <p>cant be empty</p>}
            </div>
            <div className="field">
            <label>Password</label>
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            {pwdError && <p>cant be empty</p>}
            </div>
        </div>
            <button>Validate</button>
            </form>
        </div>
      </div>
   );
}


export default Login;
