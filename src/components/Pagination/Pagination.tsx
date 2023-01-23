import { Button } from 'components';
import { FC } from 'models/common';

import styles from './Pagination.module.scss';
import { PaginationProps } from './Pagination.interface';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';

const ICON_SIZE = 12;

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onClick,
}) => {
  return (
    <div>
      {currentPage !== 1 && (
        <Button
          className={styles['Pagination__button']}
          variant='link'
          onClick={() => onClick(currentPage - 1)}
        >
          <TfiAngleLeft size={ICON_SIZE} />
          Anterior
        </Button>
      )}
      <span className={styles['Pagination__page-indicator']}>
        <span className={styles['Pagination__page-indicator__current']}>
          {currentPage}
        </span>{' '}
        de {totalPages}
      </span>
      {currentPage < totalPages && (
        <Button
          className={styles['Pagination__button']}
          variant='link'
          onClick={() => onClick(currentPage + 1)}
        >
          Siguiente
          <TfiAngleRight size={ICON_SIZE} />
        </Button>
      )}
    </div>
  );
};

export default Pagination;
