import { createBrowserRouter } from 'react-router';
import Layout from '../components/layout/Layout.jsx';
import NotFound from '../components/pages/NotFoundPage.jsx';
import HomePage from '../components/pages/HomePage.jsx';
import DestinationPage from '../components/pages/DestinationPage.jsx';
import AboutUsPage from '../components/pages/AboutUsPage.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'destination/:id', element: <DestinationPage /> },
      { path: '/about', element: <AboutUsPage /> },
    ],
  },
]);

export default routes;
