// src/components/Lesson.jsx
import React from 'react';

const Lesson = ({ title, content }) => {
  return (
    <div className="lesson">
      <h2>{title}</h2>
      <div className="lesson-content">
        {content}
      </div>
    </div>
  );
};

export default Lesson;
