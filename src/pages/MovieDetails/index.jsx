import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ActionButton } from "../../components/ActionButton"
import { Loader } from "../../components/Loader"
import { SessionButtonSelect } from "../../components/SessionButtonSelect"
import { Label } from "../../components/SessionButtonSelect/styled"
import { getMovieInfo } from "../../services/api"
import {Div, Title, Synopsis, BgContainer, SessionList} from "./styled"

export function MovieDetails() {
    const [movie, setMovie] = useState(null)
    const { id } = useParams('id')
    const navigate = useNavigate()

    const handleClik = ()=>{
        navigate('/reservation')
    }

    useEffect(() => {
        const getApiData = async () => {
            setMovie(await getMovieInfo(id))
        }
        getApiData()
    }, [])
    return (
        <>
            <Div>
                {movie?.title ? (
                   <>
                     <BgContainer image={movie.images.background}/>  
                     <Title>{movie.title}</Title>
                     <Synopsis>
                        {movie.synopsis}
                     </Synopsis>
                     <h2>Sessões Disponíveis</h2>
                     <SessionList>
                        {
                            movie.sessions.map((session)=> <SessionButtonSelect key={session.id} session={session}/>)
                        }
                     </SessionList>
                     <ActionButton action={handleClik}>Continuar</ActionButton>

                   </> 
                ) :( 
                    <Loader/>
                )}
            </Div>
        </>
    )
}