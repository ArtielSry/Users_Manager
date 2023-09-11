import { Loading } from '../loading/Loading';
import UserCard from './UserCard';
import UserRow from './UserRow';
import style from './UsersListRows.module.css';

const UsersListRows = ({ users, error, loading, view }) => {
	if (loading) return <Loading/>
	if (error) return <p>Error loading users</p>;
	if (!users.length) return <p>There are not user</p>;

	const UserComponent = view ? UserRow : UserCard;

	return (
		<div className={style.container}>
			{users.map(user => (
				<UserComponent key={user.id} user={user} />
			))}
		</div>
	);
};

export default UsersListRows;
