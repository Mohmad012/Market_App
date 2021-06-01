import Image from 'next/image';
import {useState , useEffect} from 'react';
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket } from "../slices/basketSlice";
import Aos from 'aos'


const MAX_RATING = 5
const MIN_RATING = 1

const Product = ({id , title , price , description, category , image , index}) => {

	useEffect(() => {
		Aos.init({ duration: 2000})
	},[])

	const dispatch = useDispatch()

	const [rating] = useState(
		Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
	);

	const [hasPrime] = useState(Math.random() < 0.5)

	const addItemToBasket = () => {

		const product = {
			id , 
			title , 
			price ,
			rating ,
			description, 
			category , 
			image ,
			hasPrime		
		}

		// Sending the Product as an action to the Redux Store... [ the basket slice ]
		dispatch(addToBasket(product))

	}

	return(
		<div data-aos={`${index > 2 ? "fade-up" : null}`} className="relative flex flex-col md:m-5 mt-5 mb-5 bg-white z-30 p-10">
			<p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

			<Image src={image} height={200} width={200} objectFit="contain" />

			<h4 className="my-3">{title}</h4>

			<div className="flex">
				{Array(rating).fill().map((_,i) => (
					<StarIcon className="h-5 text-yellow-500" />
				))}
			</div>

			<p className="text-xs my-2 line-clamp-2">{description}</p>

			<div className="mb-5">
				<Currency
					quantity={price} currency="GBP"
				/>
			</div>

			{hasPrime && (
				<div className="flex items-center space-x-2 -mt-5">
					<img className="w-12" src="https://links.papareact.com/fdw" alt="" />
					<p className="text-xs text-gray-500">FREE Nxet-day Delivery</p>
				</div>
			)}

			<button onClick={addItemToBasket} className="mt-auto button ">Add To Basket</button>
		</div>
	)
}

export default Product