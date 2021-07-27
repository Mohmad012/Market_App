// import Header from '../components/Header'
// import Head from 'next/head';
import Currency from 'react-currency-formatter'
import moment from 'moment'

const Order = ({ id ,amount ,amountShipping ,images ,timestamp , items }) => {

	return(
		<div className="relative border rounded-md">
			<div className="flex items-start sm:space-x-10 space-x-0 flex-col sm:flex-row p-5 bg-gray-100 text-sm text-gray-600">
				<div className="my-3 ml-0 text-left">
					<p className="font-bold text-xs">ORDER PLACED</p>
					<p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
				</div>

				<div className="my-3 ml-0 text-left">
					<p className="font-bold text-xs">TOTAL</p>
					<p>
						<span className="underline text-red-500">
							<Currency quantity={amount} currency="GBP"/>
						</span>
						{" "}- Next Day
						Delivery {" "}
						<span className="underline text-green-500">
							<Currency quantity={amountShipping} currency="GBP"/>
						</span>
					</p>
				</div>

				<p className="text-sm sm:text-xl self-start sm:self-end flex-1 text-right text-blue-500 whitespace-nowrap ">
					{items.length} Items
				</p>

				<p className="absolute top-2 right-2 w-40 lg:w-72 truncate hidden md:block text-xs  whitespace-nowrap ">
					ORDER # {id}
				</p>

			</div>

			<div className="p-5 sm:p-10">
				<div className="flex space-x-6 overflow-x-auto">
					{images.map((image) => (
						<img src={image} alt="" className="h-20 object-contain sm:h-32"/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Order;