import { useState } from "react";
import { createContext } from "react";

export const TicketContext = createContext()

export function TicketProvider({children}){
    const [ticket, setTicket] = useState({session: {}, reservation: {}, seat: null})
    return(        
        <TicketContext.Provider value={{ticket, setTicket}}>
            {children}
        </TicketContext.Provider>
    )
}