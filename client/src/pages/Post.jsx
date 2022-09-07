import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { data } from "../dummyData";
import { useLocation } from "react-router-dom";
const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
    justify-content: center;
    align-items: center;
    background-color: #242526;
`;

const Left = styled.div`

display: flex;
    align-items: center;
    justify-content: center;

flex: 3;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
    align-items: center;
    justify-content: center;

`;

function Post() {
  const path = useLocation().pathname.split("/")[2];

  const post = data.find((post) => post.id == path);

  return (
    <>
      <Navbar />

      <Container>
        <Left>
          <img 
            style={{

                width: "70%",
                height: "35%",
                borderRadius: "3rem",
                objectFit: "cover",

            }}
          src={post?.image} alt="" />
        </Left>

        <Right>
          <h1 style={{
            color: "#fff",
          }}>{post?.title}</h1>
        </Right>
      </Container>
    </>
  );
}

export default Post;
