import React, { useState } from "react";
import styles from "./popupBanner.module.css"; // Import your CSS module

const PopupBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; // If not visible, return nothing

  return (
    <div className={styles.popupBanner}>
      <div className={styles.popupContent}>
        <p>
          This website is intended for demonstration purposes only. We advise
          against following any medical advice, remedies, or recipes provided
          here without consulting a qualified healthcare professional.
        </p>
        <button onClick={handleClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupBanner;
