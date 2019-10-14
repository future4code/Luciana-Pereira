import React from 'react';
import styled from 'styled-components'
import Post from './Post/PostContainer'


const MainContainer=styled.div`
border: 1px solid black;
`
export function ItemContainer(props) {
return (
    <MainContainer>
        <Post/>
     </MainContainer>
);
}

