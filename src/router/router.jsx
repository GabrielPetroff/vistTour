import { createBrowserRouter } from 'react-router';
import Layout from '../components/layout/Layout.jsx';
import NotFound from '../components/pages/NotFoundPage.jsx';
import HomePage from '../components/pages/HomePage.jsx';
import AboutUsPage from '../components/pages/AboutUsPage.jsx';
import ContactPage from '../components/pages/ContactUsPage.jsx';
import DestinationsPage from '../components/pages/DestinationsPage.jsx';
import DestinationDetailsPage from '../components/pages/DestinationDetailsPage.jsx';
import DetailsPage from '../components/pages/DetailsPage.jsx';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'destinations/:id', element: <DestinationDetailsPage /> },
      { path: '/about', element: <AboutUsPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/destinations', element: <DestinationsPage /> },
      { path: '/details/:id', element: <DetailsPage /> },
    ],
  },
]);

export default routes;
