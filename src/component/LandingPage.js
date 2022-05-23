import React, { useEffect } from 'react'
import Header from './Header'
import styled from 'styled-components';
import Footer from './Footer';
import Aos from "aos";
import "aos/dist/aos.css";
import sign from '../img/infosign.jpg';
import lap from '../img/lap.png';
import infoTher from '../img/infotherapy.png';
import infoTest from '../img/infotest.jpg';
import infoBook from '../img/infobook.jpg';
import picOne from '../img/pic1.jpg';
import picTwo from '../img/pic2.jpg';
import topPic from '../img/pic1.jpeg';
import { Link } from 'react-router-dom';


function LandingPage() {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, []);
  return (
    <div>
    <Header />
    <BodyInfo>
        <ImgSection></ImgSection>
        <BodyText>
            Talk to your Therapist online anytime anywhere!
        </BodyText>
        <EmailBox>
            <div className='email'>
                <label for = 'mail'>Enter your email to register</label>
                <input type="email" id='mail'/>
            </div>
            <div className='sumbit'>
                <button>Register</button>
            </div>
        </EmailBox>
    </BodyInfo>
    <About>
    
        <AboutText>
            <h1>We connect you with licensed therapists</h1>  
            <div>“You don’t have to be positive all the time. It’s perfectly okay to feel sad, angry, annoyed, frustrated, scared and anxious. Having feelings doesn’t make you a negative person. It makes you human.”</div>
        </AboutText>  

        <AboutPicture>
            <div className='first'>
                <div className='none'></div>
                <div ></div>
            </div>
            <div className='second'>
                <div ></div>
                <div className='none'></div>  
            </div> 
        </AboutPicture>     
        
    </About>
    <HowItWorks>
        <div className='container' id='work'>
            <div className='left'>
                <hr className='first'></hr>
                <div data-aos="fade-up" className='f_container'>
                    <img src={infoTest} alt='img' />
                    <h4>Psychological test</h4>
                    <p>To be able to determine what ails you and which doctor is right for you</p>
                </div>
                <hr className='second'></hr> 
                <div data-aos="fade-up" className='s_container'>
                    <img src={infoBook} alt='img' />
                    <h4>Book a session</h4>
                    <p>Book a session that suits you</p>
                </div>
                <hr className='third'></hr>
            </div>
            <div className='middle'>
                <MiddleLine>
                    <h3>Step 01</h3>
                </MiddleLine>
                <MiddleLine>
                    <h3>Step 02</h3>
                </MiddleLine>
                <MiddleLine>
                    <h3>Step 03</h3>
                </MiddleLine>
                <MiddleLine>
                    <h3>Step 04</h3>
                </MiddleLine>
                    <h3>Step 05</h3>
                
                
            </div>
            <div className='right'>
                <div data-aos="fade-up" className='f_container'>
                    <img src={sign} alt='img' />
               <Link to={'/Sign'}> <h4>Signin</h4> </Link>
                    <p>To be able to follow up with the psychiatrist</p>
                </div>
                <hr className='first'></hr>
                <div data-aos="fade-up" className='s_container'>
                    <img src={infoTher} alt='img' />
                    <h4>Choose psychotherapist</h4>
                    <p>Choose a suitable psychotherapist for you</p>
                </div>
                <hr className='second'></hr>
                <div data-aos="fade-up" className='t_container'>
                    <img src={lap} alt='img' />  
                    <p>Start your treatment journey</p>
                </div>
            </div>
        </div>
    </HowItWorks> 
    <Footer></Footer>
    </div>
  )
}




export default LandingPage

const BodyInfo = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    position: relative;

    @media only screen and (max-width: 768px) {
        height: 200px;
    }

`

const ImgSection = styled.div`
    width: 70%;
    background-image: url(${topPic});
    background-size: cover;
    background-position-y: -50px;
    height: 90%;
    border-radius: 0 300px 0 0;
    background-repeat: no-repeat;
    
`

const BodyText = styled.div `
    width: 25%;
    height: 100%;
    font-weight: bold;
    font-size: 35px;
    padding: 5% 0 0 2%;
    color: #10338C;

    
    
