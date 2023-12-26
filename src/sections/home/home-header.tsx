import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
// styles
import '/src/styles/header.css';

// ----------------------------------------------------------------------
const HomeHeader: React.FC = () => {
  return (
    <header id="home">
      <div className="header__container container">
        <h5>Hello, I'm</h5>
        <h1>Bayu Faturahman</h1>
        <h5 className="text-light">Software Engineering </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src="/public/assets/bayu.png" alt="me" />
        </div>

        <a href="#contacts" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default HomeHeader;

// ----------------------------------------------------------------------

const CTA: React.FC = () => {
  return (
    <div className="cta">
      <a href="/public/assets/my-cv.pdf" download className="btn">
        Download CV
      </a>
      <a href="#contacts" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

// ----------------------------------------------------------------------

const HeaderSocials: React.FC = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/bayu-faturahman-8906a3196/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/BayuFaturahman" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};
