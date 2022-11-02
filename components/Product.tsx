// Imports
import style from "../styles/Product.module.scss";

// TypeScript
interface ProductProps {
  setShowProduct: any;
  showProduct: any;
}

// Functions
function Product({ setShowProduct, showProduct }: ProductProps) {
  const toggleShowProduct = () => {
    setShowProduct(!showProduct);
  };

  return (
    <>
      <div className={style.product}>
        <p>Product</p>
        <button onClick={() => setShowProduct(!showProduct)}>Test</button>
      </div>
    </>
  );
}

// Exports
export default Product;
