import {useEffect} from 'react';
import {useRoutes} from 'hookrouter';
import routes from './router';
import './App.css';

function App() {
  firebase.analytics().logEvent('Test Firebase Analytics!'); // eslint-disable-line no-undef
  const routeResult = useRoutes(routes);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return routeResult;
}

export default App;