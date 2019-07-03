import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

import styled from "styled-components";
import Header from "../../components/header";
import LeftMenu from "../../components/lmenu";
import RightMenu from "../../components/rmenu";
import Footer from "../../components/footer";

import Inicio from "../../screens/inicio";
import Direccion from "../../screens/direccion";
import EstructuraOrg from "../../screens/estrcOrg";
import Personal from "../../screens/personal";
import Servicios from "../../screens/servicios";

const StyledMainWrapper = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-areas:
        "header header header"
        "lmenu content rmenu"
        "footer footer footer";
    grid-template-columns: min-content auto min-content;
`;
const StyledContainer = styled.div`
    grid-area: content;
`;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <StyledMainWrapper>
                <Router>
                    <Header />
                    <RightMenu />
                    <StyledContainer>
                        <Switch>
                            <Route exact path="/" component={Inicio} />
                            <Route path="/direccion" component={Direccion} />
                            <Route
                                path="/estructura"
                                component={EstructuraOrg}
                            />
                            <Route path="/personal" component={Personal} />
                            <Route path="/servicios" component={Servicios} />
                            <Redirect to="/" />
                        </Switch>
                    </StyledContainer>
                    <LeftMenu />
                    <Footer />
                </Router>
            </StyledMainWrapper>
        );
    }
}

export default Home;
