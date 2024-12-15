import React, { useState } from "react";
import styles from "./Contactpage.module.css";

function Contactpage() {
  const [contactUser, setContactUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!contactUser.username || !contactUser.email || !contactUser.message) {
      alert("All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:7080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactUser),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setContactUser({ username: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Error sending message. Please try again later.");
      console.error("Error:", err);
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.pageTitle}>Get In Touch</div>

      <div className={styles.boxWrapper}>
        <div className={styles.contactWrapper}>
          <div className={styles.pageSubTitle}>
            We're very Approachable and would love to speak to you. Feel Free to
            call, send us an email, Tweet us or simply complete the enquiry
            Form.
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactBox}>
              <div className={styles.icon}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className={styles.text}>
                <h3>Email</h3>
                <p>temproryEmail@dummy.domain</p>
              </div>
            </div>

            <div className={styles.contactBox}>
              <div className={styles.icon}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className={styles.text}>
                <h3>Phone</h3>
                <p>+91-000-000-0000</p>
                <p>+1-000-000-000</p>
              </div>
            </div>

            <div className={styles.contactBox}>
              <div className={styles.icon}>
                <i className="fa-solid fa-fax"></i>
              </div>
              <div className={styles.text}>
                <h3>Fax</h3>
                <p>058-000-0000</p>
              </div>
            </div>

            <div className={styles.contactBox}>
              <div className={styles.icon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className={styles.text}>
                <h3>Address</h3>
                <p>#405544 Sugar camp Road, Ambala, India</p>
              </div>
            </div>

            <ul className={styles.socialIcons}>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <h2>Send Message</h2>
            <div className={styles.inputBox}>
              <input
                type="text"
                name="username"
                value={contactUser.username}
                onChange={handleInputChange}
                required
              />
              <span>Full Name</span>
            </div>
            <div className={styles.inputBox}>
              <input
                type="email"
                name="email"
                value={contactUser.email}
                onChange={handleInputChange}
                required
              />
              <span>Email</span>
            </div>
            <div className={styles.inputBox}>
              <textarea
                name="message"
                value={contactUser.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <span>Type Your Message...</span>
            </div>
            <div className={styles.inputBox}>
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contactpage;
