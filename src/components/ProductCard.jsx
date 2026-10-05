import styles from "./styles/ProductCard.module.css";
import Button from "./Button";

function ProductCard({ product, onSelect }) {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>{product.icon}</div>

      <div className={styles.content}>
        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className={styles.bottom}>
          <strong>₹{product.price}</strong>

          <Button onClick={() => onSelect(product)}>
            View Product
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;