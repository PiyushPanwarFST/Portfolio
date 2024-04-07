import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <>
      <section className={styles.container_2} id="about">
        <div className={styles.resumeImg}>
          <img
            src="/public/images/Screenshot 2024-04-07 at 12.57.20 AM.png"
            alt=""
            className={styles.image_container_2}
          />
          <div className={styles.resume}>
            <div className={styles.circle}>
              
                <a href="https://drive.google.com/file/d/1lMfwgqrshg3RWDmUTl5PQ8mw37xaOMrX/view?usp=sharing"><i class="fa-solid fa-arrow-up-right-from-square">
              </i></a>
            </div>
          </div>
        </div>

        <div className={styles.text_container_2}>
          <h1>
            About <span style={{ color: "aqua" }}>Me</span>
          </h1>
          <h3>
            Hi there, welcome to my website! I'm Cristian, a passionate web
            developer who enjoys learning new technologies and solving problems
            with code!
          </h3>

          <p className={styles.para_2}>
            This website is my personal blog where I write about web development
            topics that interest me and inspire me.
          </p>

          <p className={styles.para_2}>
            Thank you for visiting my website and getting to know me better. I
            hope you enjoyed reading my blog posts and found them useful and
            informative. If you want to read more of my posts, subscribe to my
            newsletter where I send weekly updates on web development trends and
            tips. If you have any feedback or suggestions, please let me know.
            I'd love to hear from you.
          </p>

          <button className={styles.btn_2}>Read More</button>
        </div>
      </section>
    </>
  );
}

export default About;
