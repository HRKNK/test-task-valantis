import Card from '@/shared/UI/card/Card';
import { useAppSelector } from '@/shared/hooks/redux';
import removeDuplicates from '@/shared/utils/removeDuplicates';
import Loader from '@/shared/UI/loader/Loader';
import { memo } from 'react';

const ProductsList = memo((): JSX.Element => {
	const { data, isLoading } = useAppSelector((state) => state.ProductSliceReducer);
	const cleanedData = data && removeDuplicates(data);

	if (!cleanedData.length && !isLoading) return <div>{'Ничего не найдено'}</div>;

	return <div>{isLoading ? <Loader /> : cleanedData?.map((element) => <Card {...element} key={element.id} />)}</div>;
});

export default ProductsList;
