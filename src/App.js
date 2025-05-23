import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Art from './components/Art';
import Contact from './components/Contact';
import './App.css';

function App() {
  const projSection = useRef();
  const [expanded, setExpanded] = useState({
    td: false,
    create: false,
    near: false,
    cube: false,
    bryteCall: false,
    bacardi: false,
  });

  const handleSectionClick = (sectionId) => {
    setExpanded((prevExpanded) => ({
     ...prevExpanded, [sectionId]: !prevExpanded[sectionId],
    }));
   };


  const scrollHandler = (elmRef) => {
    console.log(elmRef);
    window.scrollTo({ top: elmRef.current.offsetTop - 100, behavior: "smooth"});
  };

  return (
   <div>
    <div className='header-section'>
      <Header />
    </div>
    <div className='body-section'>
      <div className="intro-component" id="intro">
        <Intro />
      </div>
      <div className="about-component" id="about">
        <About />
      </div>
      <div className="experience-component" id="experience" onClick={() => scrollHandler(projSection)}>
        <Experience handleSectionClick={handleSectionClick} />
      </div>
      <div className="projects-component" id="projects" ref={projSection}>
        PROJECTS
      </div>
      <div className='projects_skills' id="projects">
      <Projects expanded={expanded} setExpanded={setExpanded} handleSectionClick={handleSectionClick} ></Projects>
      </div>
      <div className="art-component" id="art">
        <Art />
      </div>
      </div>
      <div id="Contact">
        <Contact />
      </div>
   </div>
  );
}

export default App;
