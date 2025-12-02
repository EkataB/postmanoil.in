// import React from "react";
// // import "./About.css";
// import "./App.css";
// import ThemeProvider from "./ThemeContext";
// import ThemeSwitcher from "./ThemeSwitcher";
// import Banner from "./components/Banner";
// import About from "./components/About"; // ✅ add this line
// import Projects from "./components/Projects";
// import Certifications from './components/Certifications';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Education from './components/Education';
// import Contact from './components/Contact';



// function App() {
//   return (
//     <ThemeProvider>
//       <div className="app">
//         <ThemeSwitcher />
//         <Banner />
//         <About /> 
//          <Projects />
//          <Certifications />
//          <Skills />
//         <Experience />
//         <Education />
//         {/* <Contact /> */}

//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;


// App.js

import Banner from "./components/Banner";
import About from './components/About';
import Internship from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <>
    <Banner />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default App;
