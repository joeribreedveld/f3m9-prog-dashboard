// Imports
import style from "../styles/ProductCard.module.scss";
import products from "../public/products.json";
import { useRouter } from "next/router";

// TypeScript
interface ProductCardProps {
  product: any;
  setShowProduct: any;
  showProduct: any;
  setProduct: any;
}

// Functions
function ProductCard({
  product,
  setShowProduct,
  showProduct,
  setProduct,
}: ProductCardProps) {
  return (
    <>
      <article
        className={style.productcard}
        onClick={() => {
          setShowProduct(!showProduct);
          setProduct(products[product.id - 1]);
        }}
      >
        <h2 className={style.productcard__h2}>{product.name}</h2>
        <img
          className={style.productcard__img}
          src={product.img}
          alt="Product image"
        />
      </article>
    </>
  );
}

// Exports
export default ProductCard;
