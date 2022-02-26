import Link from "next/link"

const Header = () => {
	return <header className="w-full">
		<Link href="/">
			<a className="container block mx-auto text-gray-800 text-2xl font-semibold px-5 py-4 text-center">IMDb movies demo</a>
		</Link>
	</header>
}

export default Header