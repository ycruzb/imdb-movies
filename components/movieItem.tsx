import { Movie } from "@prisma/client"
import Image from "next/image"

const MovieItem = ({ id, Title, Poster, Type, Year, imdbID }: Movie) => {
	return <div className="w-full flex gap-4">
		<div className="w-1/3">
			{Poster !== "N/A" ?
				<Image
					alt={Title}
					src={Poster}
					layout="responsive"
					width={300}
					height={400}
				/> : <div className="w-full text-xs text-gray-500 text-center">No image</div>
			}

		</div>
		<div className="w-2/3 flex flex-col gap-2">
			<h1 className="text-gray-800 text-lg font-semibold leading-5">{Title}</h1>
			<p className="text-gray-500 text-base">{Type}</p>
			<p className="text-gray-800 text-sm font-medium">{Year}</p>
		</div>
	</div>
}

export default MovieItem