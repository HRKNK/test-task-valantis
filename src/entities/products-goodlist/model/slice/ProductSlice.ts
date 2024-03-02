import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProduct } from '../service/fetchProduct';
import type { IProduct, TRequestType } from '../types';

interface ProductState {
	isLoading: boolean;
	error?: unknown;

	data: IProduct[];
	filters: {
		type: TRequestType;
		enteredValue: string;
	};
}

const initialState: ProductState = {
	isLoading: false, // для манипуляций над состоянием компонентов
	error: false,

	data: [],
	filters: {
		type: 'all',
		enteredValue: '',
	},
};

// Создает action-ы (сам Reducer в контексте Toolkit)
export const ProductSlice = createSlice({
	name: 'ProductSlice', // уникальное имя
	initialState, // дэфолтное состояние стейта
	reducers: {
		filters(state, action: PayloadAction<ProductState['filters']>) {
			state.filters = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			// асинхронные редюсоры (зарезервировано для AsyncThunk)
			.addCase(fetchProduct.pending, (state) => {
				state.isLoading = true;
				state.error = false;
			})
			.addCase(fetchProduct.rejected, (state, action) => {
				// string
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(fetchProduct.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
				// запрос выполнен
				state.isLoading = false;
				state.data = action.payload;
				state.error = false;
			});
	},
});

export const { reducer: ProductSliceReducer, actions: ProductSliceAction } = ProductSlice;
