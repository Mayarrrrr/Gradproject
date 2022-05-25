import React from 'react'
import styled from 'styled-components';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import {useState} from 'react'

function Chat() {
    const [title, setTitle] = useState('');
  return (
    <Container>
        <div className='blue'>     
        </div>

        <ChatBox>
            <InfoSection>
                <div className='info'>
                    <div className='image'>
                        <img src='/img/profile.jpeg'/>
                    </div>
                    <div className='desc'>
                        <h5>Sonia Barbasa</h5>
                        <p>last online 2 hours ago</p>
                    </div>
                </div>
                <div className='adjustment'>
                    <div className='attach'>
                        <AttachFileIcon />
                    </div>
                    <div className='more'>
                        <MoreVertIcon />
                    </div>
                </div>
            </InfoSection>
            <ChatSection>
                <div className='container'> 
                    <div className='row' id='send'>
                        <div className='receiver'>Can you tell me what makes you feel unwanted by those around you?</div>
                    </div>

                    <div className='row' id = "receive">
                        <div className='sender'>It's harder for me to talk about this feeling</div>
                    </div>

                    <div className='row' id='send'>
                        <div className='receiver'>Can you tell me what makes you feel unwanted by those around you?</div>
                    </div>

                    <div className='row' id = "receive">
                        <div className='sender'>It's harder for me to talk about this feeling</div>
                    </div>
                    <div className='row' id = "receive">
                        <div className='sender'>It's harder for me to talk about this feeling</div>
                    </div>
                    <div className='row' id = "receive">
                        <div className='sender'>It's harder for me to talk about this feeling</div>
                    </div>

                    <div className='row' id = "receive">
                        <div className='sender'>It's harder for me to talk about this feeling</div>
                    </div>

                    <div className='row' id = "receive">
                        <div className='sender'>It's harder for me to talk about this feeling</div>
                    </div>

                    
                </div>
            </ChatSection>
            <InputSection>  
                <form>
                    <input type="text" placeholder="Type a message here" onChange={event => setTitle(event.target.value)}/>
                    <div>
                        <button type='sumbit'>
                            <SendIcon className='send'/>
                        </button>
                    </div>

                </form>
            </InputSection>
        </ChatBox>

    </Container>
  )
}

const ChatSection = styled.div`
    flex: 0 0 70%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    min-height: 40%;
    max-height: 100%;
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;  
    }

    .container {
        
        width: 100%;
        height: auto;
        max-height: 100%;
        display: flex;
        flex-direction: column;
        
        padding-bottom: 20px;

        .row {
            width: 100%;
            height: auto;
        }
        

        .sender {
            display: block;
            position: relative;
            color: #fff;
            text-align: right;
            display: flex;
            padding: 10px 14px;
            background: #404852;
            margin: 10px 30px;
            min-width: 20%;
            max-width: 45%;
            min-height: 20px;
            word-wrap: break-word;
            padding: 10px 15px;
            border-radius: 10px;
            border: 1px solid #ccc;
            float: right;
            right: 20px;
            

            &::before {
                content: '';
                position: absolute;
                visibility: visible;
                top: -1px;
                right: -10px;
                border: 10px solid transparent;
                border-top: 10px solid #ccc;
            }

            &::after {
                content: '';
                position: absolute;
                visibility: visible;
                top: 0px;
                right: -8px;
                border: 10px solid transparent;
                border-top: 10px solid #404852;
                clear: both;
                
            }

            
        }

        .receiver {
            display: block;
            position: relative;
            text-align: left;
            color: #000;
            width: auto;
            display: flex;
            padding: 10px 14px;
            background: #FAE492;
            margin: 10px 30px;
            max-width: 45%;
            min-height: 20px;
            word-wrap: break-word;
            padding: 10px 15px;
            border-radius: 10px;
            border: 1px solid #ccc;
            float: left;
            left: 20px;
            

            &::before {
                content: '';
                position: absolute;
                visibility: visible;
                top: -1px;
                left: -10px;
                border: 10px solid transparent;
                border-top: 10px solid #ccc;
            }

            &::after {
                content: '';
                position: absolute;
                visibility: visible;
                top: 0px;
                left: -8px;
                border: 10px solid transparent;
                border-top: 10px solid #FAE492;
                clear: both;
                
            }

            
        }
    }
`



export default Chat

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    .blue {
        top: 0;
        z-index: 0;
        width: 100%;
        height: 50vh;
        position: absolute;
        background-color: #10338C;
        
    }

`

const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: 10%;
    z-index: 1000;

    ul {
        display: flex;
        list-style: none;
        color: #fff;
        justify-content: end;
        

        li {
            padding: 10px 30px;
        }
    }
`

const ChatBox = styled.div`
    width: 60%;
    height: 80%;
    border-radius: 50px;
    background-color: #fff;
    position: absolute;
    z-index: 100;
    box-shadow: 16px 18px 18px -5px rgb(0 0 0 / 48%);
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    
    align-items: center;
`

const InfoSection = styled.div`
    flex: 0 0 15%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 40px;

    .info {
        flex: 0 0 30%;
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .image {
            flex: 0 0 23%;
            border-radius: 50%;
            height: 75%;
            width: 50%;

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }

        .desc {
            flex: 0 0 70%;

            p {
                color: #1b51d9;
            }
        }
    }

    .adjustment {
        flex: 0 0 30%;
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: end;

        .more {
            color: rgba(0,0,0,0.8);
            padding: 10px;
            border-radius: 50%;
            box-shadow: 0 0px 15px -3px rgb(0 0 0 / 48%);
            margin-left: 10%;
        }

        .attach {
            color: rgba(0,0,0,0.8);
            padding: 10px;
            border-radius: 50%;
            box-shadow: 0 0px 15px -3px rgb(0 0 0 / 48%);
        }
    }
    
`



const InputSection = styled.div`
    flex : 0 0 15%;
    width: 100%;
    padding: 5px 40px;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        border-bottom: 2px solid rgb(0,0,0,0.2);
        width: 92%;
    }
    
    form {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    input[type=text] {
        border: 0;
        padding: 20px;
        width: 70%;
        outline: 0;
    }

    button {
       border-radius: 50%;
       padding: 10px;
       display: flex;
       align-items: center;
       justify-content: center;
       border: 0;
       background-color: transparent;
       background-color: #2f6def;
       color: white;
       box-shadow: 0 0px 15px -3px rgb(47 109 239 / 48%);

       .send {
           transform: rotate(315deg);
           font-size: 20px;
       }
    }
`



