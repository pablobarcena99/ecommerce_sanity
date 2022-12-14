import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { urlFor } from "../lib/client";

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  p {
    margin: 0px;
    padding: 0px;
  }
`;

const ProductName = styled.p`
  color: black;
  font-weight: 600;
`;

const ProductImage = styled.img`
  background-color: antiquewhite;
  width: 100%;
`;
const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <Link href={`/product/${slug.current}`}>
      <ProductCard>
        <ProductImage src={urlFor(image && image[0])} width={300} alt='' />
        <ProductData>
          <ProductName>{name}</ProductName>
          <p>{price}€</p>
        </ProductData>
      </ProductCard>
    </Link>
  );
};

export default Product;
