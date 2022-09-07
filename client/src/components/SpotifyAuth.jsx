import React from 'react'
import styled from "styled-components";

function SpotifyAuth() {


  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  `
  const InputContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  
  `
  const Input = styled.input`

    padding: 16px;
    font-size: 1.1rem;
    font-weight: 400;
    border-radius: 4px;

  :focus {
    outline: 3px solid #000;
  }

  `
  const Label = styled.label`
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: .5px;
  `
  const SignContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  
  `
  const Sign = styled.button`
    background: #1ed760;
    padding: 14px 32px;
    border-radius: 42345px;
    font-size: 1rem;
    color: #242526;
    border: none;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;

    :hover {
      
      scale: 1.05;
    }
    :focus {
      outline: 3px solid #000;
    }
  
  `
  const Span = styled.span`
    font-size: 1.1rem;
  
  `
  const SignWrapper = styled.div`

    display: flex;
    justify-content: space-between;


  `

  const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  `
  const CheckBox = styled.input`
    width: 16px;
    height: 16px;
  
  `
  const CheckBoxLabel = styled.label``

  const Hr = styled.hr`
 margin: 12px 0px 36px;
flex: 1 1 0%;
border-top: 1px solid #d9dadc;
`


  return (
    <Container>
      <InputContainer>
        <Label>E-posta adresi veya kullanıcı adı</Label>
        <Input placeholder='E-posta adresi veya kullanıcı adı'/>
      </InputContainer>
      <InputContainer>
        <Label>Parola</Label>
        <Input placeholder='Parola'/>
      </InputContainer>



      <SignContainer>
        <Span>Parolanı mı unuttun?</Span>
        <SignWrapper>
        <CheckBoxContainer>
          <CheckBox id='check' type='checkbox'/>
          <CheckBoxLabel htmlFor='check'>Beni hatırla</CheckBoxLabel>
          
          </CheckBoxContainer>      
          <Sign>Oturum Aç</Sign>

        </SignWrapper>
      </SignContainer>

    <Hr/>

    </Container>
  )
}

export default SpotifyAuth