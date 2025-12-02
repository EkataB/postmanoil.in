
// src/components/About.js
// import React from "react";
// import "./About.css"; // Using dedicated CSS file

// const About = () => {
//   return (
//     <section className="about-section" id="about">
//       <div className="about-card">
//         <h2 className="about-title">👋 About Me</h2>
//         <p className="about-intro">
//           Hi, I'm <strong>Ekata Belvatkar</strong>, a frontend developer with a strong foundation in HTML, CSS, JavaScript, and React.
//           I hold a Master's degree in Computer Applications and completed an internship at Infynow Software Solutions.
//         </p>
//         <p className="about-objective">
//           💡 <strong>Career Objective:</strong> In a dynamic environment, I aim to apply my expertise and insights, contributing to the success of innovative projects while continuously learning and growing.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;

// src/components/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-card">
        <h2 className="about-title">About Me</h2>
        <p className="about-intro">
          Hi, I'm <strong>Ekata Belvatkar</strong>, a frontend developer with a strong foundation in HTML, CSS, JavaScript, and React.
          I hold a Master's degree in Computer Applications and completed an internship at Infynow Software Solutions.
        </p>
        <p className="about-objective">
          <strong>Career Objective:</strong> In a dynamic environment, I aim to apply my expertise and insights, contributing to the success of innovative projects while continuously learning and growing.
        </p>
      </div>
    </section>
  );
};

export default About;
