import React from "react";
import styles from "./Projects.module.css";

function Projects() {
  const enterBox1 = () => {
    document.getElementById("git1").style.color = "black";
    document.getElementById("arr1").style.color = "black";
    document.getElementById("ver1").style.backgroundColor = "white";
  };

  const leaveBox1 = () => {
    document.getElementById("git1").style.color = "transparent";
    document.getElementById("ver1").style.color = "transparent";
    document.getElementById("arr1").style.color = "transparent";
    document.getElementById("ver1").style.backgroundColor = "transparent";
  };

  const enterBox2 = () => {
    document.getElementById("git2").style.color = "black";
    document.getElementById("arr2").style.color = "black";
    document.getElementById("ver2").style.backgroundColor = "white";
  };

  const leaveBox2 = () => {
    document.getElementById("git2").style.color = "transparent";
    document.getElementById("ver2").style.color = "transparent";
    document.getElementById("arr2").style.color = "transparent";
    document.getElementById("ver2").style.backgroundColor = "transparent";
  };

  const enterBox3 = () => {
    document.getElementById("git3").style.color = "black";
    document.getElementById("arr3").style.color = "black";
    document.getElementById("ver3").style.backgroundColor = "white";
  };

  const leaveBox3 = () => {
    document.getElementById("git3").style.color = "transparent";
    document.getElementById("ver3").style.color = "transparent";
    document.getElementById("arr3").style.color = "transparent";
    document.getElementById("ver3").style.backgroundColor = "transparent";
  };

  const enterBox4 = () => {
    document.getElementById("git4").style.color = "black";
    document.getElementById("arr4").style.color = "black";
    document.getElementById("ver4").style.backgroundColor = "white";
  };

  const leaveBox4 = () => {
    document.getElementById("git4").style.color = "transparent";
    document.getElementById("ver4").style.color = "transparent";
    document.getElementById("arr4").style.color = "transparent";
    document.getElementById("ver4").style.backgroundColor = "transparent";
  };

  const enterBox5 = () => {
    document.getElementById("git5").style.color = "black";
    document.getElementById("arr5").style.color = "black";
    document.getElementById("ver5").style.backgroundColor = "white";
  };

  const leaveBox5 = () => {
    document.getElementById("git5").style.color = "transparent";
    document.getElementById("ver5").style.color = "transparent";
    document.getElementById("arr5").style.color = "transparent";
    document.getElementById("ver5").style.backgroundColor = "transparent";
  };

  const enterBox6 = () => {
    document.getElementById("git6").style.color = "black";
    document.getElementById("arr6").style.color = "black";
    document.getElementById("ver6").style.backgroundColor = "white";
  };

  const leaveBox6 = () => {
    document.getElementById("git6").style.color = "transparent";
    document.getElementById("ver6").style.color = "transparent";
    document.getElementById("arr6").style.color = "transparent";
    document.getElementById("ver6").style.backgroundColor = "transparent";
  };

  return (
    <>
      <section className={styles.container_5} id="projects">
        <h1>
          Latest <span style={{ color: "aqua" }}>Projects</span>
        </h1>

        <div className={styles.Projects}>
          <div className={styles.floor1}>
            {/* -------------- box1 ------------------- */}
            <div
              className={styles.box1}
              onMouseEnter={enterBox1}
              onMouseLeave={leaveBox1}
            >
              <div className={styles.link1}>
                <div>
                  <a href="https://github.com/PiyushPanwarFST">
                    <i className="fa-brands fa-github" id="git1"></i>
                  </a>
                </div>
                <div>
                  <a href="https://weather-fl8ng7kow-piyush-panwars-projects.vercel.app/">
                    <div className={styles.circle} id="ver1">
                      <i class="fa-solid fa-arrow-up-right-from-square" id="arr1"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* ---------------------- box2 ------------------------ */}

            <div
              className={styles.box2}
              onMouseEnter={enterBox2}
              onMouseLeave={leaveBox2}
            >
              <div className={styles.link1}>
                <div>
                  <a href="https://github.com/PiyushPanwarFST">
                    <i className="fa-brands fa-github" id="git2"></i>
                  </a>
                </div>
                <div>
                  <a href="https://weather-fl8ng7kow-piyush-panwars-projects.vercel.app/">
                    <div className={styles.circle} id="ver2">
                      <i class="fa-solid fa-arrow-up-right-from-square" id="arr2"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* ------------------------ box3 -------------------------- */}
            <div
              className={styles.box3}
              onMouseEnter={enterBox3}
              onMouseLeave={leaveBox3}
            >
              <div className={styles.link1}>
                <div>
                  <a href="https://github.com/PiyushPanwarFST">
                    <i className="fa-brands fa-github" id="git3"></i>
                  </a>
                </div>
                <div>
                  <a href="https://weather-fl8ng7kow-piyush-panwars-projects.vercel.app/">
                    <div className={styles.circle} id="ver3">
                      <i class="fa-solid fa-arrow-up-right-from-square" id="arr3"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------- floor2 ----------------------------- */}

          <div className={styles.floor1}>
            {/* -------------- box4 ------------------- */}
            <div
              className={styles.box4}
              onMouseEnter={enterBox4}
              onMouseLeave={leaveBox4}
            >
              <div className={styles.link1}>
                <div>
                  <a href="https://github.com/PiyushPanwarFST/Notes-Maker">
                    <i className="fa-brands fa-github" id="git4"></i>
                  </a>
                </div>
                <div>
                  <a href="https://weather-fl8ng7kow-piyush-panwars-projects.vercel.app/">
                    <div className={styles.circle} id="ver4">
                      <i class="fa-solid fa-arrow-up-right-from-square" id="arr4"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* ---------------------- box5 ------------------------ */}
            <div
              className={styles.box5}
              onMouseEnter={enterBox5}
              onMouseLeave={leaveBox5}
            >
              <div className={styles.link1}>
                <div>
                  <a href="https://github.com/PiyushPanwarFST/Myntra-Clone">
                    <i className="fa-brands fa-github" id="git5"></i>
                  </a>
                </div>
                <div>
                  <a href="https://weather-fl8ng7kow-piyush-panwars-projects.vercel.app/">
                    <div className={styles.circle} id="ver5">
                      <i class="fa-solid fa-arrow-up-right-from-square" id="arr5"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* ------------------------ box6 -------------------------- */}
            <div
              className={styles.box6}
              onMouseEnter={enterBox6}
              onMouseLeave={leaveBox6}
            >
              <div className={styles.link1}>
                <div>
                  <a href="https://github.com/PiyushPanwarFST">
                    <i className="fa-brands fa-github" id="git6"></i>
                  </a>
                </div>
                <div>
                  <a href="https://weather-fl8ng7kow-piyush-panwars-projects.vercel.app/">
                    <div className={styles.circle} id="ver6">
                      <i class="fa-solid fa-arrow-up-right-from-square" id="arr6"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          {/* --------------------- box6 ----------------------- */}
        </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
