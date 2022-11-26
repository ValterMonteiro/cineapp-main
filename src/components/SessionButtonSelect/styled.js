import styled from "styled-components";


export const Label = styled.label`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4px;
    gap: 4px;
    width: 66px;
    height: 86px;
    background: #2C2250;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    color:white;
    text-align:center;
    input{
        appearance: none;
    }
    :has(input:checked){
        background-color: #F76190;
    }
`