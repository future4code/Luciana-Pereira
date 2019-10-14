import React from "react";
import { PostPerfil } from "..Post/PostPerfil";
import { PostCurti } from "../Post/PostCurti";
import { PostComent } from "..Post/PostComent";
import styled from "styled-components";

const ContainerPost = styled.div`
  border: 1px solid black;
`

export function PostContainer() {
  return (
    <ContainerPost>
      <PostPerfil />
      <PostCurti />
      <PostComent/>
    </ContainerPost>
  );
}
