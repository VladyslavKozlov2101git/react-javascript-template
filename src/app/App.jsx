import '../assets/styles/main.scss';
import { ErrorBoundary } from '../shared';
import AppRoutes from '../routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './store';
import 'react-loading-skeleton/dist/skeleton.css';

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ErrorBoundary>
  );
};
export default App;
