import { Navigate, useRoutes } from 'react-router-dom';

import { SimpleLayout } from 'layouts';
import { HomePage, ListPage } from 'pages';

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <SimpleLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
          index: true,
        },
        {
          path: '/items',
          element: <ListPage />,
        },
      ],
    },
  ]);
  return routes;
};

export default Router;
