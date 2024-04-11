import "./App.css";
import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import ProductList from "./pages/home";
import ItemDetails from "./pages/details";

import { ProductProvider } from "./ProductContext";
import Login from "./pages/login";
import Category from "./pages/category";
function App() {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<ProductList />} />
            <Route path="/details" element={<ItemDetails />} />
            <Route path="/Jwellery" element={<Category/>} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
