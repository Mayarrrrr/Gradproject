import React from 'react'
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';


function ConfirmMessage(props) {
    return (props.show) ? (
        <Container>
            <PopUp>
                <div className='left'>
                    <h5>Thank you for your time. We will let you know when the Psychologist accepts your session appointment</h5>
                </div>
                <div className='right'>
                    <div className='iconBox' onClick={() => props.setShow(false)}>
                        <CloseIcon className='icon' />
                    </div>
                    <TaskImg src = "/img/task.png" />
                </div>
            </PopUp>
        </Container>
      ) : "" ;
}


export default ConfirmMessage

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
    justify-content: space-around;
    

    .right{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        width: 60%;

        .iconBox {

            background-color: rgba(64, 72, 82, 0.3);;
            width: 40px;
            height: 30px;
            border-radius: 0px 20px 0px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            .icon {
            border-radius: 20px;
            color: #fff;
            font-size: 20px;
        }
        }
    }

    .left {
        width: 40%;
        h5 {
            padding: 40px 0 0 30px;
            font-size: 16px;
            color: #10338c;
            opacity: 0.7;
        }
    }
`

const TaskImg = styled.img`
    width: 70%;
    height: 300px;

`