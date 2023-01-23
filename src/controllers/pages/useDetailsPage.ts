import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Product } from 'models/product';
import { api } from 'core/api';

export const useDetailsPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [product, setProduct] = useState<Partial<Product>>({});

  useEffect(() => {
    // Get product data
    api(`/items/${id}`).then(({ data }) => {
      setBreadcrumbs(
        data.category.path_from_root.map((item: { name: string }) => item.name)
      );
      setProduct(data.item);
    });
  }, []);

  const goBack = () => navigate(-1);

  return { breadcrumbs, product, goBack };
};
