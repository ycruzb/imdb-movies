import Link from "next/link"

interface IProps {
	page: number;
	pages: number;
}

const MoviesGridPagination = ({ page, pages }: IProps) => {
	return <div className='flex justify-around py-8'>
		<div>
			{page > 1 &&
				<Link href={page > 2 ? `/movies/${page - 1}` : `/`}>
					<a className=''>&larr; prev</a>
				</Link>
			}
		</div>
		<div className='text-base'>
			Page {page}/{pages}
		</div>
		<div>
			{page < pages &&
				<Link href={`/movies/${page + 1}`}>
					<a className=''>next &rarr;</a>
				</Link>
			}
		</div>
	</div>
}

export default MoviesGridPagination