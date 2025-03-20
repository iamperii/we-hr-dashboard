import style from './card.module.scss';
import pinIcon from '../../../assets/svg/bi_pin-angle-fill.svg';
import menuIcon from '../../../assets/svg/carbon_overflow-menu-horizontal.svg';

const Card = ({ title, time }) => {
	return (
		<>
			<div className={style.card}>
				<div>
					<p className={style.title}>{title}</p>
					<p className={style.time}>{time}</p>
				</div>

				<div className={style.icons}>
					<img src={pinIcon} alt="pin-card-icon" />
					<img src={menuIcon} alt="menu-icon" />
				</div>
			</div>
		</>
	);
};

export default Card;
