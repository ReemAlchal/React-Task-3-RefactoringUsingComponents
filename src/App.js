import React from "react";
// Data
import products from "./products";
// Styling
import "./App.css";
import { Home } from "./components/Home";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="body">
      <Home />
      <div className="list">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
