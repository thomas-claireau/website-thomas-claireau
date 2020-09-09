export default function SlashDate({ date }) {
	date = new Date(date);

	const year = date.getFullYear();
	const month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
	const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

	return <span>{`${day}/${month}/${year}`}</span>;
}
