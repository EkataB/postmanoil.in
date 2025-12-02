// import React from 'react';
// import './Certifications.css';

// const Certifications = () => {
//   return (
//     <section className="cert-section">
//       <h2>Certifications</h2>
//       <ul className="cert-list">
//         <li>✅ Java Full Stack Certification</li>
//         <li>✅ Microsoft Azure AI Engineer Certification</li>
//         <li>✅ Research Paper on AI in Education – IJSRED Publication</li>
//       </ul>
//     </section>
//   );
// };

// export default Certifications;

// src/components/Certifications.js
import React from 'react';
import './Certifications.css';
import { FaCertificate } from 'react-icons/fa';

const certifications = [
  {
    title: 'Java Full Stack Certification',
    org: 'Completed',
  },
  {
    title: 'Microsoft Azure AI Engineer',
    org: 'Successfully Completed',
  },
  {
    title: 'Research Paper on AI in Education',
    org: 'Published in IJSRED',
  },
];

const Certifications = () => {
  return (
    <div className="certifications-section">
      <h2>Certifications</h2>
      <div className="certification-cards">
        {certifications.map((cert, idx) => (
          <div className="cert-card" key={idx}>
            <FaCertificate className="cert-icon" />
            <div>
              <h4>{cert.title}</h4>
              <p>{cert.org}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
