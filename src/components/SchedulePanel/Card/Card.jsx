import style from './card.module.scss';
import menuIcon from '../../../assets/svg/carbon_overflow-menu-horizontal.svg';

const Card = ({ title, time }) => {
	return (
		<div className={style.card}>
			<div>
				<p className={style.title}>{title}</p>
				<p className={style.time}>{time}</p>
			</div>
			<img src={menuIcon} alt="" />
		</div>
	);
};

export default Card;
