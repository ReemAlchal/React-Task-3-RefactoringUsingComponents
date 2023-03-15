import products from "../products";
function ProductItem({ id, name, image, price }) {
  //   const productList = products.map((product) => (
  return (
    <div className="product">
      <h4 className="text">{id}</h4>
      <img className="productImage" src={image} />
      <p className="text">{name}</p>
      <p className="text">{price} KD</p>
    </div>
  );
  //   ));
  //   return <div className="list">{productList}</div>;
}

export default ProductItem;
