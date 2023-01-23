import { FC } from 'models/common';
import { TfiAngleRight } from 'react-icons/tfi';

import { BreadcrumbsProps } from './Breadcrumbs.interface';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs: FC<BreadcrumbsProps> = ({ data, separator }) => {
  return (
    <div className={styles['Breadcrumbs']}>
      {data.map((bread, idx) => (
        <>
          <p key={idx}>{bread}</p>
          {idx !== data.length - 1 && (separator ?? <TfiAngleRight key={bread} size={9} />)}
        </>
      ))}
    </div>
  );
};

export default Breadcrumbs;
