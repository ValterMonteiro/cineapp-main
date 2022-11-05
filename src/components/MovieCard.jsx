import { Link } from 'react-router-dom'
import './MovieCard.css'
export function MovieCard({ movie }) {
    return (
        <Link to={`/movie-details/${movie.id}`}>
            <article className="MovieCard">
                <img src={movie.images.poster} />
            </article>
        </Link>
    )
}