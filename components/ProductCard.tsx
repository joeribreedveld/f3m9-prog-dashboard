// Imports
import style from "../styles/ProductCard.module.scss";
import { useRouter } from "next/router";

// Functions
function ProductCard({ product }: any) {
  const router = useRouter();

  return (
    <>
      <article className={style.productcard}>
        <h2 className={style.productcard__h2}>{product.name}</h2>
        <img
          onClick={() => {
            router.push(`/products/${product.id}`);
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
