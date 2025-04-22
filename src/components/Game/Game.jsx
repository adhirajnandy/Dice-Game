import React, { useState } from 'react';
import ListButton from '../Button/ListButton';
import styles from './Game.module.css';
import Image from '../Image/Image';

const Game = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState
  (null); 
  const [diceValue, setDiceValue] = useState(1);
  const [score, setScore] = useState(0);

  const showRulesHandler = () => {
    setIsVisible(!isVisible);
  };

  const handleNumberClick = (value) => {
    setSelectedNumber(value); // Update the selected number
    console.log(value);
  };

  const rollDice = () => {
    const value = Math.floor(Math.random()*6)+1;
    setDiceValue(value)

    if (selectedNumber === null){
      alert('Please Select a Number first');
      return ;
    }

    if (value === selectedNumber){
      setScore(prev => prev + value)
    }else{
      setScore(prev => {
        const newScore = prev - 2;
        return newScore < 0 ? 0 : newScore;
      });

    }

  };

  const resetScoreHandler = () => {
    setScore(0);
  }


  return (
    <div style={{ height: '100vh' }}>
      <div className={`${styles.container}`}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'center', fontSize: '72px' }}>
            {score}
          </div>
          <div style={{ fontSize: '24px', fontWeight: '500' }}>Total Score</div>
        </div>
        <div className={`${styles.selectContainer}`}>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '24px', minWidth: '552px' }}>
            {[1, 2, 3, 4, 5, 6].map((number) => (
              <li key={number}>
                <ListButton
                  text={number}
                  isSelected={selectedNumber === number} // Check if this button is selected
                  onClick={() => handleNumberClick(number)} // Pass the number to handleNumberClick
                />
              </li>
            ))}
          </ul>
          <div className={`${styles.selectText}`}>Select Number</div>
        </div>
      </div>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '250px',
            height: '449px',
            gap: '36px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            {/* <img src="/images/dice_1.png" alt="" /> */}
            <button 
              style={
                {
                  backgroundColor : 'white',
                  border: 'none',
                  cursor: 'pointer'
                }
              }
              onClick={rollDice}
            >
              <Image number={diceValue}/>
            </button>
            <div style={{ fontSize: '24px', fontWeight: '500' }}>Click on Dice to roll</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <button
              style={{
                padding: '10px 18px',
                backgroundColor: 'white',
                border: '3px solid #000',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
              }} 
              onClick={resetScoreHandler}
            >
              Reset Score
            </button>
            <button
              style={{
                padding: '10px 18px',
                backgroundColor: 'black',
                color: 'white',
                border: '3px solid #000',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
              }}
              onClick={showRulesHandler}
            >
              {isVisible ? 'Hide Rules' : 'Show Rules'}
            </button>
          </div>
          {isVisible && (
            <div
              style={{
                width: '794px',
                height: '208px',
                backgroundColor: '#FBF1F1',
                border: '2px solid #000',
                borderRadius: '8px',
                padding: '16px',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '1.5',
              }}
            >
              <h3 style={{ marginTop: 0 }}>How to Play the Dice Game</h3>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Select any number</li>
                <li>Click on the Dice image</li>
                <li>If the selected number matches the dice roll, you score the same number of points</li>
                <li>If your guess is wrong, 2 points will be deducted</li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Game;
