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
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [name, setName] = useState("");

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

    if (name === "") {
      return;
    }

    const newProduct = {
      id: products.length + 1,
      name: name,
      img: "/placeholder.jpg",
    };

    setName("");

    products.push(newProduct);
    setProduct(newProduct);
  };

  return (
    <>
      <section className={style.home}>
        <h1 className={style.home__h1}>Dashboard</h1>
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
          <form className={style.home__form} onSubmit={handleSubmit}>
            <button
              type="submit"
              className={style.home__addproduct}
              onClick={(e) => {
                setShowAddProduct(!showAddProduct);
              }}
            >
              Add Product
            </button>
            {showAddProduct == true ? (
              <>
                <label className={style.home__label} htmlFor="name">
                  Name
                </label>
                <input
                  className={style.home__input}
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Enter product name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </>
            ) : (
              ""
            )}
          </form>
          {productsList}
        </section>
      </section>
    </>
  );
}

// Exports
export default Home;
