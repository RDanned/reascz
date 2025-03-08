import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { ConfigProvider } from 'antd';

const router = createRouter({ routeTree });

const App = () => (
  <ConfigProvider>
    <RouterProvider router={router} />
  </ConfigProvider>
);

export default App;
