// Imports
import style from "../styles/Product.module.scss";
import products from "../public/products.json";

// TypeScript
interface ProductProps {
  setShowProduct: any;
  showProduct: any;
  product: any;
}

// Functions
function Product({ setShowProduct, showProduct, product }: ProductProps) {
  return (
    <>
      <div className={style.product}>
        <p>{product.name}</p>
        <button onClick={() => setShowProduct(!showProduct)}>Test</button>
      </div>
    </>
  );
}

// Exports
export default Product;
