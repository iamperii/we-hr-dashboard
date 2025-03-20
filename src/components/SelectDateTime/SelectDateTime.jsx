import style from './selectDateTime.module.scss';

const SelectDateTime = () => {
	return (
		<section className={style['announcements-header']}>
			<h1>Announcement</h1>
			<input
				type="date"
				id=""
				name="trip-start"
				value="2025-03-22"
				min="2024-01-01"
				max="2025-12-31"
			/>
		</section>
	);
};

export default SelectDateTime;
