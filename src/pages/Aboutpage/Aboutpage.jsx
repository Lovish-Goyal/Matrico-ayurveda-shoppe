import React from "react";
import styles from "./Aboutpage.module.css";

function Aboutpage() {
  return (
    <>
      <div className={styles.container}>
        <h1>About Metrico Ayurveda Shoppe</h1>

        <p className={styles.paragraph}>
          Welcome to Metrico Ayurveda Shoppe, your trusted destination for
          authentic desi Ayurvedic remedies. Rooted in centuries of ancient
          wisdom, our shop offers a wide range of Ayurvedic medicines and
          natural health products designed to help you achieve balance,
          vitality, and holistic well-being. At Metrico Ayurveda Shoppe, we
          believe in the power of nature to heal, nurture, and restore the body,
          mind, and spirit. Ayurveda, the traditional Indian system of medicine,
          has been practiced for thousands of years, and its principles of
          natural healing continue to guide us today. We are passionate about
          bringing the benefits of this ancient knowledge into the modern world,
          offering solutions that are both effective and gentle.
        </p>

        <h2 className={styles.heading}>Our Offerings</h2>
        <p className={styles.paragraph}>
          We offer a carefully curated selection of Ayurvedic herbs, medicines,
          oils, pills, and supplements sourced from trusted farms and Ayurvedic
          practitioners. Our products are formulated using the finest natural
          ingredients to ensure quality, potency, and purity. From digestive
          health and immunity boosters to stress relief and skin care, we have
          remedies to address a variety of health concerns.
        </p>

        <h2 className={styles.heading}>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Authenticity</strong>: At Metrico Ayurveda Shoppe, we pride
            ourselves on offering only genuine and authentic Ayurvedic products
            that are rooted in traditional practices. We carefully select each
            item based on its effectiveness and purity.
          </li>
          <li>
            <strong>Holistic Approach</strong>: Ayurveda is more than just a set
            of remedies—it's a way of life. We focus on holistic wellness by
            integrating mind, body, and spirit, ensuring that each product
            supports your overall health and happiness.
          </li>
          <li>
            <strong>Natural and Sustainable</strong>: Our products are made from
            natural, sustainable sources, free from harmful chemicals and
            additives. We are committed to supporting eco-friendly practices and
            promoting sustainability in everything we do.
          </li>
          <li>
            <strong>Customer Care</strong>: Our team is dedicated to helping you
            find the right Ayurvedic solutions for your needs. Whether you’re
            new to Ayurveda or an experienced practitioner, we are here to guide
            you on your wellness journey.
          </li>
        </ul>

        <h2 className={styles.heading}>Our Mission</h2>
        <p className={styles.paragraph}>
          At <strong>Metrico Ayurveda Shoppe</strong>, our mission is simple: to
          provide you with access to the best of Ayurvedic healing—products that
          are effective, ethical, and rooted in tradition. We aim to help you
          live a healthier, more balanced life by offering products that align
          with the ancient wisdom of Ayurveda while making it accessible in
          today’s fast-paced world.
        </p>

        <h2 className={styles.heading}>Join Us on Your Wellness Journey</h2>
        <p className={styles.paragraph}>
          Explore our collection of Ayurvedic remedies and let us help you
          experience the timeless benefits of Ayurveda. Whether you seek to
          restore balance, improve your overall health, or simply incorporate
          more natural solutions into your life, Metrico Ayurveda Shoppe is here
          to support you every step of the way.
        </p>
      </div>
    </>
  );
}

export default Aboutpage;
