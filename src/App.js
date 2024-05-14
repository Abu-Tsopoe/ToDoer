// App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Routing from './Routing';
import AppTheme from './AppTheme';

const App = () => {
  return (
    <AppTheme>
      <Header />
      <Routing />
      <Footer />
    </AppTheme>
  );
};

export default App;
