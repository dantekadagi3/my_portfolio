// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "../Styles/skills.css";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector(".skills-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <hr />

      <div className="skills-container">
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <div className="progress-bar">
            <span>HTML</span>
            <div className="bar" style={{ width: isVisible ? "95%" : "0%" }}></div>
          </div>
          <div className="progress-bar">
            <span>CSS</span>
            <div className="bar" style={{ width: isVisible ? "90%" : "0%" }}></div>
          </div>
          <div className="progress-bar">
            <span>Dart</span>
            <div className="bar" style={{ width: isVisible ? "60%" : "0%" }}></div>
          </div>
          <div className="progress-bar">
            <span>Flutter</span>
            <div className="bar" style={{ width: isVisible ? "70%" : "0%" }}></div>
          </div>
        </div>

        <div className="professional-skills">
          <h3>Professional Skills</h3>
          <div className="circular-skills">
            {["Communication (90%)", "Teamwork (70%)", "Mobile Dev (60%)", "Web Dev (80%)"].map(
              (skill, index) => (
                <div key={index} className="circle">
                  <svg>
                    <circle cx="50" cy="50" r="45"></circle>
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      style={{
                        strokeDasharray: 283,
                        strokeDashoffset: isVisible
                          ? 283 - (parseInt(skill.match(/\d+/)[0]) / 100) * 283
                          : 283,
                      }}
                    ></circle>
                  </svg>
                  <div className="circle-label">{skill.match(/\d+/)[0]}%</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
