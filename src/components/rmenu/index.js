import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    grid-area: 3menu;
    border: 3px dashed lightcoral;
`;
const RightMenu = (props) => {
    return <StyledContainer>RightMenu</StyledContainer>;
};

export default RightMenu;