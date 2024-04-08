// AboutUs.js

import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
      <h2>О нас</h2>
      <p>BeksShop</p>
      <Link to="/">Назад</Link>
    </div>
  );
};

export default AboutUs;
