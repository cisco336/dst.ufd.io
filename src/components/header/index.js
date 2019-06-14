import React from 'react';
import styled from 'styled-components';
import headerGif from '../../assets/img/dst-header.gif';

const StyledContainer = styled.div`
    grid-area: header;
    justify-self: center;
    & img {
        width: 100%;
    }
`;
const StyledImg = styled.img`
    width: 100%;
    src: url('${headerGif}');
`;


const Header = (props) => {
    return (
        <StyledContainer>
            <img src={headerGif}/>
        </StyledContainer>
    );
};

export default Header;