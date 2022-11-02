// Imports
import products from "../public/products.json";
import ProductCard from "../components/ProductCard";

// Functions
function Home() {
  const productsList = products.map((product: any) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <>
      <h1>Dashboard</h1>
      <div>
        <p>Product List</p>
        <ul>{productsList}</ul>
      </div>
    </>
  );
}

// Exports
export default Home;
