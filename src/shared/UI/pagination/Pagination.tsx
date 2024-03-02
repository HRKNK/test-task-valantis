import classNames from 'classnames';
import styles from './Pagination.module.css';

interface IPaginationProps {
	pageNumber?: number;
	disable?: boolean;
	nextPage: () => void;
	prevPage: () => void;
}

const Pagination = ({ pageNumber, nextPage, prevPage, disable }: IPaginationProps): JSX.Element => {
	return (
		<div className={classNames(styles.pagination__wrapper)}>
			{pageNumber && <h5>Страница: {pageNumber}</h5>}
			<div>
				<button disabled={disable} onClick={prevPage} type="button">
					{'<'}
				</button>
				<button disabled={disable} onClick={nextPage} type="button">
					{'>'}
				</button>
			</div>
		</div>
	);
};

export default Pagination;
