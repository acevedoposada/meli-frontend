import { FcApproval } from 'react-icons/fc'

import { FC } from 'models/common';

import styles from './ProductCard.module.scss';
import { ProductCardProps } from './ProductCard.interface';

const ProductCard: FC<ProductCardProps & { seller?: string }> = ({
  title,
  price,
  condition,
  picture,
  free_shipping,
  seller
}) => {
  return (
    <div className={styles['ProductCard']}>
      <img
        src={picture}
        width={160}
        height={160}
        className={styles['ProductCard__image']}
      />
      <div className={styles['ProductCard__details']}>
        <p className={styles['ProductCard__details__price']}>
          {price.currency} {price.amount.toLocaleString('es')}
          {free_shipping && <FcApproval />}
        </p>
        <p className={styles['ProductCard__details__title']}>{title}</p>
      </div>
      <div className={styles['ProductCard__seller']}>
        <p>{seller}</p>
      </div>
    </div>
  );
};

export default ProductCard;
