import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { data } from "../dummyData";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: calc(100vh - 60px);
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #242526;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  flex-wrap: wrap;
  gap: 6rem;
`;

const Photo = styled.img`
  width: 500px;
  height: 300px;
  border-radius: 2rem;
  object-fit: cover;
  cursor: pointer;
  
`;
const PhotoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Span = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  position: absolute;
  z-index: 12314124;
  height: 105%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  :hover {
    opacity: 1;
    border-radius: 2rem;
  }
`;

function Home({user}) {
  return (
    <>
      <Navbar user={user} />
      <Container>
        <Wrapper>
          {data.map((item) => (
            <Link to={`/post/${item.id}`}>
              <PhotoWrapper key={item.id}>
                <Photo src={item.image} />
                <Span>{item.title}</Span>
              </PhotoWrapper>
            </Link>
          ))}
        </Wrapper>
      </Container>
    </>
  );
}

export default Home;
