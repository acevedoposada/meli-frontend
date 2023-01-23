import Lottie from 'react-lottie-player';
import Helmet from 'react-helmet';

import { Breadcrumbs, Loader, ProductCard } from 'components';
import { useListPage } from 'controllers/pages';

import notFoundAnimation from 'assets/animations/not-found.json';

import styles from './List.module.scss';

const List = () => {
  const { search, items, breadcrumbs, loading } = useListPage();

  return (
    <>
      <Helmet>
        <title>Resultados de la búsqueda: {search} | Mercado Libre</title>
      </Helmet>
      <Loader open={loading} />
      <div className={styles['List']}>
        <div className={styles['List__breadcrumbs']}>
          {breadcrumbs.map((bread, idx) => (
            <Breadcrumbs key={idx} data={bread} />
          ))}
        </div>

        {items.length === 0 && (
          <div className={styles['List__not-found']}>
            <Lottie
              className={styles['List__not-found__animation']}
              animationData={notFoundAnimation}
              play
              loop
            />
            <h2>Ups...</h2>
            <h3>
              No se han encontrado resultados. Busca por otra palabra clave.
            </h3>
          </div>
        )}

        <section className={styles['List__items']}>
          {items.map(({ item, author }: any) => (
            <ProductCard key={item.id} {...item} seller={author.name} />
          ))}
        </section>
      </div>
    </>
  );
};

export default List;
