import { Movie } from '@prisma/client';
import Head from 'next/head'
import { useRouter } from "next/router"
import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";
import MoviesGrid from "../../components/moviesGrid"

interface IProps {
	movies: Movie[];
	page: number;
	pages: number;
	error: boolean;
}

const Movies = ({ movies, page, pages, error }: IProps) => {
	const router = useRouter();

	return (
		<div className="container mx-auto px-5 py-4">
			<Head>
				<title>OMDb movies | Page {page}/{pages}</title>
				<meta name="description" content="OMDb movies demo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{error && <div className='w-full'>
				<p className='w-full text-red-700'>{error}</p>
				<button onClick={() => { router.reload() }}>Aceptar</button>
			</div>}

			{!error && movies && <MoviesGrid movies={movies} page={page} pages={pages} />}
		</div >
	)
}

export default Movies

export const getServerSideProps: GetServerSideProps = async (context) => {
	const prisma = new PrismaClient();
	const { page } = context.query;
	try {
		const movies = await prisma.movie.findMany({
			skip: (parseInt(page as string) - 1) * 16,
			take: 16,
		});
		const moviesCount = await prisma.movie.count();
		return { props: { movies, page: parseInt(page as string), pages: Math.ceil(moviesCount / 16), error: false } }
	} catch (error) {
		return { props: { error: true, movies: [], pages: 0, page: 0 } }
	}
}
