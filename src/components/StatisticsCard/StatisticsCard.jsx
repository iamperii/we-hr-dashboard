import Card from './Statistic-Card/Card';
import style from './statisticsCard.module.scss';

const StatisticsCard = () => {
	return (
		<>
			<div className={style['staticts-card']}>
				<Card
					title="Total Employees"
					value={216}
					menCount="120 Men"
					womenCount="96 Women"
					pastValue="+2%"
				/>
				<Card
					title="Talent Requests"
					value={16}
					menCount="6 Men"
					womenCount="10 Women"
					pastValue="+5%"
				/>
			</div>
		</>
	);
};

export default StatisticsCard;
