import React from 'react';
//
import HomeHeader from '../home-header';
import HomeNav from '../home-nav';
import HomeAbout from '../home-about';
import HomeExperience from '../home-experience';
import HomeMyProjects from '../home-my-project';
import HomeContact from '../home-contact';
import HomeFooter from '../home.footer';

// ----------------------------------------------------------------------

const HomeView: React.FC = () => {
  return (
    <>
      <HomeHeader />
      <HomeNav />
      <HomeAbout />
      <HomeExperience />
      <HomeMyProjects />
      <HomeContact />
      <HomeFooter />
    </>
  );
};

export default HomeView;
