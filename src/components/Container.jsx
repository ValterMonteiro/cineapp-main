import styled from 'styled-components'

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    padding: 50px 25px 0 25px;
    overflow-y: hidden;
    background: linear-gradient(180deg, #17151F 0%, #1C172B 100%);
`

export function Container({ children }) {
    return (
        <Div>
            {children}
        </Div>
    )
}