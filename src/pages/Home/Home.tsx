// Libraries
import Lottie from 'react-lottie-player';

// Assets
import searchingAnimation from 'assets/animations/searching.json';

// Components
import { InputSearch } from 'components';

// Controllers
import { useSearchBar } from 'controllers/components';

// Component files
import styles from './Home.module.scss';

const Home = () => {
  const { values, handleSubmit, handleBlur, handleChange } = useSearchBar();

  return (
    <div className={styles['Home']}>
      <Lottie
        loop
        animationData={searchingAnimation}
        play
        className={styles['Home__animation']}
      />
      <p className={styles['Home__subtitle']}>¿Qué buscas hoy?</p>
      <form
        className={styles['Home__search_container']}
        onSubmit={handleSubmit}
      >
        <InputSearch
          name='search'
          value={values.search ?? ''}
          onChange={handleChange}
          onBlur={handleBlur}
          buttonProps={{ type: 'submit' }}
        />
      </form>
    </div>
  );
};

export default Home;
