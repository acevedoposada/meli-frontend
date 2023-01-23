import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { api } from 'core/api';

export const useListPage = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    searchItems();
  }, [location.search]);

  const searchItems = () => {
    setLoading(true);
    const locationSearch = location.search;
    const q = new URLSearchParams(locationSearch).get('search') as string;

    if (!q) return navigate('/');

    setSearch(q);
    api(`/items?search=${q}`)
      .then(({ data }) => {
        const breads = data.categories.map((item: any) => {
          return item.path_from_root.map((el: any) => el.name);
        });

        setItems(data.items);
        setBreadcrumbs(breads);
      })
      .finally(() => setLoading(false));
  };

  return { search, items, breadcrumbs, loading };
};
