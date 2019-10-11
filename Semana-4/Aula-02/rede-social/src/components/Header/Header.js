import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
box-sizing: border-box;
border:1px solid black;
margin:10px 50px;
display:inline-flex;
width: 150px;
background-color: white;
` 
const ContainerD = styled.div`
background-color: Darkgrey;
margin: 20px 70px;


`

const Logo = styled.div`
background-color: Blue;
color: white;
font-family:calibri;
font-size:50px;
border-radius: 6%;
width: 250px;
height: 50px;
padding: 10px 20px 20px 20px;
margin: 10px 10px;

`



export function Header (props){
    return (
        <ContainerD>
        <HeaderContainer>
            <Logo>FutureLink</Logo>

        </HeaderContainer>
        </ContainerD>

    );
}