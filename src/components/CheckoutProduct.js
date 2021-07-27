// import Header from '../components/Header'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { removeFromBasket } from "../slices/basketSlice";
// import { useSelector } from 'react-redux'
// import { selectItems } from "../slices/basketSlice";
// import CheckoutProduct from '../components/CheckoutProduct'

const CheckoutProduct = ({
			id , 
			title , 
			price ,
			rating ,
			description, 
			category , 
			image ,
			hasPrime
		}) => {


	const dispatch = useDispatch()

	const removeItemFromBasket = () => {

		// Remove The Item From Redux
		dispatch(removeFromBasket({ id }))

	}

	return(
		<div className="grid grid-cols-5">
			<Image
				src={image}
				width={200}
				height={200}
				objectFit="contain"
			/>

			{/*Middle*/}
			<div className="col-span-3 mx-5">
				<p>{title}</p>
				<div className="flex">
					{Array(rating).fill().map((_,i) => (
						<StarIcon kkey={i} className="h-5 text-yellow-500" />
					))}
				</div>

				<p className="text-xs my-2 line-clamp-3">{description}</p>
				<Currency
					quantity={price} currency="GBP"
				/>

				{hasPrime && (
					<div className="flex items-center space-x-2">
						<img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt="" />
						<p className="text-xs text-gray-500">FREE Nxet-day Delivery</p>
					</div>
				)}
			</div>

			{/*Right Add/Remove Buttons*/}
			<div className="flex flex-col space-y-2 my-auto justify-self-end">
				<button className="button" onClick={removeItemFromBasket}>Remove From Basket</button>
			</div>
		</div>
	)
}

export default CheckoutProduct