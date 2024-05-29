// src/components/CssLesson.jsx
import React from 'react';
import Lesson from './Lesson';
import '../styles/cssLesson.css';

const CssLesson = () => {
  const content = (
    <div>
      <p>CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen.</p>
      <pre>
        {`
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}
        `}
      </pre>
    </div>
  );

  return <Lesson title="CSS Lesson" content={content} />;
};

export default CssLesson;
