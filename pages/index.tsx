// Imports
import products from "../public/products.json";
import ProductCard from "../components/ProductCard";
import style from "../styles/Home.module.scss";
import Product from "../components/Product";
import { useState } from "react";

// Functions
function Home() {
  const [showProduct, setShowProduct] = useState(false);

  const productsList = products.map((product: any) => (
    <ProductCard
      setShowProduct={setShowProduct}
      showProduct={showProduct}
      key={product.id}
      product={product}
    />
  ));

  return (
    <>
      <section className={style.home}>
        <h1 className={style.home__h1}>Dashboard</h1>
        <p>Product List</p>
        {showProduct == true ? (
          <Product setShowProduct={setShowProduct} showProduct={showProduct} />
        ) : (
          ""
        )}
        <section className={style.home__productslist}>{productsList}</section>
      </section>
    </>
  );
}

// Exports
export default Home;
