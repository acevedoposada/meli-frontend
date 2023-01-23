import { useRoutes } from 'react-router-dom';

import { HomePage, ListPage, DetailsPage } from 'pages';
import { SimpleLayout } from 'layouts';

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <SimpleLayout />,
      children: [
        {
          element: <HomePage />,
          index: true,
        },
      ],
    },
    {
      path: '/items',
      element: <SimpleLayout />,
      children: [
        {
          element: <ListPage />,
          index: true,
        },
        {
          path: ':id',
          element: <DetailsPage />,
        },
      ],
    },
  ]);
  return routes;
};

export default Router;
