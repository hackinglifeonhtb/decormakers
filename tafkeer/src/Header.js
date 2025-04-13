import axios from 'axios'
import {React, useState, useEffect} from 'react';
import tafkeer from './Images/tafkeer.png'
import {Link} from 'react-router-dom'
import LogOut from './Images/logout.png'
import Verify from './Verify'
import DecorMakers from './Images/DecorMakers.png'
import "./Header.css"
import Burger from './Burger'
export default function Header( props ) {
    const [name, setName] = useState('')
    const [verified, setVerified] = useState(false);
    const [cart, setCart] = useState('')
    useEffect(()=>{
        axios.post(`${process.env.REACT_APP_SERVER_LINK}/api/verify`, {token: localStorage.getItem('token') || ''}, {headers:{'x-access-token':localStorage.getItem('token'), 'email':localStorage.getItem('email')}})
            .then((res)=>{
                if(res.data.firstName !== undefined && res.data.secondName !== undefined)
                    setVerified(true);
                    setName(res.data.firstName+' '+res.data.secondName)
                    axios.post(`${process.env.REACT_APP_SERVER_LINK}/get_cart_info`, {email: res.data.email})
                        .then((response)=>{
                            setCart(response.data.cart._id)
                        }).catch((err)=>{
                            console.log(err)
                        })
            }).catch((err)=>{
                console.log(window.location.href)
                window.location.replace(`${process.env.REACT_APP_SITE_LINK}/login?refer_to=${window.location.href}`)
                console.log(window.location.href)
            })
    }, [])
    return (
        <>
            <div className="header-container">
            <header className="App-header" style={{
                display:'flex',
                alignItems:'center'
            }}>
                <div className="container">
                    <div style={{display:'flex'}}>
                        <img src={DecorMakers} />
                        <h1>صناع الديكور</h1>
                    </div>
                    <ul>
                        <Link to='/'><li>الصفحة الرئيسية</li></Link>
                        <Link to='/products'><li>المنتجات</li></Link>
                        <Link to='/tickets'><li>التذاكر/الأسئلة</li></Link>
                        <Link to={`/cart/${cart}`} disable={cart.length==0}><li>السلة</li></Link>
                        <li>عنا</li>
                       <Link to='/login'> <li><button>{verified ? name : 'تسجيل الدخول'}</button></li> </Link>
                    </ul>
                </div>
                {verified ? <img src={LogOut} height="75px" width="100px" id="logout_pic" style={{
                    marginLeft:'25px',
                    cursor:'pointer'
                }} onClick={()=>{localStorage.setItem('token','');window.location.reload()}} /> : undefined}

            </header>
            <div id="nav" style={{position:'relative', zIndex:'5000'}}>
<input type="checkbox" id="menu-toggle"/>
  <label id="trigger" for="menu-toggle"></label>
  <label id="burger" for="menu-toggle"></label>
  <ul id="menu" style={{
    overflowY:'auto'
  }}>
                        <li><Link to={`/`} disable={cart.length==0}>الصفحة الرئيسية</Link></li>
                        <li><Link to={`/products`} disable={cart.length==0}>المنتجات</Link></li>
                        <li><Link to={`/tickets`} disable={cart.length==0}>التذاكر/الأسئلة</Link></li>
                        <li><Link to={`/cart/${cart}`} disable={cart.length==0}>السلة</Link></li>
                        <li><Link to={`/cart/${cart}`} disable={cart.length==0}>عنا</Link></li>
                         <li><Link to='/login'><button>{verified ? name : 'تسجيل الدخول'}</button></Link></li>
  </ul>
  </div>
  </div>
        </>
    )
}