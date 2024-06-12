import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HtmlLesson from './components/HtmlLesson';
import CssLesson from './components/CssLesson';
import JsLesson from './components/JsLesson';
import './styles/lesson.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/html">HTML</Link></li>
            <li><Link to="/css">CSS</Link></li>
            <li><Link to="/js">JavaScript</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/html" element={<HtmlLesson />} />
          <Route path="/css" element={<CssLesson />} />
          <Route path="/js" element={<JsLesson />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