`

const EmailBox = styled.div`
    position: absolute;
    background-color: #fff;
    width: 66%;
    height: 80px;
    bottom: -1%;
    left: 15%;
    border-radius: 13px;
    box-shadow: 16px 18px 18px -5px rgb(0 0 0 / 48%);
    display: flex;
    justify-content: space-around;
    

    .email{
        width: 70%;
        background-color: #fff;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: flex-start;
        color: #404852;
        z-index: 1000;

        label{
            font-size: 12px;
            padding-left: 2.5%;
        }

        input{
            width: 90%;
            height: 60%;
            padding: 0 5%;
            font-size: 18px;
            font-weight: bold;
            outline: 0;
            border: 0;
        }
    }

    .sumbit {
            width: 30%;
            display: flex;
            justify-content: center;
            align-items: center;

            button{
                border: 0;
                width: 75%;
                height: 40px;
                background-color: #10338C;
                color: #fff;
                border-radius: 11px;
                cursor: pointer;
            }
        }
`

const About = styled.div `
    padding-top: 10%;
    display: flex;
    flex-direction: row;
    height: 800px;
    width: 100%;
    justify-content: space-around;
    //background-color: red;
    flex-wrap: wrap;
   
`



const AboutText = styled.div`
    flex-direction: column;
    flex: 0 0 20%;
    margin-left: 10%;

    h1{
        font-weight: normal;
        font-size: 36px;
        padding-top: 30%;
    }

    div{
        padding-top: 50%;
        font-size: 14px;
    }
`

const AboutPicture = styled.div`
    display: flex;
    max-height: 100%;
    width: 60%;
    //background-color: rgba(0,0,0,0.8);
    flex-direction: column;

   

    .first{
        flex: 30 0 50%;
        max-height: 50%;
        //background-color: blue;
        flex-direction: row;
        display: flex;
        

        div{
            flex: 0 0 40%;
            height: 100%;
            background-image: url(${picTwo});
            background-size: 100% 105%;
            background-position: center;
            border-radius: 180px 180px 0 0;
        }
    }

    .second{
        flex: 30 0 50%;
        max-height: 50%;
        flex-direction: row;
        display: flex;
        

        div{
            flex: 0 0 40%;
            height: 100%;
            border-radius: 0 0 180px 180px;
            background-image: url(${picOne});
            background-size: 100% 110%;
            background-position: center;
        }
    }

    .none {
        background: none!important;
        border: 0!important;
    }
`

const HowItWorks = styled.div` 
    width: 100%;
    height: 800px;
    //background-color: red;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        display: flex;
        flex: 0 0 70%;
        flex-direction: row;
        //background-color: blue;
      
        height: 100%;

        .left {
            flex: 0 0 48%;
            //background-color: green;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            position: relative;

            div{
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                img {
                    height: 70%;
                    width: 50%;
                    margin-left: 40%;
                    margin-top: 20px;
                }

                h4{
                    color: #10338C;
                    
                    font-size: 20px;
                }

                p {
                    padding-left: 20px;
                    color: #10338C;
                }
            }

            .f_container{
                
                width: 50%;
                margin-top: 130px;
                height: 30%;
            }

            .s_container{
            
                width: 50%;
                margin-top: 60px;
                height: 30%;
            }
            
            .first{
                width: 60%;
                position: absolute;
                right: -23px;
                border-top: 4px solid #10338C;
                top: 100px;
                
            }

            .second{
                width: 60%;
                position: absolute;
                right: -23px;
                border-top: 4px solid #10338C;
                top: 400px;
            }

            .third {
                width: 60%;
                position: absolute;
                right: -23px;
                border-top: 4px solid #10338C;
                bottom: 100px;
            }
        }

        .middle{
            flex: 0 0 5%;
        }

        .right {
            flex: 0 0 47%;
           // background-color: yellow;
            position: relative;
            div{
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                img {
                    height: 70%;
                    width: 50%;
                    margin-left: 40%;
                    margin-top: 20px;
                }

                h4{
                    color: #10338C;
                    
                    font-size: 20px;
                }

                p {
                    padding-left: 20px;
                    color: #10338C;
                }
            }
            

            .f_container{
                width: 50%;
                height: 30%;
            }

            .s_container{
               
                width: 50%;
                margin-top: 30px;
                height: 30%;
            }

            .t_container{
                
                width: 50%;
                margin-top: 40px;
                height: 30%;
            }

            .first {
                width: 60%;
                position: absolute;
                left: -23px;
                border-top: 4px solid #10338C;
                top: 250px;
            }

            .second {
                width: 60%;
                position: absolute;
                left: -23px;
                border-top: 4px solid #10338C;
                bottom: 250px
            }
        }
    }
`
const MiddleLine = styled.div`
    padding-top: 10px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #10338C;

    &::after{
        content: "";
        border-right: 4px solid #10338C;
        z-index: 1000;
        height: 80px;
        margin-top: 10px;

    }

    
`