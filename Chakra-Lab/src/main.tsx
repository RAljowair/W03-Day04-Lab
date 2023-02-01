import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Nav from "./component/Nav";
import Slider from "./component/Slider";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import Footer from "./component/Footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider>
    <App />
    <Nav />
    <Slider />
    <Footer />
  </ChakraProvider>
);
