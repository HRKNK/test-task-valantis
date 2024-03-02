import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@/shared/API/instance';
import type { IPost, TRequestParams } from '../types';

/** ActionCreators */
// механизм асинхронного запроса данных
export const fetchProduct = createAsyncThunk(
	'products/fetchProduct', // название
	async (options: TRequestParams, thunkAPI) => {
		const { action, params } = options;
		try {
			console.log('Sending a request');

			const body = JSON.stringify({
				action,
				params,
			});

			const response = await instance.post<IPost>(undefined, body).then(async (result) => {
				const body = JSON.stringify({
					action: 'get_items',
					params: { ids: result.data.result },
				});

				const response = await instance.post<IPost>(undefined, body);
				return response;
			});

			if (!response.data) {
				throw new Error();
			}

			return response.data.result;
			//
		} catch (error) {
			// обработка ошибок в AsyncThunk
			console.log('Error');
			return thunkAPI.rejectWithValue('Ошибка загрузки данных');
		}
	}
);
