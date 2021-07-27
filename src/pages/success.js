import Header from '../components/Header'
import Head from 'next/head';
import { CheckCircleIcon } from '@heroicons/react/solid';
import {useRouter} from 'next/router';

const success = () => {

	const router = useRouter()

	return(
		<div className="bg-green-100 h-screen">
			<Head>
				<title>Success</title>
			</Head>
			<Header/>
			<main className="max-w-screen-lg mx-auto">
				<div className="flex flex-col p-10 bg-white">
					<div className="flex items-center space-x-2 mb-5">
						<CheckCircleIcon className="text-green-500 h-10"/>
						<h1 className="text-3xl">
							Thank you, your order has been confirmed!!
						</h1>
					</div>

					<p>
						Thank you for shopping with us. We'll send a confirmation once your item has shipped,
						if you would like to check the status of your order(s) please press the link below.
					</p>
					<button
						onClick={() => router.push('/orders')}
						className="mt-8 button"
					>
						Go to my orders
					</button>
				</div>
			</main>
		</div>
	)
}

export default success