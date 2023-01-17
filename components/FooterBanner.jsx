import Link from "next/link";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { urlFor } from "../lib/client";

const FootBannerContainer = styled.div`
  border: 2px solid white;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 50px;
  margin-top: 30px;
`;

const Info = styled.div`
  h3 {
    font-size: calc(2rem + 2vw);
  }
`;
const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc,
    slug
  },
}) => {
  return (
    <FootBannerContainer>
      <Container>
        <Row>
          <Col lg={6}>
            <Info>
              {discount}
              <h3>
                {largeText1}
                <br />
                {largeText2}
              </h3>
              <p>{saleTime}</p>
            </Info>
          </Col>
          <Col lg={6}>
            <Info>
              <p>{smallText}</p>
              <h3>{midText}</h3>
              <p>{desc}</p>
              <Link href={`/product/${slug.current}`}>
                <Button variant='primary'>{buttonText}</Button>
              </Link>
            </Info>
          </Col>
        </Row>
        {/* <img src={urlFor(image)} alt="" className="footer-banner-image"/> */}
      </Container>
    </FootBannerContainer>
  );
};

export default FooterBanner;
