import CheckCircleIcon from '../icons/CheckCircleIcon';
import CrossCircleIcon from '../icons/CrossCircleIcon';
import style from './UserStatus.module.css';

const UserStatus = ({ active }) => {
	const activeClassname = active ? style.active : style.inactive;
	const Icon = active ? CheckCircleIcon : CrossCircleIcon;

	return (
		<div className={activeClassname}>
			<Icon className={style.icon} />
			<span>{active ? 'active' : 'inactive'}</span>
		</div>
	);
};

export default UserStatus;
