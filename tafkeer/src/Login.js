import {React, useState, useEffet} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import Header from './Header'
import './Login.css'
import TafkeerDesign from './Images/tafkeerDesign.png'
import discord from './Images/discord.png'
import tafkeer from './Images/tafkeer.png'
import DecorMakers from './Images/decor_makers_without_background.png'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css" ;
import { useSearchParams } from "react-router-dom";
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    const LoginProcess = () => {
        axios.post(`${process.env.REACT_APP_SERVER_LINK}/users/login`, {email,password})
            .then((res)=>{
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('email', res.data.email)
                toast.success('تم تسجيل الدخول بنجاح!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                setTimeout(()=>{
                    window.location.replace(searchParams.get("refer_to"))
                }, 1500);
            }).catch((err)=>{
                toast.error('تأكد من صحة البيانات', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }
    return (
        <>
            <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
            />
            <div style={{
                display:'flex'
            }}>
                <div align="center" className='bg-success firstOne loginDisplay' style={{
                    height:'100vh',
                    width:'50%',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <div>
                        <img src={DecorMakers} style={{height:'300px', width:'300px'}} />
                    </div>
                    <h1>صناع الديكور</h1>
                    <h3 style={{letterSpacing:'2px', lineHeight:'40px'}}>مؤسسة مختصة بصناعة الديكور والاثاث وايضا توفيرها بشكل فردي</h3>
                    <br/>
                    <br/>
                    <h5 style={{width:'75%'}}>في حالة الرغبة بطرح الاستفسارات يمكنكم التوجه الى صفحة التكت وفتح تكت جديد وسيتم الرد على استفساراتكم باسرع وقت علما انها ستكون متاحة لرؤيتها من قبل الجميع</h5>
                    <br/>
                    <Link to={`${process.env.REACT_APP_SITE_LINK}/tickets`}>
                        <div align="center" style={{
                            width:'100px',
                            height:'100px',
                            backgroundColor:'#181a1b',
                            borderRadius:'15px',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <img src={DecorMakers} style={{height:'75px', width:'75px'}} />
                        </div>
                    </Link>
                </div>
                <div align="center" style={{
                    height:'100vh',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }} className="loginDiv">
                    <div align="center" style={{
                        backgroundColor:'#181a1b',
                        boxShadow:'10px 10px 10px white',
                        padding:'20px',
                        borderRadius:'10px',
                        width:'75%'
                    }}>
                        <img src={DecorMakers} style={{height:'150px', width:'150px'}} />
                        <h3>تسجيل الدخول</h3>
                        <br/>
                        <div className="loginForm">
                            <input type="email" className='text-success' placeholder="البريد الالكتروني الخاص بك" onChange={(e)=>setEmail(e.target.value)} />
                            <br/>
                            <input type="password" className='text-success' placeholder="كلمة السر" onChange={(e)=>setPassword(e.target.value)} />
                            <br/>
                            <Link to={`${process.env.REACT_APP_SITE_LINK}/sign_up`}><h5 style={{padding:'15px'}}>ليس لدي حساب؟</h5></Link>
                            <button value="تسجيل الدخول" onClick={()=>LoginProcess()}>تسجيل الدخول</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}