import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { api } from 'core/api';

const INITIAL_PAGINATION = {
  currentPage: 1,
  totalPages: 1,
};

export const useListPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [pagination, setPagination] = useState(INITIAL_PAGINATION);

  const q = new URLSearchParams(location.search).get('search') as string;

  useEffect(() => {
    if (search !== q) setPagination(INITIAL_PAGINATION);
    searchItems();
  }, [location.search, pagination.currentPage]);

  // Use the api to get items
  const searchItems = () => {
    setLoading(true);

    if (!q) return navigate('/');

    setSearch(q);
    api(`/items?search=${q}&page=${pagination.currentPage}`)
      .then(({ data }) => {
        const breads = data.categories.map((item: any) => {
          return item.path_from_root.map((el: any) => el.name);
        });

        setItems(data.items);
        setBreadcrumbs(breads);
        setPagination((prev) => ({
          ...prev,
          totalPages: Math.ceil(data.pagination.total / 50),
        }));
        window.scroll({
          top: 0,
        });
      })
      .finally(() => setLoading(false));
  };

  const handlePagination = (page: number) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
  };

  return { search, items, breadcrumbs, loading, pagination, handlePagination };
};
