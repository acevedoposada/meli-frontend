import { FcApproval } from 'react-icons/fc';

import { FC } from 'models/common';

import styles from './ProductCard.module.scss';
import { ProductCardProps } from './ProductCard.interface';
import { Link } from 'react-router-dom';

const ProductCard: FC<ProductCardProps> = ({
  title,
  price,
  picture,
  free_shipping,
  seller,
  link,
  path,
  linkState,
}) => {
  const content = (
    <>
      <img
        src={picture}
        width={160}
        height={160}
        className={styles['ProductCard__image']}
      />
      <div className={styles['ProductCard__details']}>
        <p className={styles['ProductCard__details__price']}>
          {price.currency} {new Intl.NumberFormat('de-DE').format(price.amount)}
          {free_shipping && <FcApproval />}
        </p>
        <p className={styles['ProductCard__details__title']}>{title}</p>
      </div>
      <div className={styles['ProductCard__seller']}>
        <p>{seller}</p>
      </div>
    </>
  );

  if (link)
    return (
      <Link
        className={styles['ProductCard']}
        to={path as string}
        state={linkState}
      >
        {content}
      </Link>
    );

  return <div className={styles['ProductCard']}>{content}</div>;
};

export default ProductCard;
