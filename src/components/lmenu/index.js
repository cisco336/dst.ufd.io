import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { navItems } from './mockData';

const StyledContainer = styled.div`
    grid-area: lmenu;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    & a {
        padding: 5px 0;
        font-size: 80%;
        font-weight: bold;
        text-align: right;
        text-decoration: none;
        color: ${props => props.theme.colors.linkColor};
        transition: all .2s ease-out;
        &:hover {
            color: darken(${props => props.theme.colors.linkColor}, 50%);
        }
    }
`;

const leftMenu = (props) => {
    return (
        <StyledContainer>
            {navItems.map((item) => 
                <Link to={item.link}>{item.text}</Link>
            )}
        </StyledContainer>
    );
};

export default leftMenu;