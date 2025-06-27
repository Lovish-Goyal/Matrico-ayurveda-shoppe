import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AyurStore.module.css";

const images = [
  {
    name: "Herbal & Ayurveda Diabic Care Juice 1000 ml",
    src: "Herbal_&_Ayurveda_Diabic_Care_Juice_1000_ml.jpg",
    link: "https://www.amazon.in/Krishnas-Diabic-Care-Juice-Guduchi/dp/B07B6NKPFT",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Pankajakasthuri Breathe Easy Granules 400 gm",
    src: "Pankajakasthuri_Breathe_Easy_Granules_400_gm.png",
    link: "https://www.amazon.in/Pankajakasthuri-Breathe-Granules-Weezing-Net-400g/dp/B00ZWC970K",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Pankajakasthuri Breathe Easy Syrup 200 ml",
    src: "Pankajakasthuri_Breathe_Easy_Syrup_200_ml.jpg",
    link: "https://www.amazon.in/Pankajakasthuri-Breathe-Eazy-Syrup-Pack/dp/B01DBZL4GY",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Lama Ayush kwath Tablet 60's",
    src: "Lama_Ayush_kwath_Tablet_60's.jpg",
    link: "https://www.amazon.in/Lama-Ayush-Kwath-60-Tablet/dp/B08BTR3QN2",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Lama Draksharist Tonic 450 ml",
    src: "Lama_Draksharist_Tonic_450_ml.jpg",
    link: "https://www.amazon.in/Lama-Draksharist-450-Digestive-Indigestion/dp/B08425CX8K",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Kairali Chyawanaprasam Lehya 500 gm",
    src: "Kairali_Chyawanaprasam_Lehya_500_gm.jpg",
    link: "https://www.amazon.in/Kairali-Kai_CY_500-Chyavanaprasam-500-gm/dp/B0CR45TJHD",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Dabur Honitus Herbal Cough Remedy Sugar Free Syrup 100 ml",
    src: "Dabur_Honitus_Herbal_Cough_Remedy_Sugar_Free_Syrup_100_ml.jpg",
    link: "https://www.amazon.in/Honitus-Sugar-Ayurvedic-Throat-Relief/dp/B0CX98JBB3",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Lama Cough Syrup 100 ml",
    src: "Lama_Cough_Syrup_100_ml.jpg",
    link: "https://www.amazon.in/Lama-Dashmularist-450-Recuperate-Delivery/dp/B08422QMVV",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Divya Swasari Pravahi",
    src: "Divya_Swasari_Pravahi.png",
    link: "https://www.amazon.in/Patanjali-Swasari-Pravahi-250-g/dp/B00SFI7SRM",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Divya Chandraprabha Vati",
    src: "Divya_Chandraprabha_Vati.jpg",
    link: "https://www.amazon.in/Patanjali-Divya-Chandraprabha-Vati-Tablet/dp/B0CKBSDWPF",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Divya Jwarnashak kwath",
    src: "Divya_Jwarnashak_kwath.png",
    link: "https://www.amazon.in/Patanjali-Divya-Jwarnashak-Kwath-Pack/dp/B07YFNPM5H",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Divya Dhara",
    src: "Divya_Dhara.png",
    link: "https://www.amazon.in/Patanjali-Ayurved-Divya-Dhara-Piece/dp/B01G70NCII",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Shuddhi churna",
    src: "Shuddhi_churna.jpg",
    link: "https://www.amazon.in/Patanjali-Divya-Suddhi-Churna-Pack/dp/B07DSC4RNR",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Divya Khadirarishta",
    src: "Divya_Khadirarishta.png",
    link: "https://www.amazon.in/DIVYA-KHADIRARISHTH-450ML-PACK-2/dp/B08WJ1822R",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Divya churna",
    src: "Divya_churna.png",
    link: "https://www.amazon.in/-/hi/%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%B6%E0%A5%81%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A4%BF-%E0%A4%9A%E0%A5%81%E0%A4%B0%E0%A4%A8%E0%A4%BE-100gm-%E0%A4%85%E0%A4%AE%E0%A5%8D%E0%A4%B2%E0%A4%A4%E0%A4%BE/dp/B07HL9B2FC",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Peedantak Vati",
    src: "Peedantak_Vati.png",
    link: "https://www.amazon.in/Patanjali-Divya-Peedantak-Vati-Tab/dp/B081D1GCPK",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Ashwagansharist",
    src: "Ashwagansharist.png",
    link: "https://www.amazon.in/Baidyanath-101453916-Ashwagandharishta-680-Ml/dp/B0B4FZ5LP9",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Divya Medha Vati",
    src: "Divya_Medha_Vati.jpg",
    link: "https://www.amazon.in/Patanjali-Divya-Medha-Extra-Power/dp/B0BQ77BVKN",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "immunogrit",
    src: "immunogrit.png",
    link: "https://www.amazon.in/Patanjali-Immunogrit-60Tab-JV-Pack/dp/B0CWD3CZCX",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "drishti",
    src: "drishti.jpg",
    link: "https://www.amazon.in/PATANJALI-Drishti-Eye-Drop-15ml/dp/B0B6JC9DJP",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "mukti vati",
    src: "mukti_vati.jpg",
    link: "https://www.amazon.in/Divya-Mukta-Vati-Extra-Power/dp/B0786ZQ1PG",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Hridyamrit vati",
    src: "Hridyamrit_vati.png",
    link: "https://www.amazon.in/Divya-Hridyamrit-Vati-Extra-Power/dp/B0D9YSC28Y",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "divya ashmarihar ras",
    src: "divya_ashmarihar_ras.png",
    link: "https://www.amazon.in/DIVYA-PHARMACY-ASHMARIHAR-RAS-100/dp/B08ZSQZB25",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "livogrit vital",
    src: "livogrit_vital.jpg",
    link: "https://www.amazon.in/Patanjali-Divya-Livogrit-Vital-Pack/dp/B0CV4G4CYS",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Gokshuradhi guggul",
    src: "Gokshuradhi_guggul.png",
    link: "https://www.amazon.com/Patanjali-Baba-Ramdev-Gokshuradi-Guggulu/dp/8513652369",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "Ashokarishth",
    src: "Ashokarishth.png",
    link: "https://www.amazon.in/-/hi/Patanjali-Ashokarishta-%E0%A4%AE%E0%A4%B9%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%93%E0%A4%82-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%A4%E0%A4%B0%E0%A4%B2/dp/B07J4BYSJ9",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "shatavr churna",
    src: "shatavr_churna.png",
    link: "https://www.amazon.in/Patanjali-Shatavar-Churna-100gms/dp/B077QFTG7J",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "kesh kanti",
    src: "kesh_kanti.png",
    link: "https://www.amazon.in/Patanjali-Kesh-Kanti-Oil-120/dp/B00O9SZGO4",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "saundarya",
    src: "saundarya.png",
    link: "https://www.amazon.in/Patanjali-Saundarya-Fair-Skin-Cream/dp/B0753PGHJN",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "nutrela weight gain",
    src: "nutrela_weight_gain.jpg",
    link: "https://www.amazon.in/Nutrela-Weight-Gain-Banana-Flavour/dp/B0B4RXF1Z6",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "weight go tablet",
    src: "weight_go_tablet.png",
    link: "https://www.amazon.in/DIVYA-WEIGHT-TAB-LOOSE-EXTRA/dp/B0CBK7SZFD",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "thyrogrit",
    src: "thyrogrit.jpg",
    link: "https://www.amazon.in/Patanjalis-Divya-Thyrogrit-60-Tablets/dp/B08RXH373X",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "anartava syrup",
    src: "anartava_syrup.jpg",
    link: "https://www.amazon.in/Namyaa-Anartava-Delayed-Irregular-millilitre/dp/B08NT8FKBR?th=1",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
  {
    name: "chandraprabha vati",
    src: "chandraprabha_vati.png",
    link: "https://www.amazon.in/Divya-Chandraprabha-Vati-120-Tablets/dp/B07864XY89",
    description:
      "Herbal & Ayurveda Diabetic Care Juice 1000 ml is a natural, plant-based supplement designed to help manage blood sugar levels and promote overall wellness.",
    price: "7841/-",
    availability: "In Stock",
    reviews: "8 reviews",
  },
];

function AyurStore() {
  const navigate = useNavigate();

  const handleMoreDetails = (product) => {
    navigate("/detailpage", { state: { product } });
  };

  const [searchQuery, setSearchQuery] = useState("");

  const filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className={styles.container}>
        {/* Heading and Search Bar in one row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0 20px",
            marginTop: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              color: "darkgreen",
              marginRight: "20px",
            }}
          >
            Ayur Store
          </h1>
          <input
            style={{
              padding: "8px",
              border: "2px solid green",
              marginTop: "5px",
              width: "85%",
            }}
            type="text"
            placeholder="Search your medicines ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className={styles.textContent}></div>

        <div className={styles.Boxes}>
          {filteredImages.map((image, index) => (
            <div key={index} className={styles.box}>
              <img
                src={`/images/${image.src}`}
                alt={image.name}
                className={styles.boxImage}
              />
              <div className={styles.imageDetails}>
                <p>{image.name}</p>
                <div className={styles.rowbutton}>
                  <button
                    className={styles.detailsbutton}
                    onClick={() => handleMoreDetails(image)}
                  >
                    More Details
                  </button>
                  <button
                    className={styles.buybutton}
                    onClick={() => window.open(image.link, "_blank")}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AyurStore;
