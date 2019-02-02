/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';
import H1 from '../../components/H1';
import Main from '../../components/Main';

export default function App() {
  return (
    <Main>
      <Helmet
        titleTemplate="%s - Image Watermark"
        defaultTitle="Image Watermark"
      >
        <meta name="description" content="Image Watermark application" />
      </Helmet>
      <H1>Image Watermark</H1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Main>
  );
}
