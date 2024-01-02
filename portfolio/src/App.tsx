import React from 'react';
import './App.css';
import Profil from './assets/images/pio.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import ProjectComp from './components/ProjectComp';
import SimpleWordcloud from './components/CompetencesComp';
import Formation from './components/FormationComp';
import Contact from './components/ContactComp';


function App() {
  return (
    <div className="App">
      <title>Portfolio</title>
      <header className="App-header">
        <img src={Profil} alt="profil" />
        <div className='informations'>
          <h1>Pierre-Edouard Hermenier</h1>
          <h2>Software Engineering</h2>
          <div className='icons'>
            <a href="https://www.linkedin.com/in/pierre-hermenier-771b86264/">
              <FontAwesomeIcon icon={faLinkedin} className="icon-large" />
            </a>
            <a href="https://github.com/Hermenier35">
              <FontAwesomeIcon icon={faGithub} className="icon-large" />
            </a>
          </div>
        </div>
        <div className='wordcloud'>
          <SimpleWordcloud/>
        </div>
      </header>
      
        <ProjectComp/>
        <div className='formation'>
          <Formation />
        </div>
        <Contact />
    </div>
  );
}

export default App;
