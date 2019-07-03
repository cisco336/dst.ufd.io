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
            <img alt='aporte' src={aporte}/>
            <img alt='secretaria' src={secretaria}/>
            <img alt='sas' src={sas}/>
            <img alt='activar' src={activar}/>
            <img alt='actualizar' src={actualizar}/>
            <img alt='migrar' src={migrar}/>
            <img alt='correo' src={correo}/>
        </StyledContainer>
    );
};

export default RightMenu;