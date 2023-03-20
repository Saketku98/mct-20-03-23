import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import {Routes, Route} from 'react-router-dom';
import NoPage from './component/NoPage';
import Users from './component/Users';
import Login from './component/Login';
import Contact from './component/Contact';
function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route exact path="Home" element={<> <Navbar/> <Home/></>} />
      <Route exact path="Products" element={<><Navbar/> <Products/></>} /> 
      <Route exact path="User" element={<> <Navbar/><Users/></>}/>
      <Route exact path="contact" element={<> <Navbar/><Contact/></>}/>
      <Route exact path="login" element={<Login/>} />
      <Route path = "*" element={<> <Navbar/><NoPage/> </>}/>
      
       
    </Routes>
    
    </>
  );
}

export default App;
