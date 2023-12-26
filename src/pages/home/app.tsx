import React from 'react';
import { Helmet } from 'react-helmet-async';
// sections
import { HomeView } from '/src/sections/home/view';

// ----------------------------------------------------------------------

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title> Bayu Faturahman</title>
      </Helmet>

      <HomeView />
    </>
  );
};

export default HomePage;
