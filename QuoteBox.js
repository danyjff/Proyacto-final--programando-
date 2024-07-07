// src/components/QuoteBox.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteBox() {
  const [quote, setQuote] = useState({ text: '', author: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/quotes/')
      .then(response => {
        if (response.data.length > 0) {
          const randomIndex = Math.floor(Math.random() * response.data.length);
          setQuote(response.data[randomIndex]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="quote-box">
      <p id="quote">{quote.text}</p>
      <p id="author">{quote.author}</p>
    </div>
  );
}

export default QuoteBox;

