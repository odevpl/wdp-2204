import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import Login from './components/features/Login/Login';
import Blog from './components/views/Blog/Blog';

const App = () => {
  const [appMode, setAppMode] = useState('');
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout setAppMode={setAppMode} appMode={appMode}>
          <Switch>
            <Route exact path={'/'} render={() => <Homepage appMode={appMode} />} />
            <Route exact path={'/shop/:categoryId'} component={ProductList} />
            <Route exact path={'/product/:productId'} component={ProductPage} />
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/blog'} component={Blog} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
