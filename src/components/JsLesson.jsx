// src/components/JsLesson.jsx
import React from 'react';
import Lesson from './Lesson';
import '../styles/jsLesson.css';

const JsLesson = () => {
  const content = (
    <div>
      <p>JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites.</p>
      <pre>
        {`
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('h1').textContent = 'Hello, JavaScript!';
});
        `}
      </pre>
    </div>
  );

  return <Lesson title="JavaScript Lesson" content={content} />;
};

export default JsLesson;
