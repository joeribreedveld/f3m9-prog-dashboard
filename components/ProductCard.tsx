// Imports

// Functions
function ProductCard({ product }: any) {
  return (
    <>
      <li>
        <article>
          <h2>{product.name}</h2>
          <img src={product.img} alt="Product image" />
        </article>
      </li>
    </>
  );
}

// Exports
export default ProductCard;
