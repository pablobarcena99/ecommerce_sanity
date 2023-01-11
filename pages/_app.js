import React from "react";
import { Toaster } from "react-hot-toast";
import Layout from "../components/Layout";
import { StateContext } from "../context/StateContext";
import "../styles/globals.css";
import '../styles/Navbar2.css'
import "bootstrap/dist/css/bootstrap.min.css";


function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
