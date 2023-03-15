import ProductItem from "./ProductItem";
import App from "../App";
import { Home } from "./Home";
import products from "../products";
function ProductList() {
  return products.map((x) => (
    <ProductItem id={x.id} name={x.name} image={x.image} price={x.price} />
  ));
}

export default ProductList;
