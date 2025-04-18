import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import Login from './Login';
import SignUp from './SignUp';
import Courses from './Courses';
import Course from './Course'
import Lessons from './Lessons'
import Tickets from './Tickets'
import Ticket from './Ticket'
import Push_Ticket from './Push_Ticket'
import BotManaging from './BotManaging'
import Products from './Products'
import Product from './Product'
import Cart from './Cart'
import Push_Product from './Push_Product'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign_up' element={<SignUp />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/bot_managing' element={<BotManaging />} />
        <Route path='/courses/:course_id' element={<Course />} />
        <Route path='/courses/:course_id/:lesson_name' element={<Lessons />} />
        <Route path='/tickets' element={<Tickets />} />
        <Route path='/tickets/:ticket_id' element={<Ticket />} />
        <Route path='/ticket/new_ticket' element={<Push_Ticket />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:product_id' element={<Product />} />
        <Route path='/cart/:cart_id' element={<Cart />} />
        <Route path='/push_product' element={<Push_Product />} />
        {/*<Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />          
<Route path='/challenges/:challenge' element={<Challenge />} />*/}
        {/*<Route path='/About' element={<About />} />*/}
        {/*<Route path='/:token/week_challenge' element={<Week />} />
        <Route path='/:token/new_challenge' element={<New />} />
        <Route path='/join_to_challenge' element={<Test />} />
        <Route path='/Live' element={<Live />} />
        <Route path='/Community' element={<ChatRoom />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact_us' element={<Contact />} />
<Route path='*' element={<><Header/><br/><br/><br/><br/><br/><br/><div align="center"><img src={ERROR} width="300" /><h1 style={{color:'crimson'}}>Not Found!</h1></div></>} />*/}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();