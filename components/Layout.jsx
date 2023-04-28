import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import styled from "styled-components";
import Navbar2 from "./Navbar2";
import { Container } from "react-bootstrap";

const LayoutBackground = styled.div`
  background-color: #121212;
`;
const Layout = ({ children }) => {
  return (
    <LayoutBackground>
      <Head>
        <title>Ecommerce store</title>
      </Head>
      <header>
        <Navbar2 />
      </header>
      <main>
        <div style={{height: "43px"}}></div>
        {children}
        <footer>
          <Footer />
        </footer>
      </main>
    </LayoutBackground>
  );
};

export default Layout;
