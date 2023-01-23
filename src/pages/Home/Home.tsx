import Lottie from 'react-lottie-player';

import searchingAnimation from 'assets/animations/searching.json';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles['Home']}>
      <Lottie
        loop
        animationData={searchingAnimation}
        play
        className={styles['Home__animation']}
      />
      <p className={styles['Home__subtitle']}>¿Qué buscas hoy?</p>
    </div>
  );
};

export default Home;
