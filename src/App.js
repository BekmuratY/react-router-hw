// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Обратите внимание на использование Routes здесь
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
        </nav>

        <Routes> {/* Оберните маршруты в компонент Routes */}
          <Route path="/" element={<ProductList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes> {/* Обратите внимание на использование Routes здесь */}
      </div>
    </Router>
  );
};

export default App;
