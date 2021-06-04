import Header from '../components/Header'
import Image from 'next/image';
import Head from 'next/head';
import { useSelector } from 'react-redux'
import { selectItems , selectTotal } from "../slices/basketSlice";
import CheckoutProduct from '../components/CheckoutProduct'
import Currency from 'react-currency-formatter'
import { useSession } from 'next-auth/client'
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios'

const stripePromise = loadStripe(process.env.stripe_public_key)

const Checkout = () => {

	const items = useSelector(selectItems)
	const total = useSelector(selectTotal)

	const [session] = useSession()

	const createCheckoutSession = async () => {
		const stripe = await stripePromise

		// call the backend to create a checkout session...
		const checkoutSession = await axios.post('/api/create-checkout-session' , {
			items:items,
			email: session.user.email,
		});


		// Redirect User/Customer to Stripe Checkout
	    const result = await stripe.redirectToCheckout({
	    	sessionId: checkoutSession.data.id,
	    });

		if (result.error) alert(result.error.message);
	}

	return(
		<div className="bg-gray-100">
			<Head>
				<title>Basket</title>
			</Head>
			<Header />
			<main className="lg:flex max-w-screen-2xl mx-auto">
				{/*Left*/}
				<div className="flex-grow m-5 shadow-sm">
					<Image
						src="https://links.papareact.com/ikj"
						width={1020}
						height={250}
						objectFit="contain"
					/>

					<div className="flex flex-col p-5 space-y-10 bg-white">
						<h1 className="text-3xl border-b pb-4">
							{items.length === 0 ? "Your Amazon Basket Is Empty." : "Shopping Basket"}
						</h1>

						{items.map((item , i) => (
							<CheckoutProduct 
								key={i}
								id={item.id}
								title={item.title}
								price={item.price}
								rating={item.rating}
								description={item.description}
								category={item.category}
								image={item.image}
								hasPrime={item.hasPrime}
							/>
						))}
					</div>
				</div>

				{/*Right*/}
				<div className="flex flex-col bg-white p-10 shadow-md">
					{items.length > 0 && (
						<>
							<h2 className="whitespace-nowrap">
								Subtotal ({items.length} items:{" "}
								<span className="font-bold">
									<Currency
										quantity={total} currency="GBP"
									/>
								</span>
								)
							</h2>

							<button
								role="link"
								onClick={createCheckoutSession}
								className="button mt-2"
							>
								Proceed To Checkout
							</button>
						</>
					)}
				</div>
			</main>
		</div>
	)
}

export default Checkout