import React from "react";
import { Toaster } from "react-hot-toast";
import Layout from "../components/Layout";
import { StateContext } from "../context/StateContext";
import SSRProvider from "react-bootstrap/SSRProvider";
import "../styles/Navbar2.css";
import "../styles/custom.scss";
import "../styles/App.scss";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${montserrat.variable}`}>
      <SSRProvider>
        <StateContext>
          <Layout>
            <Toaster />
            <Component {...pageProps} />
          </Layout>
        </StateContext>
      </SSRProvider>
    </div>
  );
}

export default MyApp;
