import ActivityPanel from '../components/ActivityPanel/ActivityPanel';
import Announcements from '../components/Announcements/Announcements';
import DashboardCards from '../components/DashboardCards/DashboardCards';
import Header from '../components/Header/Header';
import SchedulePanel from '../components/SchedulePanel/SchedulePanel';
import SideBar from '../components/SideBar/SideBar';
import StatisticsCard from '../components/StatisticsCard/StatisticsCard';
import style from './Dashboard.module.scss';

const Dashboard = () => {
	return (
		<>
			<div className={style.dashboard}>
				<SideBar />
				<div className={style['dashboard-container']}>
					<Header />
					<h1>Dashboard</h1>

					<div className={style['dashboard-body']}>
						<div className={style['left-container']}>
							<section className={style['dashboard-cards']}>
								<DashboardCards />
							</section>

							<section className={style.statistics}>
								<StatisticsCard />
							</section>

							<section className={style.announcements}>
								<Announcements />
							</section>
						</div>

						<div className={style['right-container']}>
							<aside className={style['activity-panel']}>
								<ActivityPanel />
							</aside>

							<section className={style['schedule-panel']}>
								<SchedulePanel />
							</section>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
