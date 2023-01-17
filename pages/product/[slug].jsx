import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";
import { Navbar, Product } from "../../components";
import { useStateContext } from "../../context/StateContext";
import { client, urlFor } from "../../lib/client";

const PurchaseSelection = styled.div`
  h3 {
    margin-bottom: 20px;
  }
  span {
    cursor: pointer;
    border: 1px solid white;
    padding: 10px;
    background-color: black;
  }
  button {
    margin-top: 20px;
    margin-right: 10px;
  }
`;

const QuantityControls = styled.div`
  display: flex;
  user-select: none;
`;
const QuantityButton = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  cursor: pointer;
  border: 1px solid white;
  padding: 10px;
  background-color: white;
  border: 1px solid #121212;
`;
const ProductInfo = styled.div`
  margin: 100px 0;
`;
const MainImages = styled.div`
  display: flex;
  justify-content: center;
  img {
    background-color: aliceblue;
    margin-bottom: 10px;
    max-width: 400px;
  }
`;

const SmallImagesContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const Details = styled.div`
  color: white;
`;

const RelatedProducts = styled.div`
  h2 {
    color: white;
  }
`;
const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <>
      <Container>
        <ProductInfo>
          <Row>
            <Col>
              <MainImages>
                <img src={urlFor(image && image[index])} alt='' />
                {/* <SmallImagesContainer>
                  {image?.map((item, i) => (
                    <img
                      src={urlFor(item)}
                      alt=''
                      className={i === index ? "small-image selected-image" : "small-image"}
                      onMouseEnter={() => setIndex(i)}
                      key={i}
                    />
                  ))}
                </SmallImagesContainer> */}
              </MainImages>
            </Col>
            <Col>
              <Details>
                <h1>{name}</h1>
                <h4>Details:</h4>
                <p>{details}</p>
                <p className='price'>{price}€</p>
                <PurchaseSelection>
                  <h3>Quantity:</h3>
                  <QuantityControls>
                    <QuantityButton onClick={decQty}>
                      {" "}
                      <AiOutlineMinus />
                    </QuantityButton>
                    <QuantityButton>{qty}</QuantityButton>
                    <QuantityButton onClick={incQty}>
                      {" "}
                      <AiOutlinePlus />
                    </QuantityButton>
                  </QuantityControls>
                  <div>
                    <Button type='button' variant='success' onClick={() => onAdd(product, qty)}>
                      Add to Cart
                    </Button>
                    <Button type='button' className='buy-now-button' onClick={handleBuyNow}>
                      Buy now
                    </Button>
                  </div>
                </PurchaseSelection>
              </Details>
            </Col>
          </Row>
        </ProductInfo>
        <RelatedProducts>
          <h2>You may also like</h2>
          <div>
            <Row>
              {products.map((item) => (
                <Col lg={3} md={4}>
                  <Product key={item._id} product={item} />
                </Col>
              ))}
            </Row>
          </div>
        </RelatedProducts>
      </Container>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};
export default ProductDetails;

export { PurchaseSelection, QuantityControls, QuantityButton };
