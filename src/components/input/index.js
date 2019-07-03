import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledMainWrapper = styled.div`
    display: flex;
    flex-direction: ${props => (props.row ? "row" : "column")};

    & input {
        border-radius: ${props => props.rounded + "px"};
    }
`;

const Input = ({
    type,
    rounded,
    border,
    labeldisplay,
    helptext,
    labeltext,
    row
}) => {
    return (
        <StyledMainWrapper>
            <label>{labeltext}</label>
            <input
                type={type}
                rounded={rounded}
                border={border}
                row={row}
                labeldisplay={labeldisplay}
                helptext={helptext}
            />
        </StyledMainWrapper>
    );
};

Input.defaultProps = {
    type: "text",
    rounded: "0",
    border: "all",
    labeldisplay: true,
    helptext: "",
    labeltext: "",
    row: false
};

Input.propTypes = {
    type: PropTypes.string,
    rounded: PropTypes.string,
    border: PropTypes.string,
    labeldisplay: PropTypes.bool,
    helptext: PropTypes.string,
    labeltext: PropTypes.string,
    row: PropTypes.bool
};

export default Input;
