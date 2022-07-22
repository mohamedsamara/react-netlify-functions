import { useRoutes } from 'react-router-dom';

import NotMatch from 'pages/NotMatch';
import Home from 'pages/Home';
import Webinars from 'pages/Webinars';
import AddWebinar from 'pages/Webinars/Add';
import EditWebinar from 'pages/Webinars/Edit';

const Routes = () => {
  const element = useRoutes([
    { path: '/', element: <Home /> },
    {
      path: '/webinars',
      children: [
        {
          index: true,
          element: <Webinars />,
        },
        {
          path: 'add',
          element: <AddWebinar />,
        },
        {
          path: 'edit',
          element: <EditWebinar />,
        },
      ],
    },
    { path: '*', element: <NotMatch /> },
  ]);

  return element;
};

export default Routes;
