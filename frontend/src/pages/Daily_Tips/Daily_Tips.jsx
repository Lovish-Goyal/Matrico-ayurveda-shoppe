import React from "react";
import styles from "./Daily_Tips.module.css";

function DailyTips() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>
          Ayurvedic Tips - For a Healthy Life
        </h1>
        <p className={styles.subTitle}>
          Follow these wonderful tips to live a balanced and healthy life by
          adopting the ancient wisdom of Ayurveda.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          The Basic Principles of Ayurveda
        </h2>
        <p className={styles.sectionContent}>
          Ayurveda, the science of life, is an ancient medical system in India
          that dates back over 5000 years. It focuses on maintaining balance
          between the body, mind, and soul. In Ayurveda, health is defined as
          complete harmony between the body and mind.
        </p>
        <p className={styles.sectionContent}>
          Ayurveda teaches us that each person’s body, mind, and soul are
          unique, and we should take a personalized approach to our health. It
          not only treats diseases but also provides mental and spiritual peace.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Ayurvedic Daily Routine</h2>
        <div className={styles.tipContainer}>
          <div className={styles.tipCard}>
            <h3 className={styles.tipTitle}>
              Morning Water – Drink Warm Water with Lemon
            </h3>
            <p className={styles.tipContent}>
              Start your day with a glass of warm water and fresh lemon. This
              detoxifies your body, improves digestion, and provides energy for
              the entire day.
            </p>
          </div>
          <div className={styles.tipCard}>
            <h3 className={styles.tipTitle}>Oil Pulling (Telamanjan)</h3>
            <p className={styles.tipContent}>
              Oil pulling is an Ayurvedic practice where you swirl oil in your
              mouth for 10-15 minutes. It cleanses your mouth, maintains dental
              hygiene, and detoxifies your body.
            </p>
          </div>
          <div className={styles.tipCard}>
            <h3 className={styles.tipTitle}>Abhyanga (Self Massage)</h3>
            <p className={styles.tipContent}>
              Abhyanga, or self-massage with oil, nourishes the skin, promotes
              blood circulation, and brings peace and balance to the body. It
              helps balance the body’s doshas (Vata, Pitta, Kapha).
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Ayurvedic Diet: A Balanced Approach
        </h2>
        <p className={styles.sectionContent}>
          Diet is of great importance in Ayurveda. Food is consumed according to
          its freshness, season, and place. Ayurveda recognizes six tastes
          (sweet, sour, salty, pungent, bitter, and astringent) that help
          balance the body’s three doshas (Vata, Pitta, Kapha).
        </p>
        <ul className={styles.dietList}>
          <li>Sweet: Balances Vata and Pitta doshas.</li>
          <li>Sour: Increases digestion and balances Kapha dosha.</li>
          <li>Salty: Improves digestion and balances Vata dosha.</li>
          <li>
            Pungent: Stimulates digestion and removes toxins from the body.
          </li>
          <li>Bitter: Detoxifies the body and calms Pitta dosha.</li>
          <li>Astringent: Balances Kapha dosha and reduces inflammation.</li>
        </ul>
        <p className={styles.sectionContent}>
          By including this diet in your meals, you can maintain balance in both
          your body and mind. Ayurveda also recommends eating slowly and chewing
          properly for good digestion.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mental and Spiritual Well-being</h2>
        <p className={styles.sectionContent}>
          Ayurveda emphasizes not only physical health but also mental and
          spiritual health. Practices like yoga, meditation, and pranayama
          (breathing exercises) promote mental peace, reduce stress, and enhance
          mental clarity.
        </p>
        <div className={styles.tipContainer}>
          <div className={styles.tipCard}>
            <h3 className={styles.tipTitle}>Meditation: For Mental Peace</h3>
            <p className={styles.tipContent}>
              Ayurveda advises starting your day with meditation. 10-15 minutes
              of meditation increases mental peace, reduces stress, and
              maintains spiritual balance.
            </p>
          </div>
          <div className={styles.tipCard}>
            <h3 className={styles.tipTitle}>Pranayama: Breathing Practices</h3>
            <p className={styles.tipContent}>
              Pranayama is an Ayurvedic technique for controlling the breath. It
              establishes balance between the body and mind, reduces mental
              stress, and revitalizes the body.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Sleep: Ayurvedic Perspective</h2>
        <p className={styles.sectionContent}>
          According to Ayurveda, sleep is vital for our health. It suggests
          sleeping and waking according to the body’s natural rhythm. Going to
          bed early at night and waking up early in the morning aligns with the
          body’s natural cycle.
        </p>
        <p className={styles.sectionContent}>
          Ayurveda recommends 7-8 hours of sleep each night to fully rest the
          body and maintain physical and mental health. It is also said that
          eating a light meal before sleeping is beneficial.
        </p>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          Ayurveda is a beautiful way to bring peace, prosperity, and balance
          into your life. Incorporate these simple yet effective tips into your
          daily routine and take a step towards a healthy life.
        </p>
      </footer>
    </div>
  );
}

export default DailyTips;
