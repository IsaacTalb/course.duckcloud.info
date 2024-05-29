// src/components/HtmlLesson.jsx
import React from 'react';
import Lesson from './Lesson';
import '../styles/htmlLesson.css';

const HtmlLesson = () => {
  const content = (
    <div>
      <p>HTML stands for HyperText Markup Language. It is the standard language for creating web pages.</p>
      <pre>
        {`
<!DOCTYPE html>
<html>
<head>
  <title>HTML Lesson</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>
        `}
      </pre>
    </div>
  );

  return <Lesson title="HTML Lesson" content={content} />;
};

export default HtmlLesson;
