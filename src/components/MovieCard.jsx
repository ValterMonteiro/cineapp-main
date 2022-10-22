import './MovieCard.css'
import { link } from 'react-router-dom'
export function MovieCard({ movie }) {
    return (
        <link to={`/movie-details/${movie.id}`}>
            <article className="MovieCard">
                <img src={movie.images.poster} alt="" />
            </article>
        </link>
    )
}