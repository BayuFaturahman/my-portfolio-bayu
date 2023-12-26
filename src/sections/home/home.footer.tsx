import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
// styles
import '/src/styles/footer.css';
// ----------------------------------------------------------------------

const HomeFooter: React.FC = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        BayuFaturahman
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#myprojects">My Projects</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/bayu-faturahman-8906a3196/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/BayuFaturahman">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bayu Faturahman. All rightts reserved.</small>
      </div>
    </footer>
  );
};

export default HomeFooter;
