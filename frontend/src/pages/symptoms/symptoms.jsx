import { useState } from "react";
import symptoms from "../../data/diseases.js";
import styles from "./SymptomsPage.module.css";

const SymptomPage = () => {
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  const handleSymptomClick = (symptom) => {
    setSelectedSymptom(symptom);
  };

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.heading}>SELECT A SYMPTOM</h2>
      <ul className={styles.symptomListRow}>
        {symptoms.map((symptom) => (
          <li key={symptom.name} className={styles.symptomList}>
            <button
              className={`${styles.symptomButton} ${
                selectedSymptom?.name === symptom.name ? styles.active : ""
              }`}
              onClick={() => handleSymptomClick(symptom)}
            >
              {symptom.name}
            </button>
          </li>
        ))}
      </ul>

      <hr />

      {selectedSymptom && (
        <>
          <div className={styles.detailsSection}>
            {/* 🆕 Flex container: Image left, Product details right */}
            <div className={styles.flexContainer}>
              {selectedSymptom.image && (
                <div className={styles.imageContainer}>
                  <img
                    src={`/images/${selectedSymptom.image}`}
                    alt={`${selectedSymptom.name} Medicine`}
                    className={styles.medicineImage}
                  />
                </div>
              )}

              <div className={styles.productDetailsBox}>
                <h3 className={styles.subHeading}>
                  Ayurvedic Medicine: {selectedSymptom.medicine}
                </h3>

                {/* Price, Form, and Weight */}
                {selectedSymptom?.ayurvedic_medicine && (
                  <>
                    <p className={styles.inStock}>In stock</p>
                    {selectedSymptom.ayurvedic_medicine.price && (
                      <p className={styles.weightPrice}>
                        {selectedSymptom.ayurvedic_medicine.net_weight}{" "}
                        &nbsp;|&nbsp; {selectedSymptom.ayurvedic_medicine.price}
                      </p>
                    )}
                    {selectedSymptom.ayurvedic_medicine.form && (
                      <p className={styles.form}>
                        Form: {selectedSymptom.ayurvedic_medicine.form}
                      </p>
                    )}
                  </>
                )}

                {/* Product Description */}
                <p className={styles.productDescription}>
                  {selectedSymptom.description ||
                    "No description available for this product."}
                </p>

                {/* Key Benefits */}
                <div className={styles.keySection}>
                  <h4 className={styles.smallHeading}>🌟 Key Benefits</h4>
                  <ul>
                    {selectedSymptom.ayurvedic_medicine?.benefits?.length >
                    0 ? (
                      selectedSymptom.ayurvedic_medicine.benefits.map(
                        (benefit, index) => <li key={index}>{benefit}</li>
                      )
                    ) : (
                      <p>Benefits are not available.</p>
                    )}
                  </ul>
                </div>

                {/* Ingredients */}
                {selectedSymptom.ayurvedic_medicine?.ingredients?.length >
                  0 && (
                  <div className={styles.keySection}>
                    <h4 className={styles.smallHeading}>🪴 Key Ingredients</h4>
                    <p>
                      {selectedSymptom.ayurvedic_medicine.ingredients.join(
                        ", "
                      )}
                    </p>
                  </div>
                )}

                {/* Safety Information */}
                {selectedSymptom.ayurvedic_medicine?.safety_information && (
                  <div className={styles.keySection}>
                    <h4 className={styles.smallHeading}>
                      ⚠️ Safety Information
                    </h4>
                    <ul>
                      {selectedSymptom.ayurvedic_medicine.safety_information?.precautions?.map(
                        (precaution, index) => (
                          <li key={index}>{precaution}</li>
                        )
                      )}
                    </ul>
                    {selectedSymptom.ayurvedic_medicine.safety_information
                      ?.side_effects && (
                      <p>
                        Side effects:{" "}
                        {
                          selectedSymptom.ayurvedic_medicine.safety_information
                            .side_effects
                        }
                      </p>
                    )}
                  </div>
                )}

                {/* Purchase Links */}
                <div className={styles.actions}>
                  <button
                    className={styles.buyButton}
                    onClick={() => window.open(selectedSymptom.link, "_blank")}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr style={{ margin: "20px 0" }} />

          <div className={styles.vidhiSection}>
            <h3 className={styles.subHeading}>
              आयुर्वेदिक उपचार (Ayurvedic Treatment)
            </h3>

            {/* Ayurvedic Herbs */}
            {selectedSymptom?.Herbs?.length > 0 && (
              <div className={styles.subSection}>
                <h4 className={styles.smallHeading}>
                  🌿 उपयोगी जड़ी-बूटियाँ (Ayurvedic Herbs)
                </h4>
                <p className={styles.herbsLine}>
                  {selectedSymptom.Herbs.join(", ")}
                </p>
              </div>
            )}

            {/* Vidhi (Preparation Steps) */}
            {selectedSymptom?.vidhi?.length > 0 && (
              <div className={styles.subSection}>
                <h4 className={styles.smallHeading}>
                  🛠️ बनाने की विधि (Preparation Steps)
                </h4>
                <ol className={styles.vidhiList}>
                  {selectedSymptom.vidhi.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            )}

            {/* Usage Instructions */}
            {selectedSymptom?.usage?.length > 0 && (
              <div className={styles.subSection}>
                <h4 className={styles.smallHeading}>
                  ✅ उपयोग कैसे करें (How to Use)
                </h4>
                <ul>
                  {selectedSymptom.usage.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Duration */}
            {selectedSymptom?.duration?.length > 0 && (
              <div className={styles.subSection}>
                <h4 className={styles.smallHeading}>⏳ अवधि (Duration)</h4>
                <ul>
                  {selectedSymptom.duration.map((dur, index) => (
                    <li key={index}>{dur}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Ayurvedic Upchar */}
            {selectedSymptom?.ayurvedic_upchar?.length > 0 && (
              <div className={styles.subSection}>
                <h4 className={styles.smallHeading}>
                  🌿 आयुर्वेदिक उपचार (Ayurvedic Treatment)
                </h4>
                <ul>
                  {selectedSymptom.ayurvedic_upchar.map((treatment, index) => (
                    <li key={index}>{treatment}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* YouTube Video */}
            {/* {selectedSymptom?.youtubeVideo && (
              <div className={styles.subSection}>
                <h4 className={styles.smallHeading}>🎥 YouTube Video</h4>
                <iframe
                  width="560"
                  height="315"
                  src={selectedSymptom.youtubeVideo}
                  title="Ayurvedic Treatment Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )} */}
          </div>
        </>
      )}
    </div>
  );
};

export default SymptomPage;
