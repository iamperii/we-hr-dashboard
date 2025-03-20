import SelectDateTime from '../SelectDateTime/SelectDateTime';
import Card from './Card/Card';
import style from './schedulePanel.module.scss';
import Button from '../Button/Button';

const SchedulePanel = () => {
	return (
		<>
			<div className={style['schedul-panel']}>
				<SelectDateTime />

				<div className={style['schedul-panel-content']}>
					<div>
						<p>Priority</p>
						<Card
							title="Review candidate applications"
							time="Today - 11.30 AM"
						/>
					</div>

					<div className={style['other-schedule-cards']}>
						<p>Other</p>
						<Card title="Interview with candidates" time="Today - 10.30 AM" />
						<Card
							title="Short meeting with product designer from IT Departement"
							time="Today - 09.15 AM"
						/>
					</div>
				</div>

				<Button text="Create new schedule" />
			</div>
		</>
	);
};

export default SchedulePanel;
