import '../styles/Projects.scss'
import { forwardRef, useRef, useState } from 'react';
import Experience from './Experience';



const Projects = forwardRef(function(props, ref) {
  
    const [expanded, setExpanded] = useState(false);
    const [creatExpanded, creatSetExpanded] = useState(false);
    const [nearExpanded, nearSetExpanded] = useState(false);
    const [cubeExpanded, cubeSetExpanded] = useState(false);
    const [bryteExpanded, bryteSetExpanded] = useState(false);
    const [bacExpanded, bacSetExpanded] = useState(false);

    return (
      <div className='projects-section'>
        <div className='title-wrapper'>
        <div className='projects-title'></div>
        </div>
        <div className='projects'>
        <container className='proj-cont'>
          <span className='expand' onClick={() => setExpanded(!expanded)}>
            <div className='td-title' ref={ref}>TD Bank</div>
              {expanded ? (<div className='plus'>-</div>) 
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
          {expanded ? (
            <div className='expandable'>
              <br></br>
              <p className='details'>At TD I utilized various technologies such as GitHub Actions to improve DevSecOps practices throughout the organization by integrating automation and troubleshooting CI/CD workflows aiming to bring down time to prod by 80%.
Took part in full-stack development on major internal TD apps using Java on backend and Angular JS for implementation of multiple components on frontend.
Active participant of Agile ceremonies working with both large and small teams.</p>
              </div>
          ) : null}
        </container>
        <hr className='line'></hr>
        <br></br>
        <container className='proj-cont'>
          <span className='expand' onClick={() => creatSetExpanded(!creatExpanded)}>
            <div className='td-title'>Creative Study</div>
            {creatExpanded ? (<div className='plus'>-</div>) 
                : (<div className='plus'>+</div>)
              }
            <container className="skills">
            <div className='java'>P5JS</div>
            <div className = 'react'>ReactJS</div>
            </container>
          </span>
          {creatExpanded ? (
            <div className='expandable'>
              <br></br>
              <p className='details'>Aside from the website you are currently viewing (built with React and deployed with AWS), the Creative Study can be viewed and played with by scrolling to the next section. 
              With the help of the P5JS library the artwork is generated using an algorithm for Perlin Noise, randomness, and user input. Perlin noise developed by Ken Perlin in 1983 has many uses, including but not limited to:
               procedurally generating terrain, applying pseudo-random changes to a variable, and assisting in the creation of image textures. In this context we are simply using it to create an aesthetically pleasing artwork. 
               I hope to continue exploring code-based art and eventually create a series of works. Feel free to mess around with the algorithm below by changing some of the variables like the frequency of particles and size. 
               Save your image by right clicking on the canvas!</p>
              </div>
          ) : null}
        </container>
        <hr className='line'></hr>
        <br></br>
        <container className='proj-cont'>
          <span className='expand' onClick={() => nearSetExpanded(!nearExpanded)}>
            <div className='td-title'>NEAR Foundation</div>
            {nearExpanded ? (<div className='plus'>-</div>) 
                : (<div className='plus'>+</div>)
              }
            <container className="skills">
            <div className='java'>ReactJS</div>
            <div className ='react'>Figma</div>
            <div className ='api'>API</div>
            </container>
          </span>
          {nearExpanded ? (
            <div className='expandable'>
              <br></br>
              <p className='details'>
Worked on development/design of the NEAR DeFi responsive web-app using React framework.
API consumption to aggregate and display on-chain data of NEAR token and other cryptocurrencies, trending DeFi projects, NFTs, articles, and tweets.</p>
              </div>
          ) : null}
        </container>
        <hr className='line'></hr>
        <br></br>
        <container className='proj-cont'>
          <span className='expand' onClick={() => cubeSetExpanded(!cubeExpanded)}>
            <div className='td-title'>Cube Stats</div>
            {cubeExpanded ? (<div className='plus'>-</div>) 
                : (<div className='plus'>+</div>)
              }
            <container className="skills">
            <div className='java'>ReactJS</div>
            <div className = 'react'>API</div>
            <div className ='api'>AWS</div>
            </container>
          </span>
          {cubeExpanded ? (
            <div className='expandable'>
              <br></br>
              <p className='details'>Cube Stats was a single-page React application I built to display secondary tokenomics data of an NFT and its associated cryptocurrency. 
              I aimed to also highlight the artwork itself. The application served as both a personal project and a tool to be used by collectors of the artwork.
              AWS was used for DevOps and CI/CD.</p>
              </div>
          ) : null}
        </container>
        <hr className='line'></hr>
        <br></br>
        <container className='proj-cont'>
          <span className='expand' onClick={() => bryteSetExpanded(!bryteExpanded)}>
            <div className='td-title'>BryteCall</div>
            {bryteExpanded ? (<div className='plus'>-</div>) 
                : (<div className='plus'>+</div>)
              }
            <container className="skills">
            <div className = 'react-bryte'>ReactJS</div>
            <div className ='figma'>Figma</div>            
            <div className ='api'>API</div>
            </container>
          </span>
          {bryteExpanded ? (
            <div className='expandable'>
              <br></br>
              <p className='details'>BryteCall is a VoIP company where I contributed to design and development of their website and internal facing CMS systems. I gained a footing using industry standard technologies such as Figma, Redux, React and more </p>
              </div>
          ) : null}
        </container>
        <hr className='line'></hr>
        <br></br>
        <container className='proj-cont'>
          <span className='expand' onClick={() => bacSetExpanded(!bacExpanded)}>
            <div className='td-title'>Bacardi</div>
            {bacExpanded ? (<div className='plus'>-</div>) 
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
          {bacExpanded ? (
            <div className='expandable'>
              <br></br>
              <p className='details'>During my time at Bacardi I had the opportunity to gain experience working in all parts of the software development lifecycle. This is also where I discovered my passion 
              for frontend development. From creating a backend application to be used as an age gate for all their websites and applications internationally to designing and developing for Bacardi mobile and web apps I had a great time contributing 
              to a large enterprise company such as this.</p>
              </div>
          ) : null}
        </container>
        </div>
      </div>
    );
  });
  export default Projects;