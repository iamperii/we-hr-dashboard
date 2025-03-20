import Card from './Card/Card';
import style from './dashboardCards.module.scss';

const DashboardCards = () => {
	return (
		<div className={style.dashboardCards}>
			<div className={style.cards}>
				<Card title="Aviable Position" value="24" desc="4 Urgently needed" />
				<Card title="Job Open" value="10" desc="4 Active hiring" />
				<Card title="New Employees" value="24" desc="4 Department" />
			</div>
		</div>
	);
};

export default DashboardCards;
