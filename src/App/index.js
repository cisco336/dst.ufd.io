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
import Settings from '../screens/settings';
import Inicio from '../screens/inicio';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/:screen?" component={Home} />
        <Route path="/settings/:set?" component={Settings} />
        <Redirect to="/" component={Inicio}/>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
