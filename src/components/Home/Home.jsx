import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handlePlayNow = () => {
    navigate('/game');
  };

  return (
    <div className={`${styles.homeWrapper}`}>
      <div className={styles.container}>
      <div className={styles.image_container}>
        <img src="/images/dices 1.png" alt="dices_image" />
      </div>
      <div className={styles.text_container}>
        <div>
          <div className={styles.topText}>DICE GAME</div>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <button className={styles.play_button} onClick={handlePlayNow}>
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
