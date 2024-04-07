import styles from "./Skills.module.css";
import AnimatedCircle from "./AnimatedCircle";
import React from "react";

function Skills() {
  let number = document.getElementById("number");
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  console.log("rendering...");
  let counter = 0;

  setInterval(() => {
    if (counter == 65) {
      clearInterval();
    } else {
      counter += 1;
      number.innerHTML = `${counter}%`;
    }
  }, 1000);

  return (
    <div onMouseEnter={forceUpdate}>
      <h1 className={styles.heading}>
        My<span style={{ color: "aqua" }}> Skills</span>
      </h1>
      <div className={styles.item} id="skills">
        <div className={styles.floor}>
          <table>
            <tr>
              <th>
                <AnimatedCircle number={88} strokeDashoffset={90} />
              </th>
              <th>
                <AnimatedCircle number={80} strokeDashoffset={105} />
              </th>
              <th>
                <AnimatedCircle number={75} strokeDashoffset={120} />
              </th>
              <th>
                <AnimatedCircle number={75} strokeDashoffset={120} />
              </th>
            </tr>
            <tr className={styles.lang}>
              <th>
                <h2>HTML</h2>
              </th>
              <th>
                <h2>CSS</h2>
              </th>
              <th>
                <h2>JavaScript</h2>
              </th>
              <th>
                <h2>Java</h2>
              </th>
            </tr>
          </table>
          <table>
            <tr>
              <th>
                <AnimatedCircle number={80} strokeDashoffset={90} />
              </th>
              <th>
                <AnimatedCircle number={60} strokeDashoffset={145} />
              </th>
              <th>
                <AnimatedCircle number={63} strokeDashoffset={135} />
              </th>
              <th>
                <AnimatedCircle number={73} strokeDashoffset={110} />
              </th>
            </tr>
            <tr className={styles.lang}>
              <th>
                <h2>React.js</h2>
              </th>
              <th>
                <h2>Express.js</h2>
              </th>
              <th>
                <h2>Node.js</h2>
              </th>
              <th>
                <h2>MongoDB</h2>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Skills;
