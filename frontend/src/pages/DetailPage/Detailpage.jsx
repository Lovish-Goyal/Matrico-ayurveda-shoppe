import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Detailpage.module.css";

function Detailpage() {
  const { state } = useLocation();
  const { product } = state;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img
          src={`/images/${product.src}`}
          alt={product.name}
          className={styles.image}
        />
      </div>
      <div className={styles.details}>
        <h1>Product Details:-</h1>
        <h2>
          Product Name:<span>{product.name}</span>
        </h2>
        <h2>
          Description:<span>{product.description}</span>
        </h2>
        <h2>
          Price:<span>{product.price}</span>
        </h2>
        <h2>
          Availability:<span>{product.availability}</span>
        </h2>
        <h2>
          Reviews:
          <span>{product.reviews}</span>
        </h2>
        <div className={styles.buttonContainer}>
          <button
            className={styles.buyButton}
            onClick={() => window.open(product.link, "_blank")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detailpage;
