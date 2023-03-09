import { useRoutes } from 'react-router';
import { AuthTabs, ForgotPassword } from '@pages/auth';
import { ROUTES } from '@constants/index';

const AppRouter = () => {
  const elements = useRoutes([
    { path: ROUTES.LOGIN, element: <AuthTabs /> },
    { path: ROUTES.FORGOT_PASSWORD, element: <ForgotPassword /> }
  ]);
  return elements;
};
export default AppRouter;
