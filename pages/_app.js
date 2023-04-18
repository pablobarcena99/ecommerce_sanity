import React from "react";
import { Toaster } from "react-hot-toast";
import Layout from "../components/Layout";
import { StateContext } from "../context/StateContext";
import SSRProvider from "react-bootstrap/SSRProvider";
import "../styles/Navbar2.css";
import "../styles/custom.scss";
import "../styles/App.scss";
import { Montserrat, Poppins } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ['100', '200', '300']
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${montserrat.variable} ${poppins.variable}`}>
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
