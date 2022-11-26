

import {Button} from "./styled";

export function ActionButton({children, action}){
    return(
        <>
        <Button onClick={action}>{children}</Button>
        </>
    )
}