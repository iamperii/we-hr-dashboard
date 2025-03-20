import style from './activityPanel.module.scss';

const ActivityPanel = () => {
	return (
		<>
			<div className={style.activitypanel}>
				<div className={style['activity-panel-head']}>
					<p className={style['activity-panel-head-title']}>
						Recently Activity
					</p>
				</div>

				<div className={style['activity-panel-content']}>
					<div>
						<p className={style.time}>10.40 AM, Fri 10 Sept 2021</p>
						<p className={style['activity-panel-second-title']}>
							You Posted a New Job
						</p>
						<p className={style['activity-panel-desc']}>
							Kindly check the requirements and terms of work and make sure
							everything is right.
						</p>
					</div>
					<div className={style['activity-panel-footer']}>
						<p>Today you makes 12 Activity</p>
						<button>See All Activity</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ActivityPanel;
