import React from "react";
import { Container } from "react-bootstrap";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 200px;
  padding: 1px;
  p {
    color: white;
  }

`;
const PolaroidColors = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 100px;
  color: black;
`;

const ColorsContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Footer = () => {
  return (
    <>
      <Container fluid>
        <FooterContainer>
          <p>Pablo Bárcena 2023</p>
          {/* <p className='icons'> <AiFillInstagram /> <AiOutlineTwitter /></p> */}
        </FooterContainer>
        <ColorsContainer>
          <PolaroidColors color={"#329ebb"}></PolaroidColors>
          <PolaroidColors color={"#b1bf52"}></PolaroidColors>
          <PolaroidColors color={"#ebdf41"}></PolaroidColors>
          <PolaroidColors color={"#e48c5c"}></PolaroidColors>
          <PolaroidColors color={"#d53492"}></PolaroidColors>
        </ColorsContainer>
      </Container>
    </>
  );
};

export default Footer;
