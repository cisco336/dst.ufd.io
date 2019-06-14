import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import LeftMenu from '../../components/lmenu';
import Content from '../../components/content';
import RightMenu from '../../components/rmenu';
import Footer from '../../components/footer';
const StyledMainWrapper = styled.div`
    display: grid;
    grid-template-areas:    'header header header header'
                            'rmenu content content lmenu'
                            'footer footer footer footer';
`;

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return(
            <StyledMainWrapper>
                <Header />
                <RightMenu />
                <Content />
                <LeftMenu />
                <Footer />
            </StyledMainWrapper>
        )
    }
}

export default Home;