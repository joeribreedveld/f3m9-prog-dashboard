// Imports
import products from "../public/products.json";
import ProductCard from "../components/ProductCard";
import style from "../styles/Home.module.scss";

// Functions
function Home() {
  const productsList = products.map((product: any) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <>
      <section className={style.home}>
        <h1 className={style.home__h1}>Dashboard</h1>
        <p>Product List</p>
        <section className={style.home__productslist}>{productsList}</section>
      </section>
    </>
  );
}

// Exports
export default Home;
