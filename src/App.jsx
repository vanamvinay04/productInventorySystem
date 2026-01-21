import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListProductComponent from "./Components/ListProductComponent";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import AddProductComp from "./Components/AddProductComp";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* http://localhost:3001 */}
          <Route path="/" element={<ListProductComponent />}></Route>
          {/* http://localhost:3001/products */}
          <Route path="/products" element={<ListProductComponent />}></Route>
          {/* http://localhost:3001/products/add-product */}
          <Route path="/add-product" element={<AddProductComp />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
