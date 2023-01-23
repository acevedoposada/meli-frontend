import { Breadcrumbs } from 'components';
import { useDetailsPage } from 'controllers/pages';

const Details = () => {
  const { breadcrumbs, product } = useDetailsPage();

  return (
    <div>
      <div>
        <Breadcrumbs data={breadcrumbs} />
      </div>
      <section>
        <div>
          <img src={product?.picture} />
          <div>
            <p>{product.condition}</p>
            <h1>{product.title}</h1>
            <h3>
              {product.price?.currency}{' '}
              {product.price?.amount &&
                new Intl.NumberFormat('de-DE').format(product.price?.amount)}
            </h3>
            <button>Comprar</button>
          </div>
        </div>
        <div>
          <h5>Descripción del producto</h5>
          <p>{product.description}</p>
        </div>
      </section>
    </div>
  );
};

export default Details;
