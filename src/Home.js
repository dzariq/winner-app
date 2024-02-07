// WinnerDisplay.js

import React, { useState, useEffect } from 'react';

const WinnerDisplay = () => {
  const [winner, setWinner] = useState('');

  useEffect(() => {
    // Fetch winner's name from server API
    fetchWinner();
  }, []);

  const fetchWinner = async () => {
    try {
      const response = await fetch('https://fantasyligasuper.com/api/v1/winner');
      const data = await response.json();
      setWinner(data.winner);
    } catch (error) {
      console.error('Error fetching winner:', error);
    }
  };

  return (
    <div>
      <h4>Winner:</h4>
      <p>{winner}</p>
    </div>
  );
};

export default WinnerDisplay;
