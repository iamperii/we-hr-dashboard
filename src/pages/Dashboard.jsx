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
				<div class="dashboard-container">
					<Header />
					
					<section class="dashboard-cards">
						<DashboardCards />
					</section>

					<section class="statistics">
						<StatisticsCard />
					</section>

					<aside class="activity-panel">
						<ActivityPanel />
					</aside>

					<section class="announcements">
						<Announcements />
					</section>

					<section class="schedule-panel">
						<SchedulePanel />
					</section>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
