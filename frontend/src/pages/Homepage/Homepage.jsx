import React, { useState } from "react";
import styles from "./Homepage.module.css";
import { useNavigate } from "react-router-dom";

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

const diseases = [
  {
    name: "Cough & Cold",
    Herbs: ["Honey", "Tulsi", "Ginger"],
    medicine: "Divya Swasari Pravahi",
    image: "Divya_Swasari_Pravahi.jpg",
    link: "https://www.amazon.in/Patanjali-Swasari-Pravahi-250-g/dp/B00SFI7SRM",
  },
  {
    name: "Diabetes",
    Herbs: ["Jamun", "Bitter Gourd", "Fenugreek"],
    medicine: "Divya Chandraprabha Vati",
    image: "Divya_Chandraprabha_Vati.jpg",
    link: "https://www.amazon.in/Patanjali-Divya-Chandraprabha-Vati-Tablet/dp/B0CKBSDWPF",
  },
  {
    name: "Fever",
    Herbs: ["Tulsi", "Neem", "Giloy"],
    medicine: "Divya Jwarnashak kwath",
    image: "Divya_Jwarnashak_kwath.png",
    link: "https://www.amazon.in/Patanjali-Divya-Jwarnashak-Kwath-Pack/dp/B07YFNPM5H",
  },
  {
    name: "Headache",
    Herbs: ["Ashwagandha", "Brahmi", "Gotu Kola"],
    medicine: "Divya Dhara",
    image: "Divya_Dhara.png",
    link: "https://www.amazon.in/Patanjali-Ayurved-Divya-Dhara-Piece/dp/B01G70NCII",
  },
  {
    name: "Indigestion",
    Herbs: ["Triphala", "Ginger", "Cumin"],
    medicine: "Shuddhi churna",
    image: "Shuddhi_churna.jpg",
    link: "https://www.amazon.in/Patanjali-Divya-Suddhi-Churna-Pack/dp/B07DSC4RNR",
  },
  {
    name: "Constipation",
    Herbs: ["Triphala", "Isabgol, Aloe Vera"],
    medicine: "Divya Khadirarishta",
    image: "Divya_Khadirarishta.png",
    link: "https://www.amazon.in/DIVYA-KHADIRARISHTH-450ML-PACK-2/dp/B08WJ1822R",
  },
  {
    name: "Skin Diseases (Eczema, Psoriasis)",
    Herbs: ["Neem", "Tulsi, Turmeric"],
    medicine: "Divya churna",
    image: "Divya_churna.png",
    link: "https://www.amazon.in/-/hi/%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%B6%E0%A5%81%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A4%BF-%E0%A4%9A%E0%A5%81%E0%A4%B0%E0%A4%A8%E0%A4%BE-100gm-%E0%A4%85%E0%A4%AE%E0%A5%8D%E0%A4%B2%E0%A4%A4%E0%A4%BE/dp/B07HL9B2FC",
  },
  {
    name: "Joint Pain",
    Herbs: ["Ashwagandha", "Turmeric, Ginger"],
    medicine: "Peedantak Vati",
    image: "Peedantak_Vati.png",
    link: "https://www.amazon.in/Patanjali-Divya-Peedantak-Vati-Tab/dp/B081D1GCPK",
  },
  {
    name: "Anxiety and Stress",
    Herbs: ["Ashwagandha", "Brahmi, Valerian Root"],
    medicine: "Ashwagansharist",
    image: "Ashwagansharist.png",
    link: "https://www.amazon.in/Baidyanath-101453916-Ashwagandharishta-680-Ml/dp/B0B4FZ5LP9",
  },
  {
    name: "Insomnia",
    Herbs: ["Ashwagandha", "Brahmi, Valerian Root"],
    medicine: "Divya Medha Vati",
    image: "Divya_Medha_Vati.jpg",
    link: "https://www.amazon.in/Patanjali-Divya-Medha-Extra-Power/dp/B0BQ77BVKN",
  },
  {
    name: "Low Immunity",
    Herbs: ["Amla", "Tulsi, Ashwagandha"],
    medicine: "immunogrit",
    image: "immunogrit.png",
    link: "https://www.amazon.in/Patanjali-Immunogrit-60Tab-JV-Pack/dp/B0CWD3CZCX",
  },
  {
    name: "Eye Problems",
    Herbs: ["Triphala", "Amla, Bilberry"],
    medicine: "drishti",
    image: "drishti.jpg",
    link: "https://www.amazon.in/PATANJALI-Drishti-Eye-Drop-15ml/dp/B0B6JC9DJP",
  },
  {
    name: "High Blood Pressure",
    Herbs: ["Arjuna, Garlic, Coriander"],
    medicine: "mukti vati",
    image: "mukti_vati.jpg",
    link: "https://www.amazon.in/Divya-Mukta-Vati-Extra-Power/dp/B0786ZQ1PG",
  },
  {
    name: "Heart Disease",
    Herbs: ["Arjuna, Garlic, Guggulu"],
    medicine: "Hridyamrit vati",
    image: "Hridyamrit_vati.png",
    link: "https://www.amazon.in/Divya-Hridyamrit-Vati-Extra-Power/dp/B0D9YSC28Y",
  },
  {
    name: "Kidney Stones",
    Herbs: ["Varuna, Punarnava, Shilajit"],
    medicine: "divya ashmarihar ras",
    image: "divya_ashmarihar_ras.png",
    link: "https://www.amazon.in/DIVYA-PHARMACY-ASHMARIHAR-RAS-100/dp/B08ZSQZB25",
  },
  {
    name: "Liver Diseases",
    Herbs: ["Bhringraj, Kalmegh, Shatavari"],
    medicine: "livogrit vital",
    image: "livogrit_vital.jpg",
    link: "https://www.amazon.in/Patanjali-Divya-Livogrit-Vital-Pack/dp/B0CV4G4CYS",
  },
  {
    name: "Urinary Tract Infections (UTIs)",
    Herbs: ["Gokshura, Varuna, Chandraprabha Vati"],
    medicine: "Gokshuradhi guggul",
    image: "Gokshuradhi_guggul.png",
    link: "https://www.amazon.com/Patanjali-Baba-Ramdev-Gokshuradi-Guggulu/dp/8513652369",
  },
  {
    name: "Menstrual Disorders",
    Herbs: ["Ashoka, Shatavari, Dashmula"],
    medicine: "Ashokarishth",
    image: "Ashokarishth.png",
    link: "https://www.amazon.in/-/hi/Patanjali-Ashokarishta-%E0%A4%AE%E0%A4%B9%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%93%E0%A4%82-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%A4%E0%A4%B0%E0%A4%B2/dp/B07J4BYSJ9",
  },
  {
    name: "Menopause Symptoms",
    Herbs: ["Shatavari, Ashoka, Ashwagandha"],
    medicine: "shatavr churna",
    image: "shatavr_churna.png",
    link: "https://www.amazon.in/Patanjali-Shatavar-Churna-100gms/dp/B077QFTG7J",
  },
  {
    name: "Hair Loss",
    Herbs: ["Bhringraj, Amla, Brahmi"],
    medicine: "kesh kanti",
    image: "kesh_kanti.png",
    link: "https://www.amazon.in/Patanjali-Kesh-Kanti-Oil-120/dp/B00O9SZGO4",
  },
  {
    name: "Premature Aging",
    Herbs: ["Amla, Ashwagandha, Chyawanprash"],
    medicine: "saundarya",
    image: "saundarya.png",
    link: "https://www.amazon.in/Patanjali-Saundarya-Fair-Skin-Cream/dp/B0753PGHJN",
  },
  {
    name: "Weight Gain",
    Herbs: ["Triphala, Guggulu, Garcinia Cambogia"],
    medicine: "nutrela weight gain",
    image: "nutrela_weight_gain.jpg",
    link: "https://www.amazon.in/Nutrela-Weight-Gain-Banana-Flavour/dp/B0B4RXF1Z6",
  },
  {
    name: "Weight Loss",
    Herbs: ["Triphala, Guggulu, Garcinia Cambogia"],
    medicine: "weight go tablet",
    image: "weight_go_tablet.png",
    link: "https://www.amazon.in/DIVYA-WEIGHT-TAB-LOOSE-EXTRA/dp/B0CBK7SZFD",
  },
  {
    name: "Thyroid Disorders",
    Herbs: ["Brahmi, Ashwagandha, Guggulu"],
    medicine: "thyrogrit",
    image: "thyrogrit.jpg",
    link: "https://www.amazon.in/Patanjalis-Divya-Thyrogrit-60-Tablets/dp/B08RXH373X",
  },
  {
    name: "PCOD/PCOS",
    Herbs: ["Shatavari, Ashoka, Chandraprabha Vati"],
    medicine: "anartava syrup",
    image: "anartava_syrup.jpg",
    link: "https://www.amazon.in/Namyaa-Anartava-Delayed-Irregular-millilitre/dp/B08NT8FKBR?th=1",
  },
  {
    name: "Infertility",
    Herbs: ["Ashwagandha, Shatavari, Shilajit"],
    medicine: "chandraprabha vati",
    image: "chandraprabha_vati.png",
    link: "https://www.amazon.in/Divya-Chandraprabha-Vati-120-Tablets/dp/B07864XY89",
  },
];

