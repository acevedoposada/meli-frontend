import { Outlet } from 'react-router-dom';

import { SearchBar } from 'components';

import styles from './SimpleLayout.module.scss';

const SimpleLayout = () => {
  return (
    <main className={styles['SimpleLayout']}>
      <SearchBar fixed />
      <div className={styles['SimpleLayout__spacing']} />
      <div className={styles['SimpleLayout__content']}>
        <Outlet />
      </div>
    </main>
  );
};

export default SimpleLayout;
