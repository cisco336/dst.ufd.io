import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyleCard = styled.div`
    padding: 1rem;
    background-color: #fff;
    border-radius: ${props => (props.rounded ? props.rounded : "0")};
    box-shadow: ${props =>
        props.shadow ? "0px 20px 35px -10px rgba(0, 0, 0, 0.4)" : "none"};
`;

const Card = ({shadow, rounded, children}) => {
    return <StyleCard shadow={shadow} rounded={rounded}>{children}</StyleCard>;
};

Card.defaultProps = {
    rounded: '10px',
    shadow: true,
    children: 'Card content...'
};

Card.propTypes = {
    rounded: PropTypes.string,
    shadow: PropTypes.bool,
    children: PropTypes.array
};

export default Card;
