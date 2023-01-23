import { Helmet } from 'react-helmet';

import { productConditions } from 'constants/product-conditions';
import { Breadcrumbs, Button, Loader } from 'components';
import { useDetailsPage } from 'controllers/pages';

import styles from './Details.module.scss';

const Details = () => {
  const { breadcrumbs, product, goBack } = useDetailsPage();
  const amount = product.price?.amount?.toFixed?.(2)?.split('.') as string[];

  return (
    <>
      <Helmet>
        <title>{`${product.title} | Mercado Libre`}</title>
      </Helmet>
      <Loader open={!product.id} variant='solid' />
      <div className={styles['Details']}>
        <div className={styles['Details__breadcrumbs']}>
          <a className={styles['Details__breadcrumbs__link']} onClick={goBack}>
            Volver a la lista
          </a>{' '}
          |
          <Breadcrumbs data={breadcrumbs} />
        </div>
        <section className={styles['Details__content']}>
          <div className={styles['Details__content__details']}>
            <img
              src={product?.picture}
              className={styles['Details__content__image']}
            />
            <div className={styles['Details__content__info']}>
              <p className={styles['Details__content__info__condition']}>
                {productConditions[
                  product.condition as keyof typeof productConditions
                ] ?? null}
              </p>
              <h1 className={styles['Details__content__title']}>
                {product.title}
              </h1>
              <h3>
                {product.price?.currency}{' '}
                {product.price?.amount &&
                  new Intl.NumberFormat('de-DE').format(Number(amount?.[0]))}
                <sup>{amount?.[1]}</sup>
              </h3>
              <Button className={styles['Details__content__info__button']}>
                Comprar
              </Button>
            </div>
          </div>
          <div className={styles['Details__description']}>
            <h5 className={styles['Details__description__title']}>
              Descripción del producto
            </h5>
            <p>{product.description}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Details;
