const MovieItemPH = () => {
	return <div className="w-full flex gap-4 animate-pulse">
		<div className="w-1/3 aspect-[3/4] bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500">
		</div>
		<div className="w-2/3 flex flex-col gap-2">
			<div className="bg-gray-400 w-full h-[28px]"></div>
			<div className="bg-gray-200 h-[24px] w-1/2"></div>
			<div className="bg-gray-400 h-[20px] w-1/3"></div>
		</div>
	</div>
}

export default MovieItemPH