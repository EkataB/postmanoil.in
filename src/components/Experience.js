// import React from 'react';
// import './Experience.css'; 

// const experiences = [

//   {
//     title: 'Intern - Software Developer',
//     company: 'Infynow Software Solutions',
//     duration: 'May 2023 – Aug 2023',
//     description: [
//       'Built responsive UI components using React.js.',
//       'Participated in agile sprints and code reviews.',
//       'Worked on live projects like classicprojects.in.',
//     ],
//   },
// ];

// const Experience = () => {
//   return (
//     <div className="experience-section">
//       <h2 className="section-title">Internship</h2>
//       <div className="experience-cards">
//         {experiences.map((exp, index) => (
//           <div key={index} className="experience-card">
//             <h3>{exp.title}</h3>
//             <h4>{exp.company}</h4>
//             <p className="duration">{exp.duration}</p>
//             <ul>
//               {exp.description.map((point, idx) => (
//                 <li key={idx}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;

import React from "react";
import "../components/Experience.css";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-wrapper">
        <h2 className="section-title">Internship</h2>
        <div className="experience-card">
          <h3>Intern – Software Developer</h3>
          <h4>Infynow Software Solutions</h4>
          <p className="duration">May 2023 – Aug 2023</p>
          <ul>
            <li>Built responsive UI components using React.js.</li>
            <li>Participated in agile sprints and code reviews.</li>
            <li>Worked on live projects like classicprojects.in.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
