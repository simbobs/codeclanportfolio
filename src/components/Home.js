import React from 'react';
import styled from "styled-components";
import NavBar from './NavBar';

const Title = styled.h1`
color: #FE6D73;
padding: 2%;
text-align: center;`

// #17C3B2
// #FE6D73
// #7692FF;

const Paragraph = styled.p`
text-align: center;
color: #38369A;
padding-left: 5%;
padding-right: 5%;
padding-top: 3%;
padding-bottom:3%;
border: 2px solid #17C3B2;
border-radius: 25px;
margin-left: 30%;
margin-right: 30%;

`




const Home = () => {


  

    return(
        <>
       
        <Title> Welcome to the Home Page</Title>
        <NavBar />
        <Paragraph> This is where Simona will eventually write some information about herself and show you some projects that she's worked on for the past 10 weeks. They may not be masterpieces, but they'll show you just how much she's learned in 10 weeks. From a coding noob to a human who has weekly coding nightmares.</Paragraph>
        </>
    )
}

export default Home;