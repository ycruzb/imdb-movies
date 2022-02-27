import { Movie } from '@prisma/client';
import Head from 'next/head'
import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";
import MoviesGrid from "../components/moviesGrid"
import { itemsByPage, errorMessage } from "../constants/constants"
import ErrorMessage from "../components/errorMessage"

interface IProps {
	movies: Movie[];
	page: number;
	pages: number;
	error: boolean | string;
}

const Home = ({ movies, page, pages, error }: IProps) => {
	return (
		<div className="container mx-auto px-5 py-4">
			<Head>
				<title>OMDb movies</title>
				<meta name="description" content="OMDb movies demo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{error && <ErrorMessage error={error} />}

			{!error && <MoviesGrid movies={movies} page={page} pages={pages} />}
		</div>
	)
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
	const prisma = new PrismaClient();

	try {
		const movies = await prisma.movie.findMany({
			skip: 0,
			take: itemsByPage,
		});
		const moviesCount = await prisma.movie.count();
		return { props: { movies, page: 1, pages: Math.ceil(moviesCount / itemsByPage), error: false } }
	} catch (error) {
		return { props: { error: errorMessage, movies: [], page: 0, pages: 0 } }
	}
}
