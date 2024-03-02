type TReturnedDateView = 'timestamp';

function getDateView(type: TReturnedDateView): string {
	switch (type) {
		case 'timestamp': {
			const date = new Date();
			return date.toISOString().slice(0, 10).replace(/-/g, '');
		}
	}
}
export default getDateView;
