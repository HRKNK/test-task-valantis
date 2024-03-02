import { ProductSliceAction } from '@/entities/products-goodlist/model/slice/ProductSlice';
import { useAppDispatch } from '@/shared/hooks/redux';
import { memo, useState } from 'react';

export type TRequestType = 'all' | 'brand' | 'product' | 'price';

const ProductFilter = memo((): JSX.Element => {
	// State Manager
	const dispatch = useAppDispatch();
	const { filters } = ProductSliceAction;

	// Binding
	const [value, setValue] = useState<string>('');
	const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	// Select
	const [filterType, setFilterType] = useState<TRequestType>('all');
	const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFilterType(e.target.value as TRequestType);
	};

	// click
	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		dispatch(filters({ enteredValue: value, type: filterType }));
	};

	return (
		<div>
			<label>Сортировать по: </label>
			<select onChange={onChangeHandler}>
				<option value="all">Все</option>
				<option value="price">По цене</option>
				<option value="product">По названию</option>
				<option value="brand">По бренду</option>
			</select>
			<input type="text" onChange={onInputHandler} value={value}></input>
			<button type="button" onClick={onClickHandler}>
				{'Поиск'}
			</button>
		</div>
	);
});

export default ProductFilter;
