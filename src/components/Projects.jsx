import '../styles/Projects.scss'
import { forwardRef, useRef, useState, useEffect } from 'react';
import Experience from './Experience';

const Projects = forwardRef(function(props, ref) {
    const {expanded, handleSectionClick } = props;

    const [tdExpanded, setTdExpanded] = useState(false);
    const [creatExpanded, creatSetExpanded] = useState(false);
    const [nearExpanded, nearSetExpanded] = useState(false);
    const [cubeExpanded, cubeSetExpanded] = useState(false);
    const [bryteExpanded, bryteSetExpanded] = useState(false);
    const [bacExpanded, bacSetExpanded] = useState(false);

    const toggleSection = (sectionID) => {
      handleSectionClick(sectionID);
    };

    return (
      <div className='projects-section'>
        <div className='title-wrapper'>
        <div className='projects-title'></div>
        </div>
        <div className='projects'>
        <container className='proj-cont'>
          <span className='expand' onClick={expanded.td ? () => setTdExpanded(false) & toggleSection('td') : () => setTdExpanded(!tdExpanded)}>
            <div className='td-title' ref={ref}>TD Bank</div>
              {tdExpanded || expanded.td ? (<div className='plus'>-</div>) 
                : (<div className='plus'>+</div>)
              }
            <container className="skills">
            <div className='java'>Java</div>
            <div className = 'react'>ReactJS</div>
            <div className ='angular'>AngularJS</div>
            <div className ='devsec'>DevSecOps</div>
            <div className ='api'>API </div>
            <div className ='maven'>Maven</div>
            </container>
          </span>
          {tdExpanded || expanded.td ? (
            <div className='expandable'>
              <br></br>
              <p className='details'>At TD Bank I utilized various technologies such as GitHub Actions to improve DevSecOps practices throughout the organization. By integrating automation and troubleshooting CI/CD workflows, I aimed to help to bring down time to prod by 80%.
I took part in full-stack development on major internal TD apps such as an adjudication workstation for auto-decisioning mortgage approvals using Java on backend and Angular JS for implementation of multiple components on frontend.
I was an active participant of Agile ceremonies ensuring sprint tasks remained on target for me and my team.</p>
              </div>
          ) : null}
        </container>
        <hr className='line'></hr>
        <br></br>
        <container className='proj-cont'>
          <span className='expand' onClick={expanded.create ? () => creatSetExpanded(false) & toggleSection('create') : () => creatSetExpanded(!creatExpanded)}>
            <div className='td-title'>Creative Study</div>
            {creatExpanded || expanded.create ? (<div className='plus'>-</div>) 
                : (<div className='plus'>+</div>)
              }
            <container className="skills">
            <div className='java'>P5JS</div>
            <div className = 'react'>ReactJS</div>
            </container>
          </span>
          {creatExpanded || expanded.create ? (
            <div className='expandable'>
              <br></br>
              <p className='details'>Aside from the website you are currently viewing (built with React and deployed with AWS), the Creative Study can be viewed and played with by scrolling to the next section. 
              With the help of the P5JS library the artwork is generated using an algorithm for Perlin Noise, randomness, and user input. Perlin noise developed by Ken Perlin in 1983 has many uses. 
              In this context we are simply using it's 'noise' trait along with some randomness to create an aesthetically pleasing artwork reminicient of geographical terrain. 
               I hope to continue exploring code-based art and eventually create a series of works. Feel free to mess around with the algorithm below by changing some of the variables like the frequency of particles and size. 
               Save your image by right clicking on the canvas!</p>
              </div>
          ) : null}
        </container>
        <hr className='line'></hr>
        <br></br>
        <container className='proj-cont'>
          <span className='expand' onClick={expanded.near ? () => nearSetExpanded(false) & toggleSection('near') : () => nearSetExpanded(!nearExpanded)}>
            <div className='td-title'>NEAR Foundation</div>
            {nearExpanded || expanded.near ? (<div className='plus'>-</div>) 
                : (<div className='plus'>+</div>)
              }
            <container className="skills">
            <div className='java'>ReactJS</div>
            <div className ='react'>Figma</div>
            <div className ='api'>API</div>
            </container>
          </span>
          {nearExpanded || expanded.near ? (
            <div className='expandable'>
              <br></br>
              <p className='details'>
I worked on development/design of the NEAR DeFi responsive web-app using React framework.
I utilized APIs to consume, aggregate, and display on-chain data of the NEAR token and other cryptocurrencies, trending DeFi projects, NFTs, articles, and tweets.</p>
              </div>
          ) : null}
        </container>
        <hr className='line'></hr>
        <br></br>
        <container className='proj-cont'>
          <span className='expand' onClick={expanded.cube ? () => cubeSetExpanded(false) & toggleSection('cube') : () => cubeSetExpanded(!cubeExpanded)}>
            <div className='td-title'>Cube Stats</div>
            {cubeExpanded || expanded.cube ? (<div className='plus'>-</div>) 
                : (<div className='plus'>+</div>)
              }
            <container className="skills">
            <div className='java'>ReactJS</div>
            <div className = 'react'>API</div>
            <div className ='api'>AWS</div>
            </container>
          </span>
          {cubeExpanded || expanded.cube ? (
            <div className='expandable'>
              <br></br>
              <p className='details'>Cube Stats was a single-page React application I built to display secondary tokenomics data of an NFT and its associated cryptocurrency. 
              I aimed to also highlight the artwork itself. The application served as both a personal project and a tool to be used by collectors of the artwork.
              AWS was used for DevOps and CI/CD. By now the app has been deprecated but you can still check out some of the art on the page.</p>
              <p onClick={() => window.open('https://master.d1utwbn03y9afg.amplifyapp.com/')}>Go to site</p>
              </div>
          ) : null}
        </container>
        <hr className='line'></hr>
        <br></br>
        <container className='proj-cont'>
          <span className='expand' onClick={expanded.bryteCall ? () => bryteSetExpanded(false) & toggleSection('bryteCall') : () => bryteSetExpanded(!bryteExpanded)}>
            <div className='td-title'>BryteCall</div>
            {bryteExpanded || expanded.bryteCall ? (<div className='plus'>-</div>) 
                : (<div className='plus'>+</div>)
              }
            <container className="skills">
            <div className = 'react-bryte'>ReactJS</div>
            <div className ='figma'>Figma</div>            
            <div className ='api'>API</div>
            </container>
          </span>
          {bryteExpanded || expanded.bryteCall ? (
            <div className='expandable'>
              <br></br>
              <p className='details'>BryteCall is a VoIP company where I contributed to design and development of their website and internal facing CMS systems.
               I gained a footing using industry standard technologies such as Figma, Redux, React. 
               During my time here I layed the foundation for what would become BryteCall's in house CMS, transitioning them to a modern stack using React framework and Redux for state managment.
               This saves the company training in costs for new devs who had to learn to work with older enterpriese systems and through diminishing the reliance upon third party software/management.
                </p>
              </div>
          ) : null}
        </container>
        <hr className='line'></hr>
        <br></br>
        <container className='proj-cont'>
          <span className='expand' onClick={expanded.bacardi ? () => bacSetExpanded(false) & toggleSection('bacardi') : () => bacSetExpanded(!bacExpanded)}>
            <div className='td-title'>Bacardi</div>
            {bacExpanded || expanded.bacardi ? (<div className='plus'>-</div>) 
                : (<div className='plus'>+</div>)
              }
            <container className="skills">
            <div className='java'>Java</div>
            <div className = 'react'>ReactJS</div>
            <div className ='angular'>Figma</div>
            <div className ='api'>API</div>
            <div className ='maven'>Postman</div>
            </container>
          </span>
          {bacExpanded || expanded.bacardi ? (
            <div className='expandable'>
              <br></br>
              <p className='details'>During my time at Bacardi I gained experience working in all parts of the software development lifecycle. This is also where I discovered my passion 
              for frontend development. I created a backend application which acts as an age gate and implemented for Bacardi websites and applications internationally. This is used by anyone attempting to access Bacardi sites or apps and is a vital part of their compliance integrity. 
              I designed views using Figma for the Mixology app as well.</p>
              </div>
          ) : null}
        </container>
        </div>
      </div>
    );
  });
  export default Projects;