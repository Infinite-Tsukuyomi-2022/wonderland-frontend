import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import GlobalStyle from './components/GlobalStyle';
import AutoScrollHelper from './components/AutoScrollHelper';
import ScrollToTopHelper from './components/ScrollToTopHelper';
import LanguageHelper from './components/LanguageHelper';
import Header from './components/Header';
// import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import configureStore from "./store";

const App = ({ Router = BrowserRouter }) => {

  return (
    <Provider store={configureStore}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet"></link>
      </Helmet>
      <GlobalStyle/>
      <Router>
        <>
          <ScrollToTopHelper />
          <AutoScrollHelper />
          <LanguageHelper />
          <Header />
          <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/en/" exact={true} component={HomePage} />
            <Redirect to="/" />
          </Switch>
        </>
      </Router>
    </Provider>
  );
}

export default App;
