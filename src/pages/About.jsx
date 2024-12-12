/* eslint-disable no-unused-vars */
import React from "react";
import '../Styles/about.css';
import profile from '../assets/Dante.jpeg';
import download from '../assets/download.png';
// Importing motion
import { motion } from 'framer-motion';
// Importing the variants
import { fadeIn } from '../variants';

function About() {
  return (
    <section className="about--section">
      <h2>About Me</h2>
      <hr />
      <div className="about--container">
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="about--left"
        >
          <img src={profile} alt="Dante Kadagi" />
        </motion.div>
        <div className="about--right">
          <div className="content-main">
            <p className="content">
              With a passion for learning and building, I&apos;m a driven junior pursuing a Computer Science degree with a focus on mobile and web development. I&apos;m eager to contribute my skills and gain experience working on real-world projects.
              <br /><br />
              I&apos;m proficient in essential programming languages like Dart, and familiar with web technologies like HTML, CSS, JavaScript, Flutter, and React framework.
              <br /><br />
              I&apos;m a quick learner and a team player, always eager to collaborate with experienced developers to improve my skills. I&apos;m actively involved in the developer community, attending meetups and workshops to stay up-to-date on the latest trends and technologies.
              <br /><br />
              In my free time, I contribute to open-source projects and work on personal projects to further develop my skills. I&apos;m always looking for new challenges and opportunities to learn and grow as a developer.
            </p>
          </div>
          <div className="content--buttons">
            <button className="btn">
              Download CV
              <img src={download} alt="Download icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
