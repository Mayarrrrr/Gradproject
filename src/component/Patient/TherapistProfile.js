import React from 'react';
import styled from 'styled-components';
import ConfirmPopUp from './ConfirmPopUp';
import {useState} from 'react';
import ConfirmMessage from './ConfirmMessage';
import NavBar from './NavBar';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';


function TherapistProfile() {
    
    let time = ['13:00 PM', '14:00 PM', '15:00 PM', '16:00 PM', '17:00 PM', '18:00 PM', '19:00 PM', '20:00 PM', '21:00 PM' ,'22:00 PM' ,'23:00 PM' ,'24:00 PM']

    const [buttonPopup, setButtonPopup] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [dayValue, setDayValue] = useState("")
    const [timeValue, setTimeValue] = useState("")
    const [dateValue, setDateValue] = useState("")

    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let cdate = new Date().getMonth();
    let year = new Date().getFullYear();
    let date = []
    let day = new Date().getDay();
    let days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
    var index = 21;
    let appointment = [];
    for(var i = 0; i <= 21; i++) {
        date.push(`${months[cdate - 1]}, ${year}`);
        cdate++;
        if(cdate > 12) {
            year++;
            cdate = 1;
        }
        
    }

    for(var i = 0; i < 5; i++) {
        appointment.push(`${days[day - 1]}`);
        day++;
        if(day > 7) {
            day = 1;
        }
        
    }

    const handleDay = function(e) {
        setDayValue(e.target.getAttribute('data-index'));
    }

    const handleTime = function(e) {
        setTimeValue(e.target.getAttribute('data-index'))
    }

    const handleDate = function(e) {
        setDateValue(e.target.value);
    }

    const handleClick = event => {
        event.currentTarget.classList.toggle('active')};

        const labels = {
            0.5: 'Useless',
            1: 'Useless+',
            1.5: 'Poor',
            2: 'Poor+',
            2.5: 'Ok',
            3: 'Ok+',
            3.5: 'Good',
            4: 'Good+',
            4.5: 'Excellent',
            5: 'Excellent+',
          };
          
          function getLabelText(value) {
            return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
          }
            const [value, setValue] = React.useState(2);
            const [hover, setHover] = React.useState(-1); 

  return (
    <Container>
        
        <div className='blue'>   
          <NavBar/>
        </div>
        <ConfirmPopUp trigger={buttonPopup} setTrigger = {setButtonPopup} setShow ={setShowButton} date = {dateValue} day = {dayValue} time = {timeValue}> </ConfirmPopUp>
        <ConfirmMessage show = {showButton} setShow = {setShowButton}/>
        <TherapistCard>
            <div>
                <div className='therapist-card'>
                    <div>
                        <img src='/img/profile.jpeg' alt='Profile Picture' />
                        <div >
                        <Box sx={{ width: 200, display: 'flex', alignItems: 'center',}}>
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                            setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                        </Box>
                        </div>
                    </div>
                    <div>
                        <h2>Psychologist Sonia Barbasa</h2>
                        <div>
                            <ul>
                                <li>Language: <span>Arabic, English</span></li>
                                <li>Country of Residence: <span>America</span></li>
                                <li>Joining Date: <span>a month ago</span></li>
                                <li>Specialised in: <span></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='therapist-desc'>
                    <div className='location'>
                        <ul>
                            <li>Location:
                                <span>#9 Tumma St. Mogsupaquen YK H751</span>
                            </li>
                            <li><img src='/img/map.jpg' alt='map'/></li>
                        </ul>
                    </div>
                    <div className='exp'>
                        <ul>
                            <li>
                                Experience:
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                            </li>
                        </ul>
                    </div>
                    <div className='sessions'>
                        <ul>
                            <li>
                                Number of sessions:
                                <span>Lorem Ipsum is simply dummy as been 1500s,</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='left'>
                <div className='box'>
                    <div className='border'>Book now</div>
                    <h4>Choose a suitable session time for you</h4>
                    <div className='Calender'>
                        <select onChange={handleDate}>
                            {
                                date.map(key => (
                                    <option value={key} >{key}</option>
                                ))  
                            }
                        </select>
                        <ul className='days'>
                        {appointment.map((i) => 
                        <li key={i} data-index={i} onClick={(e) => {handleClick(e); handleDay(e)}} className='day'>
                            <span value = "" 
                            >{index++}</span>
                            <span>{i}</span>
                        </li>)}
                        </ul>
                        
                    </div>

                    <div className='available_time'>
                        <h5>Available Time</h5>
                        <ul className='times'>
                        {time.map((i) => 
                        <div className='time' onClick={(e) => {handleClick(e); handleTime(e);}}>
                            <li key={i} data-index={i} >{i}</li>
                        </div>)}
                        </ul>
                        
                    </div>
                    <div className='confirm'>
                            <button onClick= {() => setButtonPopup(true)}>Confirm</button>
                    </div>
                </div>
            </div>
        </TherapistCard>

        
    </Container>
  )
}

export default TherapistProfile

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

