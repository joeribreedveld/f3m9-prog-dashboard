// Imports
import products from "../../public/products.json";

// Functions
function ProductPage({ product }: any) {
  return (
    <>
      <p>Product Page</p>
      {product.name}
    </>
  );
}

// Exports
export default ProductPage;

// getServerSideProps
export async function getServerSideProps(context: any) {
  const product = products[context.params.id - 1];
  const contextid = context.params.id;

  return {
    props: {
      product,
    },
  };
}
