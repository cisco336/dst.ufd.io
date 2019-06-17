import React from 'react';
import styled from 'styled-components';
import aporte from '../../assets/img/aporte.png';
import secretaria from '../../assets/img/secretaria.png';
import sas from '../../assets/img/sas.png';
import activar from '../../assets/img/activar.png';
import actualizar from '../../assets/img/actualizar.png';
import migrar from '../../assets/img/migrar.png';
import correo from '../../assets/img/correo.png';

const StyledContainer = styled.div`
    grid-area: 3menu;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
`;
const RightMenu = (props) => {
    return (
        <StyledContainer>
            <img src={aporte}/>
            <img src={secretaria}/>
            <img src={sas}/>
            <img src={activar}/>
            <img src={actualizar}/>
            <img src={migrar}/>
            <img src={correo}/>
        </StyledContainer>
    );
};

export default RightMenu;