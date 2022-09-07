import React from "react";
import styled from "styled-components";
import Spotify from "../assets/spoti.svg";

function Top() {
  const Container = styled.div`
    height: 104px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

  `;

 const Logo = styled.img`
    width: 200px;
    height: 100px;
    

 `

  return <Container>
        <Logo src={Spotify}/>

  </Container>;
}

export default Top;
