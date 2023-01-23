import { TfiSearch } from 'react-icons/tfi';

import { FC } from 'models/common';

import { InputSearchProps } from './InputSearch.interface';
import styles from './InputSearch.module.scss';

const InputSearch: FC<InputSearchProps> = ({ buttonProps, ...inputProps }) => {
  return (
    <div className={styles['InputSearch']}>
      <input
        className={styles['InputSearch__input']}
        placeholder='Busca productos, marcas y más...'
        {...(inputProps as any)}
      />
      <button
        className={styles['InputSearch__button']}
        {...(buttonProps as any)}
      >
        <TfiSearch size={16} />
      </button>
    </div>
  );
};

export default InputSearch;