const TherapistCard = styled.div`
    width: 65%;
    height: 85%;
    border-radius: 50px;
    background-color: #fff;
    position: absolute;
    z-index: 100;
    box-shadow: 16px 18px 18px -5px rgb(0 0 0 / 48%);
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    

    
    div:first-child {
        width: 60%;
        padding-top: 25px;
        height: 100%;
        padding-left: 30px;
        display: flex;
        flex-direction: column;
        
       

        .therapist-card{
            width: 100%;
            height: 40%;
            display: flex;
            flex-direction: row;
            padding: 0;

            div:first-child{
                width: 40%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;

                img {
                    width: 180px;
                    height: 180px;
                    border-radius: 50%;
                }
            }

            div:last-child{
                width: 60%;
                height: 100%;
                display: flex;
                flex-direction: column;

                h2 {
                    color: #10338c;
                    padding-top: 5%;
                }

                div{
                    flex: 0 0 60%;
                    padding: 5% 0 0 30px;


                    ul {
                        list-style: none;
                        color: #000;
                        font-size: 13px;
                        font-weight: 500;
                    }

                    ul li span {
                        color: rgba(0,0,0,0.5);
                    }

                    li:last-child{
                        padding-top: 25px;
                    }
                }
            }
            
        }

        .therapist-desc{
            height: 59%;
            width: 100%;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            

            ul {
                list-style: none;
                padding-top: 10px;
                width: 100%;
                height: 10%;
                font-size: 14px;
            

                li {
                    width: 80%;
                    font-weight: bold;
                    
                    span{
                        color: rgba(0,0,0,0.5);
                        font-size: 12px;
                        padding-left: 5px;
                        display: block;
                        padding-top: 10px;
                        
                    }
                }
            }
            
            .location{
                flex: 0 0 40%;
                height: 40%;
                
                
                
                ul {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;

                    li:first-child {
                    width: 100%;
                    height: 10%;
                    font-size: 14px;
                    
                    span{
                        color: rgba(0,0,0,0.5);
                        font-size: 12px;
                        padding-left: 5px;
                        display: inline-block;
                        padding: 0;
                    }
                }

                li:last-child {
                    height: 90%;
                    width: 200px;
                    padding-right: 50px;
                    padding-top: 10px;
                    img { 
                        padding-top: 5%;
                        width: 100%;
                        height: 100%;
                    }
                }
                }
            
            }

            .exp {
                flex: 0 0 35%;
                height: 20%;
                
            }

            .sessions {
                flex: 0 0 20%;
                
               
            }
        }
        
    }
    
    .left {
        width: 40%;
        height: 100%;
        padding-left: 40px;
        display: flex;
        flex-direction: column;
        justify-content: end;
        padding-bottom: 50px;

        .box {
            height: 80%;
            width: 80%;
            padding: 0;
            border-radius: 30px 0 30px 30px;
            box-shadow: 0 20px 40px -5px rgb(0 0 0 / 48%);
            display: flex;
            flex-direction: column;

            .border {
                padding: 0;
                width: 100%;
                flex: 0 0 15%;
                color: #fff;
                background-color: #10338c;
                border-radius: 30px 0 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
            }

            h4 {
                font-size: 14px;
                font-weight: bold;
                padding-left: 5px;
                padding-top: 15px;
            }

            .Calender {
                padding-top: 15px;
                padding-left: 5px;
                display: flex;
                flex-direction: column;
                flex: 0 0 10%;

                select{
                    width: 50%;
                    border: 0;
                    font-size: 14px;
                    font-weight: bold;
                    outline: none;

                    option {
                        
                    }
                }
            }

            .days {
                padding: 0;
                margin: 0;
                display: flex;
                justify-content: space-evenly;

                
                .day {

                    padding: 0;
                    background-color: rgba(0,0,0,0.1);
                    width: 45px;
                    height: 55px;
                    margin-top: 10px;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;

                    &:hover {
                        background-color: #10338c;
                        opacity: 0.4;
                        color: #fff;
                        cursor: pointer;
                    }
                }

                .active {
                    background-color: #10338c;
                    opacity: 0.4;
                    color: #fff;
                }
            }

            .available_time {
                padding-top: 15px;
                padding-left: 5px;
                display: flex;
                flex-direction: column;
                flex: 0 0 30%;
            }

            .times {
                padding: 0;
                margin: 0;
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;

                .time {
                    padding: 0;
                    background-color: rgba(0,0,0,0.1);
                    width: 65px;
                    height: 30px;
                    list-style: none;
                    margin: 10px 2.5px 0 2.5px;
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;

                    
                    &:hover {
                        background-color: #10338c;
                        opacity: 0.4;
                        color: #fff;
                        cursor: pointer;
                    }

                    

                }

                .active {
                        background-color: #10338c;
                        opacity: 0.4;
                        color: #fff;
                    }
                    
            }

            .confirm {
                flex: 0 0 20%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 20px;
                button {
                    width: 120px;
                    height: 50px;
                    border-radius: 15px;
                    border: 0;
                    background-color: #10338c;
                    color: #fff;

                    &:hover { 
                        background-color: #10338c;
                        cursor: pointer;
                    }
                }
            }
        }
        
    }
`