import React from "react";
import styled from "styled-components";
import Faceb from "../assets/facebook.svg";
import AppleLogo from "../assets/apple.svg";
import Googe from "../assets/google.svg";

function OAuth() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    height: 100%;
  `;

  const AuthItem = styled.div`
    width: 100%;
    background-color: #${(props) => props.bg};
    color: #${(props) => (props.color ? props.color : "fff")};
    padding: 13px 31px;
    border: 1px solid #999;
    border-radius: 34352px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${(props) => (props.cursor ? props.cursor : "pointer")};
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
  `;

  const Icon = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 10px;
  `;
  const Title = styled.span`
    font-weight: bold;
    text-align: center;
  `;
  const HrContainer = styled.div`
  
  width: 100%;
  display: flex;

`
const Hr = styled.hr`
 margin: 12px 0px 20px;
flex: 1 1 0%;
border-top: 1px solid #d9dadc;
`
const Or = styled.span`
  padding: 0px 20px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  color: black;
  margin-bottom: 10px;
`

 const google = () => {

  window.open("http://localhost:8080/auth/google", "_self");

 }


  return (
    <Container>
      <Title>Devam etmek için Spotify'da oturum aç.</Title>
      <AuthItem cursor="not-allowed" bg="3b5998">
        <Icon src={Faceb} />
        Facebook ile devam et
      </AuthItem>
      <AuthItem cursor="not-allowed" bg="000">
        <Icon src={AppleLogo} />
        Apple ile devam et
      </AuthItem>
      <AuthItem bg="fff" color="555" onClick={google}>
        <Icon src={Googe} />
        Google ile devam et
      </AuthItem>

      <HrContainer>
        <Hr />
        <Or>veya</Or>
        <Hr />
      </HrContainer>
    </Container>
  );
}

export default OAuth;
