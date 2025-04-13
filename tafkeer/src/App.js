import logo from './logo.svg';
import axios from 'axios'
import tafkeer from './Images/tafkeer.png'
import cpp from './Images/cpp.svg.png'
import java from './Images/java.png'
import js from './Images/js-removebg-preview.png'
import python from './Images/python-removebg-preview.png'
import ruby from './Images/ruby.png'
import './App.css'
import man1 from './Images/man1.jpg'
import man2 from './Images/man2.jpg'
import man3 from './Images/man3.jpg'
import man4 from './Images/man4.jpg'
import profile from './Images/profile.png'
import photo from './Images/photo.jpg'
import Header from './Header'
import decor_makers from './Images/decormakers1.png'
import DecorMakers from './Images/decor_makers_without_background.png'
import tiktok from './Images/tik-tok.png'
import instagram from './Images/instagram.png'
import pinterest from './Images/pinterest.png'
import twitter from './Images/twitter.png'
import discord from './Images/discord.png'
import whatsapp from './Images/whatsapp.png'
import DecorMakers2 from './Images/DecorMakers.png'
import decor_video from './Images/decor_video.mp4'
import nice_video from './Images/nice_video.mp4'
import video1 from './Images/1.mp4'
import video2 from './Images/2.mp4'
import video3 from './Images/3.mp4'
import video4 from './Images/4.mp4'
import video5 from './Images/5.mp4'
import video6 from './Images/6.mp4'
import video7 from './Images/7.mp4'
import video8 from './Images/8.mp4'
import video9 from './Images/9.mp4'
import video10 from './Images/10.mp4'
import black_background from './Images/black_background.jpeg'
import pic from './Images/niceat33.jpg'
//import video11 from './Images/11.mp4'
//import video12 from './Images/12.mp4'
import {React, useEffect, useState} from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
export default function App() {
  const [name, setName] = useState('')
  const [keys, setKeys] = useState([])
  const [randomW, setRandomW] = useState([])
  const video1before_animation = batch(StickyIn(), FadeIn(), ZoomIn());
  const video2before_animation = batch(StickyOut(), FadeIn(), ZoomIn(), MoveIn(0,-200));
  const video3before_animation = batch(StickyOut(), FadeIn(), ZoomIn(), MoveOut(0,-200));
  const video4before_animation = batch(StickyOut(), FadeIn(), ZoomIn(), MoveOut(0,-200));
  const video5before_animation = batch(StickyOut(), FadeIn(), ZoomIn(), MoveIn(0,-200));
  const video6before_animation = batch(StickyOut(), FadeIn(), ZoomIn(), MoveOut(0,-200));
  const video1animation = batch(StickyIn(), FadeIn(), ZoomIn());
  const video2animation = batch(StickyIn(), FadeIn(), ZoomIn());
  const video3animation = batch(StickyOut(), FadeIn(), ZoomIn(), MoveIn(0,-200));
  const video4animation = batch(StickyOut(), FadeIn(), ZoomIn(), MoveOut(0,-200));
  useEffect(()=>{
    setRandomW([`${Math.random()*75}%`,`${Math.random()*75}%`,`${Math.random()*75}%`])
    console.log('yesddd')
    axios.post(`${process.env.REACT_APP_SERVER_LINK}/api/verify`, {token: localStorage.getItem('token') || ''}, {headers:{'x-access-token':localStorage.getItem('token'), 'email':localStorage.getItem('email')}})
      .then((res)=>{
        if(res.data.firstName !== undefined && res.data.secondName !== undefined)
          setName(res.data.firstName+' '+res.data.secondName)
      }).catch((err)=>{

      })
  },[])
  return (
    <div style={{height:'100%', width:'100%'}}>
      <ScrollContainer>
        <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))} style={{
          width:'100%'
        }}>
          <Header name={name} />
          <div style={{
            display:'flex',
          }}>
            <div style={{
              height:'85vh',
              width:'100%'
            }} id='decor_makers_bricks'>
              <div align="center">
                <img src={DecorMakers} />
                <h1>صناع الديكور</h1>
                <br/>
                <h4 style={{width:'350px',display:'flex',justifyContent:'center',textAlign:'center'}}>نقوم بعمل ديكورات تناسب المنزل أو المشروع الخاص بك ليكون جذابا وجميلا</h4>
                <br/>
                <br/>
                <div style={{
                  width:'100%',
                  display:'flex',
                  justifyContent:'space-around'
                }}>
                  {/*<img src={tiktok} width="80" />
                  <img src={instagram} width="80" />
                  <img src={twitter} width="80" />
                  <img src={pinterest} width="80" />
                  <img src={whatsapp} width="80" />
                  <img src={discord} width="80" />
                  */
                  }
                </div>
              </div>
            </div>
          </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
                <Animator animation={video3animation} style={{
                  width:'100%'
                }}>
                  <div align="center" id="decor_makers_1" style={{
                    width:'100%',
                    height:'100vh',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    //backgroundImage: item.video
                  }}>
                    <div style={{width:'100%'}}>
                      <div /*style={{position:'absolute',zIndex:'1',opacity:'1', width:'100%'}}*/ align="center">
                        <h1>أعمالنا</h1>
                        <video src={video5} mute="false" controls style={{width:'300px', borderRadius:'10px',border:'5px solid gold'}} className="video8909" />
                      </div>
                    </div>
                  </div>
                  </Animator>
        </ScrollPage>
        <ScrollPage>
                <Animator animation={video3animation} style={{
                  width:'100%'
                }}>
                  <div align="center" id="decor_makers_1" style={{
                    width:'100%',
                    height:'100vh',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    //backgroundImage: item.video
                  }}>
                    <div>
                      <h1>أعمالنا</h1>
                      <video src={video10} mute="false" controls style={{width:'300px', borderRadius:'10px'}} />
                    </div>
                  </div>
                  </Animator>
        </ScrollPage>
        <ScrollPage>
                <Animator animation={video3animation} style={{
                  width:'100%'
                }}>
                  <div align="center" id="decor_makers_1" style={{
                    width:'100%',
                    height:'100vh',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    //backgroundImage: item.video
                  }}>
                    <div>
                      <h1>أعمالنا</h1>
                      <video src={video7} mute="false" controls style={{width:'300px', borderRadius:'10px'}} />
                    </div>
                  </div>
                  </Animator>
        </ScrollPage>
        <ScrollPage>
                <Animator animation={video3animation} style={{
                  width:'100%'
                }}>
                  <div align="center" id="decor_makers_1" style={{
                    width:'100%',
                    height:'100vh',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    //backgroundImage: item.video
                  }}>
                    <div>
                      <h1>أعمالنا</h1>
                      <video src={video8} mute="false" controls style={{width:'300px', borderRadius:'10px'}} />
                    </div>
                  </div>
                  </Animator>
        </ScrollPage>
        <ScrollPage>
                <Animator animation={video3animation} style={{
                  width:'100%'
                }}>
                  <div align="center" id="decor_makers_1" style={{
                    width:'100%',
                    height:'100vh',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    //backgroundImage: item.video
                  }}>
                    <div>
                      <h1>أعمالنا</h1>
                      <video src={video9} mute="false" controls style={{width:'300px', borderRadius:'10px'}} />
                    </div>
                  </div>
                  </Animator>
        </ScrollPage>
        <ScrollPage>
                <Animator animation={video3animation} style={{
                  width:'100%'
                }}>
                  <div align="center" id="decor_makers_1" style={{
                    width:'100%',
                    height:'100vh',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    //backgroundImage: item.video
                  }}>
                    <div>
                      <h1>أعمالنا</h1>
                      <video src={video6} mute="false" controls style={{width:'300px', borderRadius:'10px'}} />
                    </div>
                  </div>
                  </Animator>
        </ScrollPage>
        <ScrollPage>
                <Animator animation={video3animation} style={{
                  width:'100%'
                }}>
                  <div align="center" id="decor_makers_1" style={{
                    width:'100%',
                    height:'100vh',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    //backgroundImage: item.video
                  }}>
                    <div>
                      <h1>أعمالنا</h1>
                      <video src={video1} mute="false" controls style={{width:'300px', borderRadius:'10px'}} />
                    </div>
                  </div>
                  </Animator>
        </ScrollPage>
        <ScrollPage>
                <Animator animation={video3animation} style={{
                  width:'100%'
                }}>
                  <div align="center" id="decor_makers_1" style={{
                    width:'100%',
                    height:'100vh',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    //backgroundImage: item.video
                  }}>
                    <div>
                      <h1>أعمالنا</h1>
                      <video src={video2} mute="false" controls style={{width:'300px', borderRadius:'10px'}} />
                    </div>
                  </div>
                  </Animator>
        </ScrollPage>
        <ScrollPage>
                <Animator animation={video3animation} style={{
                  width:'100%'
                }}>
                  <div align="center" id="decor_makers_1" style={{
                    width:'100%',
                    height:'100vh',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    //backgroundImage: item.video
                  }}>
                    <div>
                      <h1>أعمالنا</h1>
                      <video src={video3} mute="false" controls style={{width:'300px', borderRadius:'10px'}} />
                    </div>
                  </div>
                  </Animator>
        </ScrollPage>
        <ScrollPage>
                <Animator animation={video3animation} style={{
                  width:'100%'
                }}>
                  <div align="center" id="decor_makers_1" style={{
                    width:'100%',
                    height:'100vh',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    //backgroundImage: item.video
                  }}>
                    <div>
                      <h1>أعمالنا</h1>
                      <video src={video4} mute="false" controls style={{width:'300px', borderRadius:'10px'}} />
                    </div>
                  </div>
                  </Animator>
        </ScrollPage>
        {/*<ScrollPage>
        <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())} style={{
          width:'100%'
        }}>
          <div align="center" id="decor_makers_1" style={{
            width:'100%',
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <div>
              <h1>أعمالنا</h1>
              <video src={decor_video} autoplay controls style={{width:'300px', borderRadius:'10px'}} />
            </div>
          </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
        <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())} style={{
          width:'100%'
        }}>
          <div align="center" id="decor_makers_2" style={{
            width:'100%',
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <div>
              <h1>أعمالنا</h1>
              <video src={nice_video} autoplay controls style={{width:'300px', borderRadius:'10px'}} />
            </div>
          </div>
          </Animator>
        </ScrollPage>*/}
      </ScrollContainer>
    </div>
  );
}
