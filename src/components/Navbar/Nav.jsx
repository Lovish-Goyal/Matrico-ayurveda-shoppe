import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../utils/UserContext.jsx";
import { AiOutlineUser } from "react-icons/ai";
import styles from "./Nav.module.css";

function Nav() {
  const { user, logoutUser } = useUser();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    // Ask for confirmation before logging out
    const isConfirmed = window.confirm("Are you sure you want to log out?");

    if (isConfirmed) {
      logoutUser();
      alert("Logged out successfully!");
      navigate("/"); // Navigate to homepage or login page
      setDropdownOpen(false); // Close dropdown after logout
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        Metrico Ayurveda Shoppe
      </Link>

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
            AYURVEDIC TIPS
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact" className={styles.navLink}>
            CONTACT US
          </Link>
        </li>
      </ul>

      <div className={styles.authContainer} ref={dropdownRef}>
        {user ? (
          <div className={styles.userInfo} onClick={toggleDropdown}>
            <AiOutlineUser className={styles.userIcon} />
            <span className={styles.username}>{user.username}</span>

            {dropdownOpen && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownHeader}>User Profile</div>
                <p>
                  <strong>Name:</strong> {user.username}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <button onClick={handleLogout} className={styles.logoutBtn}>
                  LOGOUT
                </button>
              </div>
            )}
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
