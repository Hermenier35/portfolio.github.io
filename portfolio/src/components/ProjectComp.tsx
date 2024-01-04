import React from 'react';
import { Carousel } from 'antd';
import '../style/ProjectComp.css';
import axios, { AxiosResponse } from 'axios';
import Test from '../assets/images/test.jpg'

interface ProjectCompState {
  projects: any[];
  isLoading: boolean;
}

interface Project {
  title: string;
  description: string;
  competences: string;
  lien: string;
  image: string;
}

class ProjectComp extends React.Component<{}, ProjectCompState> {

  carouselRef = React.createRef<any>();

  constructor(props: {}) {
    super(props);
    this.state = {
      projects: [],
      isLoading : true
    };
  }

  componentDidMount() {
    this.fetchGitHubRepos();
    setTimeout(() => {
      if (this.carouselRef.current) {
        const focusableElement = this.carouselRef.current.querySelector('button, a, input, [tabindex]');
        if (focusableElement) {
          focusableElement.focus();
        }
      }
    }, 0);
  }

  fetchGitHubRepos = async () => {
    this.setState({ isLoading: true });
    try {
      const reposResponse: AxiosResponse = await axios.get('https://api.github.com/users/Hermenier35/repos', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });

      const projects: Project[] = await Promise.all(reposResponse.data.map(async (repo: any) => {
        if(repo.name !== 'portfolio.github.io'){
          const readmeResponse: AxiosResponse = await axios.get(`https://api.github.com/repos/Hermenier35/${repo.name}/readme`, {
            headers: {
              'Accept': 'application/vnd.github.VERSION.raw'
            }
          });
      
          const readmeContent = readmeResponse.data;
          const titleMatch = readmeContent.match(/^#\s(.+)/);
          const descriptionMatch = readmeContent.match(/## Description\n([\s\S]*?)(?=\n## |\n$)/);
          const competencesMatch = readmeContent.match(/## Competences\n([\s\S]*?)(?=\n## |\n$)/);
          const lienMatch = repo.html_url;
          const img = `https://raw.githubusercontent.com/Hermenier35/${repo.name}/${repo.default_branch}/screen.png`
  
          return {
            title: titleMatch ? titleMatch[1] : 'No Title',
            description: descriptionMatch ? descriptionMatch[1] : 'No Description',
            competences: competencesMatch ? competencesMatch[1] : 'No Competences',
            lien: lienMatch ? lienMatch : 'No Lien',
            image: img
            };
        }
      }));

      this.setState({ projects, isLoading: false });
    } catch (error) {
      console.error("Error fetching GitHub repositories:", error);
      this.setState({ isLoading: false });
    }
  };

  onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  renderCarouselItems = () => {
    return this.state.projects.map((project, index) => {
      if (!project) {
        return null;
      }
  
      const { title, description, competences, lien, image } = project;
      const imageSrc = image || Test; 
      const projectTitle = title || 'No Title';
      const projectDescription = description || 'No Description';
      const projectCompetences = competences || 'No Competences';
      const projectLien = lien || 'No Lien';
      return (
        <div key={index}>
          <div className='card'>
            <div className='side'>
              <h2>{projectTitle}</h2>
              <p dangerouslySetInnerHTML={{ __html: projectDescription }}></p>
            </div>
            <img className='image' src={imageSrc} alt={projectTitle} />
            <div className='side'>
              <h3>Compétences:</h3>
              <p dangerouslySetInnerHTML={{ __html: projectCompetences }}></p>
              <a href= {projectLien} target="_blank" rel="noopener noreferrer">Voir le dépot</a>
            </div>
          </div>
        </div>
      );
    });
  };
  

  render() {
    return (
      <Carousel afterChange={this.onChange}>
        {this.state.isLoading ? (
          <div>Chargement...</div>
        ) : (
            this.renderCarouselItems()
        )}
      </Carousel>
    );
  }
}

export default ProjectComp;
