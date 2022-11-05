import styled from "styled-components"

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #17151F 0%, #1C172B 100%);
    position: relative;
    padding: 50px 25px 0 25px;
`


export function Container({children}){
    return(
        <Div className="container">
            {children}
        </Div>
    )
}