import React from "react";
import styles from "./Projects.module.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek portfolio site.",
    image: "portfolio.png",
    github: "#",
    demo: "#",
  },
  {
    title: "E-commerce App",
    description: "A scalable e-commerce solution.",
    image: "ecommerce.png",
    github: "#",
    demo: "#",
  },
];

const Projects = () => (
  <section className={styles.projects}>
    <h2>My Projects</h2>
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={styles.card}
          whileHover={{ scale: 1.05 }}
        >
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className={styles.links}>
            <a href={project.github}>GitHub</a>
            <a href={project.demo}>Live Demo</a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
