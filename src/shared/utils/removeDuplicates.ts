interface IProduct {
	brand: string;
	id: string;
	price: number;
	product: string;
}

function removeDuplicates(products: IProduct[]) {
	let transformation = products.filter((product, index, self) => {
		return (
			index ===
			self.findIndex((search) => {
				return search.id === product.id;
			})
		);
	});
	return transformation;
}

export default removeDuplicates;
