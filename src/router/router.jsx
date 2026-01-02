import { createBrowserRouter } from 'react-router';
import Layout from '../components/layout/layout.jsx';
import NotFound from '../components/pages/NotFoundPage.jsx';
import HomePage from '../components/pages/HomePage.jsx';
import DestinationPage from '../components/pages/DestinationPage.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'destination/:id', element: <DestinationPage /> },
    ],
  },
]);

export default routes;
