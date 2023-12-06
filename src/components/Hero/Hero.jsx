import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Violet</h1>
        <p className={styles.description}>
          I am a student who wants to show the knowledge that I have of
          programming and coding! /ᐠ - ˕ -マ
        </p>
        <a href="mailto:violetmeow69@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/poyo.png")}
        alt="Hero"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
