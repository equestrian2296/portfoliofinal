import { useEffect, useState } from 'react';
import {
  faPython,
  faJava,
  faJsSquare,
  faReact,
  faGitAlt,
  faAndroid, // Make sure to import the correct icon for Android if available
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am an undergraduate student in Computer Science Engineering with a passion for innovation and entrepreneurship. My goal is to blend technology and business to create impactful products that solve real-world problems. I thrive on challenges and am eager to explore the intersection of software development and startup culture.
          </p>
          <p align="left">
            With experience in programming languages like Python, Java, and JavaScript, I have worked on various projects that showcase my technical skills and creative problem-solving abilities. I am actively seeking opportunities to collaborate on startup initiatives or internships that allow me to contribute to product development and gain hands-on experience in the tech industry.
          </p>
          <p>Skills
            <ul>
              <li><strong>Programming Languages:</strong> Python, Java, JavaScript</li>
              <li><strong>Web Development:</strong> HTML, CSS, React</li>
              <li><strong>Android Development:</strong> Android Studio / Java</li>
              <li><strong>Business Acumen:</strong> Market Research, Product Development, Startup Strategy</li>
              <li><strong>Tools:</strong> Git, Visual Studio Code, Figma</li>
              <li><strong>Soft Skills:</strong> Team Collaboration, Communication, Adaptability</li>
            </ul>
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#306998" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#007396" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#F7DF1E" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#61DAFB" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#F05032" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faAndroid} color="#3DDC84" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
