import React from 'react'
import styled from 'styled-components';
import {useState} from 'react';
import ConfirmMessage from './ConfirmMessage';

function ConfirmPopUp(props) {
  return (props.trigger) ? (
    <Container onClick={() => props.setTrigger(false)}>
        
        <PopUp>
            <TaskImg src = "/img/task.png" />
            <h5>You have added your appointment on</h5>
            <div className='date'>
                <h4>February 14,2022,</h4>
                <h4>Tuesday 04:30 PM</h4>
            </div>
            <div className='buttons'>
                <button className='confirm' onClick={() => {props.setShow(true); props.setTrigger(false)}}>Confirm</button>
                <button className='cancel' onClick={() => props.setTrigger(false)}>Cancel</button>
            </div>
        </PopUp>
    </Container>
  ) : "";
}

export default ConfirmPopUp

const Container = styled.div`
    position: fixed;
    z-index: 1000;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

const PopUp = styled.div`
    width: 500px;
    height: 350px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h5 {
        padding: 15px 0;
        color: rgba(0, 0, 0, 0.3)
    }

    .date{
        width: 40%;
        height: 100px;
        background-color: rgba(16,56,140,0.1);
        box-shadow: 0 10px 18px -5px rgb(0 0 0 / 48%);
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h4 {
            color: #10388c;
        }
    }

    .buttons {
        height: 150px;
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            width: 130px;
            height: 38px;
            border-radius: 15px;
            border: 0;
            font-size: 20;
            font-weight: bold;
            color: #fff;
            background-color: rgba(64, 72, 82, 0.6);
            &:hover {
                background-color: #10388c;
                cursor: pointer;
            }
        }
    }
`

const TaskImg = styled.img`
    width: 60%;
    height: 150px;

`