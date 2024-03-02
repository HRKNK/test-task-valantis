import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { useEffect, useState } from 'react';

import ProductFilter from '@/features/products-filter/UI/ProductFilter';
import Pagination from '@/shared/UI/pagination/Pagination';

import { selectRequest } from '../model/service/switchFetchProduct';
import ProductsList from './ProductsList';

const limit = 50;

const Products = (): JSX.Element => {
	// State Manager
	const dispatch = useAppDispatch();
	const { error, filters, isLoading } = useAppSelector((state) => state.ProductSliceReducer);

	// Pagination state
	const [offset, setOffset] = useState<number>(limit);
	const [page, setPage] = useState<number>(1);

	// Request
	const sendRequest = () => {
		dispatch(
			selectRequest(filters.type, {
				limit,
				offset,
				brand: filters.enteredValue,
				price: +filters.enteredValue,
				product: filters.enteredValue,
			})
		);
	};
	// Init
	useEffect(() => {
		sendRequest();
	}, [page, offset, error, filters]);

	// Pagination
	const pageNext = () => {
		if (page >= 1 && filters.type === 'all') {
			setPage((prev) => prev + 1);
			setOffset((prev) => prev + limit);
		}
	};
	const pagePrev = () => {
		if (page > 1 && filters.type === 'all') {
			setPage((prev) => prev - 1);
			setOffset((prev) => prev - limit);
		}
	};

	return (
		<div>
			<h1>Products</h1>
			<ProductFilter />
			<Pagination disable={isLoading || filters.type != 'all'} nextPage={pageNext} prevPage={pagePrev} pageNumber={page} />
			<ProductsList />
		</div>
	);
};

export default Products;
