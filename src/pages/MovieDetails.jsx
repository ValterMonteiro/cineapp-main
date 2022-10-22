import { useState } from "react"

export function MovieDetails(){
    const [movie, setMovie] = useState({})
    const {id} = useParams('id')
    return (
        <>
            <h1>Movie Details {id} </h1>
        </>
    )
}