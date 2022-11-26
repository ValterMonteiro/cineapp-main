import styled from 'styled-components'

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`
export const BgContainer = styled.div`
    width: 100%;
    height: 200px;
    background-image:url(${({image})=>image}) ;
    background-size: cover;
`
export const Title = styled.h1`
    color:white;
    margin-top:16px;
    font-size: 22;
`
export const Synopsis = styled.p`
    color:white;
    text-align: justify;
`

export const SessionList = styled.section`
    display: flex;
    justify-content: center;
    gap: 8px;
`