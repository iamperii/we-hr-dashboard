import MyChart from '../../../charts/MyChart';
import style from './card.module.scss';

const Card = ({ title, menCount, womenCount, value,pastValue }) => {
	return (
		<>
			<div className={style['statistic-container']}>
				<div className={style['left-statistic']}>
					<h2>{title}</h2>
					<h3>{value}</h3>
					<p>{menCount}</p>
					<p>{womenCount}</p>
				</div>

				<div>
					<MyChart />
					<p className={style['past-month-value']}>{pastValue} Past Month</p>
				</div>
			</div>
		</>
	);
};

export default Card;
