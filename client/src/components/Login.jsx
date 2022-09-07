import React from "react";
import styled from "styled-components";
import OAuth from "./OAuth";
import SpotifyAuth from "./SpotifyAuth";
import Register from "./Register";
function Login() {
  const Container = styled.div`
    height: calc(100vh - 134px);
    display: flex;
    align-items: flex-start;
    justify-content: center;
  `;
  const Wrapper = styled.div`
    width: 500px;
  `;
 
  return (
    <Container>
      <Wrapper>
        <OAuth/>
        
        <SpotifyAuth/>
        <Register/>
      </Wrapper>
    </Container>
  );
}

export default Login;
