import { useState } from 'react';

const Dice = () => {
  const diceImages = [
    '/dice-empty.png',
    '/dice1.png',
    '/dice2.png',
    '/dice3.png',
    '/dice4.png',
    '/dice5.png',
    '/dice6.png',

  ];

  function getRandomDice() {
    const index = Math.floor(Math.random() * diceImages.length);
    return diceImages[index];
  }

  const [currentDice, setCurrentDice] = useState(getRandomDice());

  const handleClick = () => {
    setCurrentDice('../assets/dice-empty.png');
    setTimeout(() => {
      setCurrentDice(getRandomDice());
    }, 1000);
  };

  return (
    <img
      src={currentDice}
      alt="dice"
      onClick={handleClick}
      style={{ width: '100px', cursor: 'pointer' }}
    />
  );
};

export default Dice;
