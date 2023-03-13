import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Blog from './pages/BlogPage/Blog';
import Landing from './pages/LandingPage/Landing';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path ='/' element={<App/>}/>
      <Route path ='/about' element={<About/>}/>
      <Route path ='/blog' element={<Blog/>}/>
      <Route path ='/landing' element={<Landing/>}/>

    </Routes>

  </Router>
);



