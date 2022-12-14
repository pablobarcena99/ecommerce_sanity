import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div>
        <h2>Best Selling Products</h2>
      </div>
      <div>
        <Row gap={5}>
          {products?.map((product) => (
            <Col lg={3} md={6} sm={12}>
              <Product key={product._id} product={product} />
            </Col>
          ))}
        </Row>
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
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
