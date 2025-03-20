import Button from '../Button/Button';
import SelectDateTime from '../SelectDateTime/SelectDateTime';
import style from './announcements.module.scss';
import Card from './Card/Card';

const Announcements = () => {
	return (
		<>
			<div className={style.announcements}>
				<SelectDateTime />

				<section className={style['announcments-cards']}>
					<Card
						title="Outing schedule for every departement"
						time="5 Minutes ago"
					/>
					<Card title="Meeting HR Department" time="Yesterday, 12:30 PM" />
					<Card
						title="IT Department need two more talents for UX/UI Designer position"
						time="Yesterday, 09:15 AM"
					/>
				</section>

				<Button text="See All Announcement" />
			</div>
		</>
	);
};

export default Announcements;
