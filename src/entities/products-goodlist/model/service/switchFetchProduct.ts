import { fetchProduct } from './fetchProduct';
import type { TRequestType } from '../types';

interface IParams {
	limit: number;
	offset: number;
	price: number;
	brand: string;
	product: string;
}

export function selectRequest(type: TRequestType, params: IParams) {
	const { offset, limit, brand, product, price } = params;

	switch (type) {
		case 'all':
			return fetchProduct({ action: 'get_ids', params: { limit, offset } });
		case 'brand':
			return fetchProduct({ action: 'filter', params: { brand } });
		case 'product':
			return fetchProduct({ action: 'filter', params: { product } });
		case 'price':
			return fetchProduct({ action: 'filter', params: { price } });
	}
}
