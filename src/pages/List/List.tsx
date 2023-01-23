import Helmet from 'react-helmet';

import { Breadcrumbs, ProductCard } from 'components';
import { useListPage } from 'controllers/pages';

import styles from './List.module.scss';

const List = () => {
  const { search, items, breadcrumbs } = useListPage();

  return (
    <>
      <Helmet>
        <title>Resultados de la búsqueda: {search} | Mercado Libre</title>
      </Helmet>
      <div className={styles['List']}>
        <div className={styles['List__breadcrumbs']}>
          {breadcrumbs.map((bread, idx) => (
            <Breadcrumbs key={idx} data={bread} />
          ))}
        </div>

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
