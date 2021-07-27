import Image from 'next/image';
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon
	} from '@heroicons/react/outline'
const Footer = () => {
	return(
		<footer>
			{/*Top Nav*/}
			<div className="text-center text-white items-center bg-amazon_blue p-1  py-2">


				{/*Search*/}
				<div>
					<h2>Made By Mohmad Gamal 2021</h2>
				</div>


			</div>

			{/*Buttom Nav*/}
			<div style={{justifyContent: "space-between"}} className=" items-center flex flex-col md:flex-row p-10  bg-amazon_blue-light text-white text-sm">
				<div className="p-2 text-center md:p-0  md:text-xs lg:text-lg 2xl:text-3xl md:text-left">
					<p className="link font-extrabold">Get To Know Us</p>
					<p className="link">Careers</p>
					<p className="link">Blog</p>
					<p className="link">About Amazon</p>
					<p className="link">Investor Relations</p>
					<p className="link">Amazon Devices</p>
					<p className="link">Amazon Tours</p>
				</div>
				<div className="p-2 text-center md:p-0  md:text-xs lg:text-lg 2xl:text-3xl md:text-left">
					<p className="link font-extrabold">Make Money with Us</p>
					<p className="link">Host an Amazon Hub</p>
					<p className="link">Sell products on Amazon</p>
					<p className="link">Sell on Amazon Business</p>
					<p className="link">Sell apps on Amazon</p>
					<p className="link">Become an Affiliate</p>
					<p className="link">Advertise Your Products</p>
				</div>
				<div className="p-2 text-center md:p-0  md:text-xs lg:text-lg 2xl:text-3xl md:text-left">
					<p className="link font-extrabold">Amazon Payment Products</p>
					<p className="link">Amazon Assistant</p>
					<p className="link">Amazon Business Card</p>
					<p className="link">Shop with Points</p>
					<p className="link">Reload Your Balance</p>
					<p className="link">Amazon Currency Converter</p>
					<p className="link">Host an Amazon Hub</p>
				</div>


				<div className="p-2 text-center md:p-0  md:text-xs lg:text-lg 2xl:text-3xl md:text-left">
					<p className="link font-extrabold">Let Us Help You</p>
					<p className="link">Manage Your Content and Devices</p>
					<p className="link">Amazon and COVID-19</p>
					<p className="link">Your Account</p>
					<p className="link">Your Orders</p>
					<p className="link">Shipping Rates & Policies</p>
					<p className="link">Returns & Replacements</p>
				</div>
			</div>

		</footer>
	)
}

export default Footer




	
























