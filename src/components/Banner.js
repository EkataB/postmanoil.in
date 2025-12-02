// src/components/Banner.js

import React from "react";
import "./Banner.css"; // optional if you want separate styles

const Banner = () => {
  return (
    <div className="banner">
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQFUIoOtPxnoVw/profile-displayphoto-shrink_400_400/B4DZRfz90nGkAs-/0/1736774246406?e=1755129600&v=beta&t=tnO50So-Fvc9uftnyGUzCEztq77nbVylfJltRhWSt-I"
        alt="Ekata Belvatkar"
        className="profile-pic"
      />
      <h1>Ekata Belvatkar</h1>
      <p>Frontend Developer | React Enthusiast</p>

      {/* <a
        href="https://www.linkedin.com/in/ekata-belvatkar-724870292/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-button"
      >
        🔗 View LinkedIn
      </a>

      <br />

      <a
        href="/Ekata_Resume.pdf"
        download
        className="resume-button"
      >
        📄 Download Resume
      </a> */}
    </div>
  );
};

export default Banner;
