import Link from "next/link"

interface IProps {
	page: number;
	pages: number;
}

const MoviesGridPagination = ({ page, pages }: IProps) => {
	return <div className='flex justify-around pt-8 pb-0'>
		<div className="w-1/3 text-center">
			{page > 1 &&
				<Link href={page > 2 ? `/movies/${page - 1}` : `/`}>
					<a className=''>&larr; prev</a>
				</Link>
			}
		</div>
		<div className='w-1/3 text-base text-center'>
			Page {page}/{pages}
		</div>
		<div className="w-1/3 text-center">
			{page < pages &&
				<Link href={`/movies/${page + 1}`}>
					<a className=''>next &rarr;</a>
				</Link>
			}
		</div>
	</div>
}

export default MoviesGridPagination