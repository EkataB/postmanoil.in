// src/components/Skills.js (example)

import './Skills.css';
import { FaCode, FaLaptopCode, FaDatabase, FaBrain, FaUserCheck } from 'react-icons/fa';



const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-card">
          <FaCode className="skill-icon" />
          <h3>Programming</h3>
          <p>Java, SQL, HTML, CSS, JavaScript, Python, Selenium, JUnit, API Testing</p>
          {/* <p>Python, Selenium WebDriver Test Frameworks (TestNG/JUnit) API Testing (Postman/REST Assured)</p> */}
        </div>

        <div className="skills-card">
          <FaLaptopCode className="skill-icon" />
          <h3>Tools & Frameworks</h3>
          <p>React.js, Selenium WebDriver, TestNG, REST Assured, Postman</p>
        </div>

        <div className="skills-card">
          <FaBrain className="skill-icon" />
          <h3>Soft Skills</h3>
          <p>Problem Solving, Analytical Thinking, Deadline-Oriented</p>
        </div>

        <div className="skills-card">
          <FaUserCheck className="skill-icon" />
          <h3>Collaboration</h3>
          <p>Teamwork, Communication, Adaptability</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
