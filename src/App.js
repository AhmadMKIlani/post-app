
import Login from "./components/Login";
import Register from "./components/Register";
import Nav from "./components/Nav";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import FullCard from "./components/FullCard";
import Comments from "./components/comment/Comments";


function App() {

  return (
      <BrowserRouter>
        <div className="App">
          <Nav/>
        </div>
        <div className="content">
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/comments" element={<Comments currentUserId="1"/>}/>
          <Route path='/login' element={<Login/>}/> 
          <Route path='/register' element={<Register/>}/>
          <Route path='/card' element={<FullCard/>}/>
          </Routes>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
