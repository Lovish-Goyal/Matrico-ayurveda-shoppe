import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../utils/UserContext.jsx";
import {
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import styles from "./Loginpage.module.css";

const Loginpage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { loginUser } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        const userData = await response.json();
        loginUser(userData);
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        const error = await response.json();
        alert(error.message);
      }
    } catch (err) {
      console.error("Login failed:", err.message);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <div className={styles.inputWithIcon}>
              <input
                type="text"
                id="email"
                name="email"
                value={user.email} // ✅ FIXED HERE
                onChange={handleChange}
                placeholder="Enter your Email"
                required
                className={styles.input}
              />
              <AiOutlineUser className={styles.icon} />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <div className={styles.inputWithIcon}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className={styles.input}
              />
              {showPassword ? (
                <AiOutlineEyeInvisible
                  className={styles.icon}
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <AiOutlineEye
                  className={styles.icon}
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
        <p className={styles.signupText}>
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