function Homepage() {
  const [selectedDisease, setSelectedDisease] = useState(null);

  const handleDiseaseClick = (disease) => {
    setSelectedDisease(disease === selectedDisease ? null : disease);
  };

  const navigate = useNavigate();

  const handleMoreDetails = (product) => {
    navigate("/detailpage", { state: { product } });
  };

  const handleGoToSymptoms = () => {
    navigate("/symptoms"); // the path to your symptom page
  };

  return (
    <>
      <div className={styles.textContent}>
        <h1
          style={{
            fontSize: "40px",
            marginTop: "35px",
            color: "gray",
          }}
        >
          Welcome to Our Ayurvedic Medicine Collection
        </h1>

        <p
          style={{
            fontSize: "25px",
            marginTop: "5px",
            color: "black",
            fontWeight: "rgb(181, 181, 181)",
            marginBottom: "20px",
          }}
        >
          Explore our range of natural and organic Ayurvedic medicines designed
          to promote wellness and balance.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            marginLeft: "100px",
          }}
        >
          <div
            style={{
              width: "70%",
            }}
          >
            <h1
              style={{
                fontSize: "40px",
                marginTop: "10px",
                color: "darkgreen",
              }}
            >
              Check Your Symptoms
            </h1>
            <p
              style={{
                fontSize: "25px",
                marginTop: "10px",
                color: "gray",
                marginBottom: "15px",
              }}
            >
              Receive a list of potential diagnoses based on your symptoms.
              Powered by cutting-edge artificial intelligence technology.
              Quickly assess your health condition with advanced AI algorithms.
              Get personalized insights to help you make informed decisions.
            </p>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "18px",
                backgroundColor: "darkgreen",
                border: "none",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px",
              }}
              onClick={handleGoToSymptoms}
            >
              CLICK HERE TO CHECK NOW
            </button>
          </div>

          {/* Right Side: Image */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "auto", // Ensures the container height adjusts automatically
            }}
          >
            <img
              src="/images/hr.png"
              alt="Ayurvedic Medicine"
              style={{
                height: "500px", // Match the image's height to the container's height
                width: "auto", // Keeps the image's aspect ratio intact
              }}
            />
          </div>
        </div>
      </div>
      {/* <div>
          <ul className={styles.diseaseListRow}>
            {diseases.map((disease) => (
              <li className={styles.diseaseList}>
                <button
                  key={disease.name}
                  style={{
                    backgroundColor:
                      selectedDisease === disease ? "green" : "white",
                    color: selectedDisease === disease ? "white" : "black",
                    padding: "3px",
                  }}
                  onClick={() => handleDiseaseClick(disease)}
                >
                  {disease.name}
                </button>
              </li>
            ))}
          </ul>

          {selectedDisease && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "25px",
                    margin: "10px",
                    color: "green",
                    marginLeft: "30px",
                    marginTop: "12px",
                  }}
                >
                  Ayurvedic Herbs:
                </h3>
                <ul
                  style={{
                    marginTop: "8px",
                    listStyleType: "none",
                  }}
                >
                  <li key={selectedDisease.name}>
                    {selectedDisease.Herbs.join(", ")}
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "25px",
                    margin: "10px",
                    color: "green",
                    marginLeft: "30px",
                    marginTop: "12px",
                  }}
                >
                  Ayurvedic Medicine:
                </h3>
                <ul
                  style={{
                    marginTop: "8px",
                    listStyleType: "none",
                  }}
                >
                  <li key={selectedDisease.name}>{selectedDisease.medicine}</li>
                </ul>
                {selectedDisease.image && (
                  <img
                    src={`./images/${selectedDisease.image}`}
                    alt={selectedDisease.name + " Medicine"}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => window.open(selectedDisease.link, "_blank")}
                  />
                )}
              </div>
            </div>
          )}
        </div> */}

      <div className={styles.container}></div>

      <h1
        style={{
          fontSize: "40px",
          color: "darkgreen",
          textAlign: "center",
          border: "3px solid darkgreen",
          margin: "30px 40px",
        }}
      >
        Ayurvedic Medicines
      </h1>

      <div className={styles.Boxes}>
        {images.map((image, index) => (
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
    </>
  );
}

export default Homepage;
