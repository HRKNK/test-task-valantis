import classNames from 'classnames';
import styles from './Card.module.css';

interface ICardProps {
	brand: string;
	id: string;
	price: number;
	product: string;
}

const Card = (props: ICardProps): JSX.Element => {
	const { brand, id, price, product } = props;
	return (
		<div className={classNames(styles.card__wrapper)}>
			<p>{id}</p>
			<h3>{product}</h3>
			<p>{brand}</p>
			<p>Цена: {price}</p>
		</div>
	);
};

export default Card;
