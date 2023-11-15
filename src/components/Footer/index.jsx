import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useContext } from "react";
import { TemaContext } from "../../contexts/globalContext";

import styles from "./Footer2.module.css";

export default function Footer() {
  
  const { tema } = useContext(TemaContext);
  
  return (
    <footer className={`${styles.footer} ${tema ? '' : styles.darkMode}`}>

      <div className={styles.copyright}>
          <p>@2023 Digital Booking</p>
      </div>

        <div>
          <ul className={styles.lista}>
            <li>
              <FaFacebook size={24}/>
            </li>
            <li>
              <FaInstagram size={24}/>
            </li>
            <li>
              <FaLinkedin size={24}/>
            </li>
            <li>
              <FaTwitter size={24}/>
            </li>
          </ul>
        </div>
    </footer>
  );
}
