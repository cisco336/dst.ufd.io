import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    grid-area: lmenu;
    border: 3px dashed pink;
`;

const leftMenu = (props) => {
    return <StyledContainer>leftMenu</StyledContainer>;
};

export default leftMenu;