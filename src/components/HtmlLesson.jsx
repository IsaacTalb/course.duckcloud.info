// src/components/HtmlLesson.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Lesson from './Lesson';
import '../styles/htmlLesson.css';

const HtmlLesson = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/html-lesson')
      .then(response => {
        setContent(response.data.content);
      })
      .catch(error => {
        console.error('There was an error fetching the lesson!', error);
      });
  }, []);

  return <Lesson title="HTML Lesson" content={<div dangerouslySetInnerHTML={{ __html: content }} />} />;
};

export default HtmlLesson;
