import React from 'react';
import './reg.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';


import Page from './Page';
import RegiForm from './RegiForm';
import Signup from './Signup';
import Login from './Login';
import Dashb from './Dashb';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import Add from './Add';

import Cars from './Cars';
import Contact from './Contact';
import About from './About';
import Card from './Card';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Admin from './Admin';
import Booking from './Booking';
import Sidebar from './Sidebar';






function App() {
  return (
    <>
   
    <Router>
      <Routes>
        <Route path="/" element={<Dashb/>}>
          
        </Route>

        <Route path="/Footer" element={<Footer/>}>

        </Route>

        <Route path="/About" element={<About/>}/>

        <Route path="/Card" element={<Card/>}>

</Route>

<Route path="/Card2" element={<Card2/>}>

        </Route>
        
        <Route path="/Card3" element={<Card3/>}>

</Route>

<Route path="/Card4" element={<Card4/>}>

</Route>

<Route path="/Card5" element={<Card5/>}>

</Route>
<Route path="/Admin" element={<Admin/>}>

</Route>
<Route path="/Sidebar" element={<Sidebar/>}>

</Route>


        

        <Route path="/Contact" element={<Contact/>}>

        </Route>

        
        <Route path="/Cars" element={<Cars/>}>

</Route>

<Route path="/Booking" element={<Booking/>}>

</Route>

       
        <Route path="/Add" element={<Add/>}>

        </Route>

        <Route path="/Nav" element={<Nav/>}>

        </Route>

        <Route path="/Home" element={<Home/>}>

        </Route>
        <Route path="/signup" element={<Signup />}>
          
          </Route>
          <Route path="/Page" element={<Page/>}>
          </Route>
          
      <Route path='/Login'element={<Login/>}></Route>
      <Route path="/Page" element={<Page/>}>
          </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
