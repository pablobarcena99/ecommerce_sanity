import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

const SectionTitle = styled.h2`
  color: white;
  font-size: calc(1.3rem + 1vw);
  margin-top: 30px;
`;
const Home = ({ products, bannerData }) => {
  return (
    <>
      <Container>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
        <SectionTitle>Best Selling Products</SectionTitle>
        <Row>
          {products?.map((product) => (
            <Col lg={3} md={6} sm={12}>
              <Product key={product._id} product={product} />
            </Col>
          ))}
        </Row>
        <FooterBanner footerBanner={bannerData && bannerData[0]} />
      </Container>
    </>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
export default Home;
