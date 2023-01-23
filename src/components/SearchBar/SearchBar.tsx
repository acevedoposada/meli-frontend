import clsx from 'clsx';

import { useSearchBar } from 'controllers/components';
import meliLogo from 'assets/meli-logo.png';
import { InputSearch } from 'components';
import { FC } from 'models/common';

import { SearchBarProps } from './SearchBar.interface';
import styles from './SearchBar.module.scss';

const SearchBar: FC<SearchBarProps> = ({ fixed }) => {
  const { values, handleSubmit, handleBlur, handleChange } = useSearchBar();

  return (
    <div
      className={clsx(styles['SearchBar'], {
        [styles['SearchBar--fixed']]: fixed,
      })}
    >
      <div className={styles['SearchBar__elements']}>
        <img src={meliLogo} alt='Meli logo' width={48} />
        <form
          onSubmit={handleSubmit}
          className={styles['SearchBar__elements__form']}
        >
          <InputSearch
            name='search'
            buttonProps={{ type: 'submit' }}
            value={values.search}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
