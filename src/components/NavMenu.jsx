import { House, Ticket, User } from 'phosphor-react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Nav = styled.nav`
    width: 100vw;
    height: 70px;
    background: #ECEDEE;
    box-shadow: 0px -4px 6px rgba(206, 0, 83, 0.31);
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
`

export function NavMenu() {

    return (
        <Nav>
            <Link to='/'><House size={20} /></Link>
            <a href="#"><Ticket size={20} /></a>
            <a href="#"><User size={20}  /></a>
        </Nav>
    )
}