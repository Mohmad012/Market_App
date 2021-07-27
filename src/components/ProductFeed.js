import Product from './Product';

const ProductFeed = ({ products }) => {
	return(
		<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3  md:-mt-52 mx-auto">
			{products.slice(0,4).map(({id , title , price , description, category , image} , i) => (
				<Product
					key={i}
					index={i}
					id={id}
					title={title}
					price={price}
					description={description}
					category={category}
					image={image}
				/>
			))}

			<img className="md:col-span-full mx-auto" src="https://links.papareact.com/dyz" alt=""/>

			<div className="md:col-span-2">
				{products.slice(4,5).map(({id , title , price , description, category , image} , i) => (
					<Product
						key={i}
						index={i}
						id={id}
						title={title}
						price={price}
						description={description}
						category={category}
						image={image}
					/>
				))}
			</div>

			{products.slice(5,products.length).map(({id , title , price , description, category , image} , i) => (
				<Product
					key={i}
					index={i}
					id={id}
					title={title}
					price={price}
					description={description}
					category={category}
					image={image}
				/>
			))}
		</div>
	)
}

export default ProductFeed