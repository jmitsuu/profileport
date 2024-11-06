import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';
import App from '../App';

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
  },
]);
export default route;
