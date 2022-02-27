import { useRouter } from "next/router"

interface IProps {
	error: boolean | string
}

const ErrorMessage = ({ error }: IProps) => {
	const router = useRouter();

	return <div className='w-full text-center'>
		<p className='w-full text-gray-800 text-center px-6 py-6'>{error}</p>
		<button className="inline-block bg-red-600 text-white px-10 py-2 rounded-md hover:bg-red-700 transition duration-200" onClick={() => { router.reload() }}>Aceptar</button>
	</div>
}

export default ErrorMessage