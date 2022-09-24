import { House, Ticket, User } from 'phosphor-react'
import './NavMenu.css'
export function NavMenu(){
    return(
        <nav className="navMenu">
            <a href="#"><House size={20}/></a>
            <a href="#"><Ticket size={20}/></a>
            <a href="#"><User size={20}/></a>
        </nav>
    )
}