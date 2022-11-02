// Imports
import style from "../styles/ProductCard.module.scss";
import { useRouter } from "next/router";

// TypeScript
interface ProductCardProps {
  product: any;
  setShowProduct: any;
  showProduct: any;
}

// Functions
function ProductCard({
  product,
  setShowProduct,
  showProduct,
}: ProductCardProps) {
  return (
    <>
      <article className={style.productcard}>
        <h2 className={style.productcard__h2}>{product.name}</h2>
        <img
          onClick={() => {
            setShowProduct(!showProduct);
          }}
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
