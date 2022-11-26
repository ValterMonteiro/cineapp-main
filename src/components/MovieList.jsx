import { useEffect, useState } from 'react'
import './MovieList.css'
import { getMovies } from '../services/api'
import { MovieCard } from './MovieCard'
import { Search } from './Search'
export function MovieList() {
    const [movies, setMovies] = useState([])
    const [search,setSearch] = useState("")
    useEffect(() => {
        const getDataApi = async () => {
            setMovies(await getMovies())
        }
        getDataApi()
    }, [])
    return (
        <>
            <Search setSearch={setSearch} />
            <div className="MovieList">
                {
                movies
                .filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase()))
                .map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </>
    )
}