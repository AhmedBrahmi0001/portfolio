import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ahmed Brahmi</h1>
        <p className={styles.description}>
          Freshly graduated software engineer with a strong foundation in
          full-stack development. I specialize in crafting intuitive web and
          mobile applications. Passionate about DevOps, I leverage modern tools
          to streamline development and deployment processes.
        </p>
        <a
          href="mailto:myemail@email.com"
          className={styles.contactBtn}
          aria-label="Contact Me"
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Ahmed Brahmi"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
