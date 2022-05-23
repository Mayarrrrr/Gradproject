import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png';
function Footer() {
  return (
    <div>
        <Container>
            <InnerContainer>
                <img src={logo} alt='logo' style={{width: '20%'}} />
                <div>
                    <ul>
                        <h4 style={{color: 'white', textDecoration: 'underline'}}>Register</h4>
                        <li style={{fontSize: '15px', color:'white', opacity: '30%'}}>&nbsp;Home</li>
                        <li style={{fontSize: '15px', color:'white', opacity: '30%'}}>&nbsp;Therapist List </li>
                        <li style={{fontSize: '15px', color:'white', opacity: '30%'}}>&nbsp;Psychological test</li>
                        <li style={{fontSize: '15px', color:'white', opacity: '30%'}}>&nbsp;Blogs</li>
                        <li style={{fontSize: '15px', color:'white', opacity: '30%'}}>&nbsp;About</li>
                    </ul>
                </div>
                <div>
                    <h4>Register</h4>
                    <ul>
                        <li>register</li>
                        <li>register</li>
                        
                    </ul>
                </div>
                <div>
                    <h4>Register</h4>
                    <ul>
                        <li>register</li>
                        <li>register</li>
                        
                    </ul>
                </div>
                <div>
                    <h4>Register</h4>
              <Link to={'/SignupDoc'}> <button> &nbsp;&nbsp;Join us as a Therapist&nbsp;&nbsp;</button> </Link>
                </div>
            </InnerContainer>
        </Container>
    </div>
  )
}

export default Footer

const Container = styled.div`
    width: 100%;
    height: 300px;
    margin-top: 40px;
    background: linear-gradient(217deg,white, #10338C);
`

const InnerContainer = styled.div`
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div{
        height: 30%;
    }

    ul li {
        list-style: none;
        padding: 5px;
        font-size: 10px;
        font-weight: lighter;
    }

    h4 {
        padding-bottom: 20px;
        text-align: center;
    }

    button {
        width: 160px;
        height: 28px;
        color: #000;
        background: linear-gradient(190deg,white, #FAE39B);
        border-radius: 20px;
        border: none;
        width: fit-content;
        font-weight: bold;

    }
`