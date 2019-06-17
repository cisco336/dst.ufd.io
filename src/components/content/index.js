import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';
import styled from 'styled-components';

import Inicio from '../../screens/inicio';
import Direccion from '../../screens/direccion';
import EstructuraOrg from '../../screens/estrcOrg';
import Personal from '../../screens/personal';
import Servicios from '../../screens/servicios';

const StyledContainer = styled.div`
    grid-area: content;
    border: 3px dashed red;
`;

const Content = (props) => {
    return (
        <StyledContainer>
            <Router>
                <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route path="/direccion" component={Direccion} />
                    <Route path="/estructura" component={EstructuraOrg} />
                    <Route path="/personal" component={Personal} />
                    <Route path="/servicios" component={Servicios} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </StyledContainer>
    );
};

export default Content;