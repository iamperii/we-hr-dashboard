import style from './card.module.scss';

const Card = ({ title, value, desc }) => {
	return (
		<>
			<div className={style.card}>
				<h4>{title}</h4>
				<h2>{value}</h2>
				<p>{desc}</p>
			</div>
		</>
	);
};

export default Card;
