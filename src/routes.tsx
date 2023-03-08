import { useRoutes } from 'react-router';
import { AuthTabs } from '@pages/auth';
import { ROUTES } from '@constants/index';

const AppRouter = () => {
  const elements = useRoutes([{ path: ROUTES.LOGIN, element: <AuthTabs /> }]);
  return elements;
};
export default AppRouter;
