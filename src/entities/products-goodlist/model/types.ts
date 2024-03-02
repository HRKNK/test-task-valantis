// Response
export interface IProduct {
	brand: string;
	id: string;
	price: number;
	product: string;
}

export interface IPost {
	result: IProduct[];
}

// Request
interface IFilter_brand {
	brand: string;
}
interface IFilter_product {
	product: string;
}
interface IFilter_price {
	price: number;
}

interface IFilter {
	action: 'filter';
	params: IFilter_brand | IFilter_product | IFilter_price;
}

interface IIds {
	action: 'get_ids';
	params: {
		offset: number;
		limit: number;
	};
}

export type TRequestParams = IIds | IFilter;

export type TRequestType = 'all' | 'brand' | 'product' | 'price';
