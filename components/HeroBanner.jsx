import Link from "next/link";
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import { urlFor } from "../lib/client";

const BannerWrapper = styled.div`
  /* background-color: #82eee9; */
padding: 20px 0;
`;
const BannerImg = styled.img`
  width: 100%;
`;
const BannerInfo = styled.div`
  * {
    margin: 0px;
  }
  p {
    font-size: calc(1rem + 1vw);
    color: white;
  }
  h3 {
    color: white;

    font-size: calc(1.9rem + 1vw);
    span {
      border-bottom: solid 5px #a390ff;
    }
  }
  h1 {
    color: white;

    font-size: calc(1.9rem + 2vw);
    font-weight: 500;
  }
  button {
    margin-top: 20px;
  }
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const BannerDesc = styled.div`
  * {
    margin: 0px;
    color: white;
  }
`;
const HeroBanner = ({
  heroBanner: { smallText, midText, largeText1, image, product, buttonText, desc },
}) => {
  return (
    <BannerWrapper>
        <Row>
          <Col lg={8} md={6} sm={12}>
            <BannerInfo>
              <p>{smallText}</p>
              <h3><span>{midText}</span></h3>
              <h1>{largeText1}</h1>
              <Link href={`/product/${product}`}>
                <Button variant="primary">{buttonText}</Button>
              </Link>
            </BannerInfo>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <BannerImg src={urlFor(image)} alt='watch' />
          </Col>
        </Row>
        <Row>
          <BannerDesc>
            <h5>Description:</h5>
            <p>{desc}</p>
          </BannerDesc>
        </Row>
    </BannerWrapper>
  );
};

export default HeroBanner;
