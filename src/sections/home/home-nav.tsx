import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { GoChecklist } from 'react-icons/go';
import { FaLaptopCode } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
// styles
import '/src/styles/nav.css';

// ----------------------------------------------------------------------

const HomeNav: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>('#');

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <BiUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <FaLaptopCode />
      </a>
      <a href="#myprojects" onClick={() => setActiveNav('#myprojects')} className={activeNav === '#myprojects' ? 'active' : ''}>
        <GoChecklist />
      </a>
      <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default HomeNav;
