import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <Container>
        <NavMain>
        <HashLink to='/LandingPage/#work' > <List>How it works</List></HashLink>
           <Link to={'/SignupPatient'}> <List>Sign Up</List> </Link>
           <Link to={'/PLogin'}>  <List>Login</List>  </Link>
        </NavMain>
    </Container>
  )
}

export default Header

const Container = styled.div`
    background: #fff;
    display: flex;
    justify-content: end;
    align-items: center;
`

const NavMain = styled.ul`
    display: flex;
    list-style: none;
    color: #10338C;
`

const List = styled.li`
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
    height: 70px;
    font-weight: bold;
    font-size: 18px;
    border-radius: 0 0 0 30px;
    text-align: center;

    @media only screen and (max-width: 768px) {
        width: 60px;
    }
    
    &:hover {
        background-color: #10338C;
        color: white;
        transition: ease-in-out 0.2s;
        cursor: pointer;
    }
`
