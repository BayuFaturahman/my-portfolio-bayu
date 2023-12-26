import React from 'react';
import { TfiWorld } from 'react-icons/tfi';
import { GiGraduateCap } from 'react-icons/gi';
import { BsBookmarkStar } from 'react-icons/bs';
// styles
import '/src/styles/about.css';

// ----------------------------------------------------------------------

const HomeAbout: React.FC = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="about__container container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="/public/assets/fisrt-foto.png" alt="Me" className="img-me-about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                Software Engneering(UIKA) <br />
                <i>University Ibnu Khaldun Bogor.</i>
              </small>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5>Current GPA</h5>
              <small>3.18</small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>Net Centric</li>
                  <li>Mobile Applications</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            I'm a <b>Software Engineering Undergradute</b> at the University of Ibnu Khaldun Bogor. I'm an enthusiastic and driven Software Engineering student seeking a challenging internship
            opportunity to apply and expand my technical skills. With a strong academic foundation in software engineering and hands-on experience in various programming languages, I am eager to
            contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
