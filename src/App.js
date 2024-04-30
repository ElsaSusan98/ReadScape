import "./App.css";
import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import HomePage from "./pages/home";
import { ProductProvider } from "./ProductContext";
import About from "./pages/aboutus";
import SearchPage from "./pages/search";
import Contactus from "./pages/contactus";
import BookDetailsPage from "./pages/bookDetails";

function App() {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/details" element={<BookDetailsPage />} />
            <Route path="/contactus" element={<Contactus />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
