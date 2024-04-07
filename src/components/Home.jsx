import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          Portfolio
        </a>

        <nav className={styles.navbar}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className={styles.container_1} id="home">
        <div className={styles.text_container_1}>
        
          <h3>Hello It's Me</h3>
          <h1>
            Piyush <span style={{ color: "aqua" }}>Panwar</span>
          </h1>
          <h3>And I'm a Frontend Developer</h3>

          <p className={styles.para_1}>
            I'm a web developer who loves to create beautiful and functional
            websites for people who want to make a difference in the world.
          </p>

          <p className={styles.para_1}>
            Currently I'm a student of FunctionUp School Of Technology, where
            I'm learning how to create beautiful and functional websites using
            HTML, CSS, JavaScript, and React.js.
          </p>

          <div className={styles.icon}>
            <a href="https://www.linkedin.com/in/piyush-panwar-80b65827b/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/PiyushPanwarFST">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCmq8ckCe8lPPosaiOF8CBXw">
              {" "}
              <i class="fa-brands fa-youtube"></i>
            </a>

            <a href="mailto:piyush2002panwar@gmail.com">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>

          <button className={styles.btn_1}>Download cv</button>
        </div>
        <div className={styles.image_container_1}>
          <img src="/public/images/WhatsApp_Image_2024-02-02_at_22.20.15-removebg-preview.png" />
        </div>
      </section>
    </>
  );
};

export default Home;
