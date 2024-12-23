import React from "react";
import styles from "./Skills.module.css";

const skills = [
  { name: "React", level: 90 },
  { name: "Java", level: 85 },
  { name: "Node.js", level: 80 },
];

const Skills = () => (
  <section className={styles.skills}>
    <h2>My Skills</h2>
    <div className={styles.skillContainer}>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skill}>
          <span>{skill.name}</span>
          <div className={styles.bar}>
            <div className={styles.level} style={{ width: `${skill.level}%` }} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
