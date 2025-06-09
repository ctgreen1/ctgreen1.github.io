import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatarImg from '../assets/images/avatar_circular.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatarImg} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ctgreen1" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/carsontylergreen/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Carson Green</h1>
          <p>Electrical Engineer, Systems Engineer, and Graduate Research Assistant</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ctgreen1" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/carsontylergreen/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;