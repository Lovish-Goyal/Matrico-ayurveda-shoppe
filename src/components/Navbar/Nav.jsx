import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../utils/UserContext.jsx";
import { AiOutlineUser } from "react-icons/ai";
import styles from "./Nav.module.css";

function Nav() {
  const { user, logoutUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Metrico Ayurveda Shoppe</div>

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            HOME
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>
            ABOUT
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/ayur_store" className={styles.navLink}>
            AYUR STORE
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/daily_tips" className={styles.navLink}>
            DAILY TIPS
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact" className={styles.navLink}>
            CONTACT US
          </Link>
        </li>
      </ul>

      <div className={styles.authContainer}>
        {user ? (
          <div className={styles.userInfo}>
            <AiOutlineUser className={styles.userIcon} />
            <span className={styles.username}>{user.username}</span>
            <button onClick={handleLogout} className={styles.logout}>
              LOGOUT
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className={styles.login}>
              LOGIN
            </Link>
            <Link to="/register" className={styles.register}>
              REGISTER
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
