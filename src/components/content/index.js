import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    grid-area: content;
    border: 3px dashed red;
`;

const Content = (props) => {
    return <StyledContainer>Content</StyledContainer>;
};

export default Content;