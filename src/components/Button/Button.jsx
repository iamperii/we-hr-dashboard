import style from './button.module.scss';

const Button = ({ text }) => {
	return (
		<section className={style['announcements-footer']}>
			<button>{text}</button>
		</section>
	);
};

export default Button;
