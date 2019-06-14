import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import theme from '../cssTheme';
import { ThemeProvider } from 'styled-components';
import Home from '../screens/home';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/settings/:set?" component={Settings} /> */}
        <Redirect to="/" />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
