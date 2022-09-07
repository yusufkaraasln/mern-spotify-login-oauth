import React from 'react'
import styled from 'styled-components'


function Register() {
  

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

  `
  const Span = styled.span`
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: .3px;

  `
  const Button = styled.button`
  
    padding: 13px 31px;
    background-color: #fff;
    color: #00000099;
    border: 1px solid #999;
    border-radius: 34352px;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 2px;

  `


  return (
    <Container>

    <Span>Hesabın yok mu?</Span>
    <Button>SPOTIFY İÇİN KAYDOL</Button>


    </Container>
  )
}

export default Register