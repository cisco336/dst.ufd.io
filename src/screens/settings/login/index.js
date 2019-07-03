import React from "react";
import styled from "styled-components";
import Card from "../../../components/card";
import Input from "../../../components/input";

const StyledMainWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    vertical-align: middle;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #e9e9e9;

    & div {
        & h2 {
            margin: 0 0 10px 0;
        }
    }
`;



const Login = props => {
    return (
        <StyledMainWrapper>
            <Card>
                <h2>Login</h2>
                <Input 
                    labeltext='Name'
                    rounded='10'
                    row={true}
                />
            </Card>
        </StyledMainWrapper>
    );
};

export default Login;
