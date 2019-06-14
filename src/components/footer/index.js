import React from 'react';
import styled from 'styled-components';
import { links, data } from './mockData';
import logo from '../../assets/img/cebolla_70_45.jpg';

const StyledContainer = styled.div`
    margin-top: 2rem;
    max-width: 800px;
    grid-area: footer;
    display: grid;
    grid-template-columns: min-content 1fr;
    justify-self: center;
    grid-column-gap: 2rem;
    & img {
        align-self: center;
    }
`;

const StyledDiv = styled.div`
    display: grid;
    grid-template-rows: min-content min-content;
`;

const StyledLinks = styled.div`
    display: flex;
    flex-flow: row wrap;
    & span {
        padding: 0 10px;
        & a {
            text-decoration: none;
            color: ${props => props.theme.colors.linkColor};
        }
    }
    & span:not(:last-child) {
        border-right: 2px solid ${props => props.theme.colors.black};
    }
    & span:first-child {
        padding-left: 0;
    }
    & span:last-child {
        padding-right: 0;
    }
    & + div {
        & p {
            margin: 0;
        }
        & p:last-child a {
            margin-left: 5px;
        }
    }
`;

const footer = (props) => {
    return (
        <StyledContainer>
            <img src={logo} />
            <StyledDiv>
                <StyledLinks>
                    {links.map((link) => 
                        <span><a href={link.link}>{link.text}</a></span>
                    )}
                </StyledLinks>
                <div>
                    <p>{data[0].sartenejas}</p>
                    <p>{data[0].camuri}</p>
                    <p>{data[0].diseño}<a href={`mailto:${data[0].mail}`}>{data[0].mail}</a></p>
                </div>
            </StyledDiv>
        </StyledContainer>
    );
};

export default footer;