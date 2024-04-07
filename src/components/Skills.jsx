import styles from "./Skills.module.css";
import AnimatedCircle from "./AnimatedCircle";

function Skills() {
  let number = document.getElementById("number");
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
    <>
      <div className={styles.floor}>
        <AnimatedCircle number={88} strokeDashoffset={90} />
        <AnimatedCircle number={80} strokeDashoffset={105} />
        <AnimatedCircle number={75} strokeDashoffset={120} />
        <AnimatedCircle number={75} strokeDashoffset={120} />
      </div>
      <div className={styles.floor}>
        <AnimatedCircle number={70} strokeDashoffset={100} />
        <AnimatedCircle number={73} strokeDashoffset={97} />
        <AnimatedCircle number={65} strokeDashoffset={150} />
        <AnimatedCircle number={90} strokeDashoffset={70} />
      </div>
    </>
  );
}

export default Skills;
