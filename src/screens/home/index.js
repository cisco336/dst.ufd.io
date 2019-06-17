import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import LeftMenu from '../../components/lmenu';
import Content from '../../components/content';
import RightMenu from '../../components/rmenu';
import Footer from '../../components/footer';


const StyledMainWrapper = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-areas:    'header header header'
                            'lmenu content rmenu'
                            'footer footer footer';
    grid-template-columns: min-content auto min-content;
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