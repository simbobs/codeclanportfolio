import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
color: #FE6D73;
padding: 5%;
text-align: center;`

const Paragraph = styled.h2`
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

const SmallerParagraph = styled(Paragraph)`
border: none;
`


const Error = () => {


  
    return(
        <>
        <Title>Ooooopsies...</Title>
        <Paragraph>Looks like I've messed something up somewhere.</Paragraph>
        <SmallerParagraph>...or you're just in the wrong place.</SmallerParagraph>
        </>

    )
}
export default Error;