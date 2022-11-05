import { House, Ticket, User } from 'phosphor-react'
import {Link} from 'react-router-dom'
import './NavMenu.css'
export function NavMenu() {

    return (
        <nav className="navMenu">
            <Link to='/'><House size={20} /></Link>
            <a href="#"><Ticket size={20} /></a>
            <a href="#"><User size={20}  /></a>
        </nav>
    )
}