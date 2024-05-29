// src/components/CssLesson.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Lesson from './Lesson';
import '../styles/cssLesson.css';

const CssLesson = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/css-lesson')
      .then(response => {
        setContent(response.data.content);
      })
      .catch(error => {
        console.error('There was an error fetching the CSS lesson!', error);
      });
  }, []);

  return <Lesson title="CSS Lesson" content={<div dangerouslySetInnerHTML={{ __html: content }} />} />;
};

export default CssLesson;
