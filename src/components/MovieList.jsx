
import { useEffect, useState } from 'react'
import { getMovies } from '../services/api'
import { MovieCard } from './MovieCard'
import './MovieList.css'
import { Search } from './Search'
export function MovieList(){
    const [movies, setMovies] = useState([]) //definição de estado
    
    useEffect(()=>{
        const getDataApi = async ()=>{
            setMovies(await getMovies())
        }
        getDataApi()
    },[])
    return(
        <>
            <Search/>
            <div className="MovieList">
                {movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
            </div> 
        </>
    )
}