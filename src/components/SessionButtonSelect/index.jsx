//import { Ticket } from "phosphor-react";
import { useContext } from "react";
import { TicketContext } from "../../context/TicketContext.jsx";
import {DateFormatPTBR} from "../../utils/index.js"
import { Label } from "./styled";

export function SessionButtonSelect({session}){
    const {ticket, setTicket} = useContext(TicketContext)
    const selectSession = ()=>{
        setTicket(
            {
                ...ticket,
                session
            }
            )
    }
    return(
        <>
            <Label>{DateFormatPTBR(session.date)}
                <input type="radio" name="session" onChange={selectSession}/>
            </Label>
        </>
    )
}