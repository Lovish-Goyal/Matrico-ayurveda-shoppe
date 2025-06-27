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
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactUser),
        }
      );

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
          <div className={styles.contactInfo}>
            <div className={styles.pageSubTitle}>
              We're very Approachable and would love to speak to you. Feel Free
              to call, send us an email, Tweet us or simply complete the enquiry
              Form.
            </div>
            <div className={styles.contactBox}>
              <div className={styles.icon}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className={styles.text}>
                <h3>Email</h3>
                <p>support@example.com</p>
                <p>info@example.com</p>
              </div>
            </div>

            <div className={styles.contactBox}>
              <div className={styles.icon}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className={styles.text}>
                <h3>Phone</h3>
                <p>+91 98765-43210</p>
                <p>+1 (123) 456-7890</p>
              </div>
            </div>

            <div className={styles.contactBox}>
              <div className={styles.icon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className={styles.text}>
                <h3>Address</h3>
                <p>405544 Sugar Camp Road, Ambala, Haryana, India</p>
                <br />
                <p>Monday – Friday: 9:00 AM – 6:00 PM IST</p>
                <p>Saturday: 10:00 AM – 2:00 PM IST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <ul className={styles.socialIcons}>
              <li>
                <a href="#" title="Facebook">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" title="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <h2>Enter Your Details:</h2>
            <div className={styles.inputBox}>
              <input
                type="text"
                name="username"
                value={contactUser.username}
                onChange={handleInputChange}
                placeholder="Username"
                required
              />
            </div>
            <div className={styles.inputBox}>
              <input
                type="email"
                name="email"
                value={contactUser.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>
            <div className={styles.inputBox}>
              <textarea
                name="message"
                value={contactUser.message}
                onChange={handleInputChange}
                placeholder="Type Your Message..."
                rows={5}
                required
              ></textarea>
            </div>
            <div className={styles.inputBox}>
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contactpage;
