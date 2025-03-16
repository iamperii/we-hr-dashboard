import hamburgerIcon from '../../assets/svg/ic_burgermenu.svg';
import Menu from './Menu/Menu';
import style from './sideBar.module.scss';

const SideBar = () => {
	return (
		<>
			<div className={style.hamburger}>
				<img src={hamburgerIcon} alt="hamburger-icon" />
			</div>
			<div className={style.sidebar}>
				<h1>WeHr</h1>
				<Menu />
			</div>
		</>
	);
};

export default SideBar;
