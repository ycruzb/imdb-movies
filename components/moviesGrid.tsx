import { Movie } from "@prisma/client"
import MovieItem from "../components/movieItem"
import MoviesGridPagination from "../components/moviesGridPagination"

interface IProps {
	movies: Movie[];
	page: number;
	pages: number;
}

const MoviesGrid = ({ movies, page, pages }: IProps) => {
	return <>
		<div className='w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8'>
			{movies.length > 0 && movies.map((movie: Movie) => <MovieItem key={movie.id} Title={movie.Title} Poster={movie.Poster} Type={movie.Type} Year={movie.Year} id={movie.id} imdbID={movie.imdbID} />)}
		</div>

		{movies.length === 0 && <div className='w-full text-center'>No product found!</div>}

		<MoviesGridPagination page={page} pages={pages} />
	</>
}

export default MoviesGrid