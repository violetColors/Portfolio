import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>You can contact me in:</h2>
        <p>Let me know that you want to know!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/email.png")} alt="Email icon" />
          <a href="mailto:violetmeow69@email.com">violetmeow69@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedin-icon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/">linkedin.com/in/violeta-hernández-g-3112a5291</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/cat.png")} alt="Github icon" />
          <a href="https://www.github.com/violetColors">github.com/violetColors</a>
        </li>
      </ul>
    </footer>
  );
};
