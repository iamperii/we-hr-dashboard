import style from './header.module.scss';
import notificationsIcon from '../../assets/svg/notifications.svg';
import inboxIcon from '../../assets/svg/inbox.svg';
import userAvatar from '../../assets/svg/avatar.svg';
import dropdown from '../../assets/svg/dropdown.svg';
import dropup from '../../assets/svg/dropup.svg';
import { useState } from 'react';

const Header = () => {
	const [direction, setDirection] = useState(true);

	const handleDirection = () => {
		setDirection(!direction);
	};
	return (
		<>
			<div className={style.header}>
				<div className={style['header-left']}>
					<input type="text" placeholder='Search' className={style.search}/>
				</div>

				<div className={style['header-right']}>
					<img src={notificationsIcon} alt="notifications-icon" />
					<img src={inboxIcon} alt="inbox-icon" />
					<div className={style.user}>
						<img src={userAvatar} alt="avatar-img" />
						<p>Admirra John</p>
						{direction ? (
							<img src={dropdown} alt="dropdown" onClick={handleDirection} />
						) : (
							<img src={dropup} alt="dropup" onClick={handleDirection} />
						)}
					</div>
					
				</div>
			</div>
		</>
	);
};

export default Header;
