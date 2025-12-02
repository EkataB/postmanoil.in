// import React from 'react';
// import './Education.css'; // We'll style it soon

// const Education = () => {
//   const educationData = [
//     {
//       degree: "Master's in Computer Applications",
//       institution: "Gogte Institute of Technology, Belgaum",
//       year: "2021 - 2023",
//       description: "Led IEEE Society, published AI in Education research paper.",
//     },
//     {
//       degree: "Bachelor's in Computer Science",
//       institution: "VPIMSR College, Sangli",
//       year: "2018 - 2021",
//       description: "Built core foundation in CS, developed mini projects.",
//     },
//     {
//       degree: "12th [Science]",
//       institution: "Jubilee Girls College, Miraj",
//       year: "2016 - 2018",
//       description: "",
//     },
//   ];

//   return (
//     <div className="education-section">
//       <h2 className="section-title">Education</h2>
//       <div className="timeline">
//         {educationData.map((edu, index) => (
//           <div className="timeline-item" key={index}>
//             <div className="timeline-content">
//               <h3>{edu.degree}</h3>
//               <p><strong>{edu.institution}</strong></p>
//               <p>{edu.year}</p>
//               {edu.description && <p>{edu.description}</p>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Education;

// src/components/Education.js
import React from 'react';
import './Education.css';

const educationData = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Gogte Institute of Technology, Belgaum',
    year: '2021 – 2023',
    description: "Led IEEE Society, published AI in Education research paper.",
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'VPIMSR College, Sangli',
    year: '2018 – 2021',
    description: "Built core foundation in CS, developed mini projects.",
  },
  {
    degree: '12th (Science)',
    institution: 'Jubilee Girls Gollege, Miraj',
    year: '2016 – 2018',
  },
];

const Education = () => {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <span>{edu.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
