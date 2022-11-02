// Imports
import products from "../public/products.json";
import ProductCard from "../components/ProductCard";
import style from "../styles/Home.module.scss";
import Product from "../components/Product";
import { useState } from "react";

// Functions
function Home() {
  const [product, setProduct] = useState(products[0]);
  const [showProduct, setShowProduct] = useState(false);

  const productsList = products.map((product: any) => (
    <ProductCard
      setShowProduct={setShowProduct}
      showProduct={showProduct}
      key={product.id}
      product={product}
      setProduct={setProduct}
    />
  ));

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);

    const newProduct = {
      id: products.length + 1,
      name: e.target.name.value,
      img: "/img.jpg",
    };
    console.log(newProduct);

    products.push(newProduct);
    setProduct(newProduct);
  };

  return (
    <>
      <section className={style.home}>
        <h1 className={style.home__h1}>Dashboard</h1>
        <p>Product List</p>
        {showProduct == true ? (
          <Product
            product={product}
            setShowProduct={setShowProduct}
            showProduct={showProduct}
          />
        ) : (
          ""
        )}
        <section className={style.home__productslist}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="name" />
            <button type="submit">Submit</button>
          </form>
          {productsList}
        </section>
      </section>
    </>
  );
}

// Exports
export default Home;
