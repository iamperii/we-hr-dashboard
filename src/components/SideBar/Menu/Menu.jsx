import style from './menu.module.scss';
import dashboardIcon from '../../../assets/svg/ic_dashboard.svg';
import calendarIcon from '../../../assets/svg/ic_calendar.svg';
import recruitmentIcon from '../../../assets/svg/ic_recruitment.svg';
import employeeIcon from '../../../assets/svg/ic_employee.svg';
import departmentIcon from '../../../assets/svg/ic_department.svg';
import supportIcon from '../../../assets/svg/ic_support.svg';
import settingsIcon from '../../../assets/svg/ic_settings.svg';

const Menu = () => {
	return (
		<>
			<div className={style['menu']}>
				<h2 className={style['menu-title']}>MAIN MENU</h2>
				<div className={style['menu-routes']}>
					<div className={style['menu-route']}>
						<img
							src={dashboardIcon}
							alt="dashboardIcon"
							className={style.icon}
						/>
						<p>Dashboard</p>
					</div>
					<div className={style['menu-route']}>
						<img
							src={recruitmentIcon}
							alt="recruitmentIcon"
							className={style.icon}
						/>
						<p>Recruitment</p>
					</div>
					<div className={style['menu-route']}>
						<img src={calendarIcon} alt="scheduleIcon" className={style.icon} />
						<p>Schedule</p>
					</div>
					<div className={style['menu-route']}>
						<img src={employeeIcon} alt="employeeIcon" className={style.icon} />
						<p>Employee</p>
					</div>
					<div className={style['menu-route']}>
						<img
							src={departmentIcon}
							alt="departmentIcon"
							className={style.icon}
						/>
						<p>Department</p>
					</div>
				</div>
				<h2 className={style['menu-title']}>OTHER</h2>
				<div className={style['menu-routes']}>
					<div className={style['menu-route']}>
						<img src={supportIcon} alt="supportIcon" className={style.icon} />
						<p>Support</p>
					</div>
					<div className={style['menu-route']}>
						<img src={settingsIcon} alt="settingsIcon" className={style.icon} />
						<p>Settings</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Menu;
