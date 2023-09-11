import { useContext, useState } from 'react';
import { deleteUserById } from '../../lib/api/usersApi';
import { UserFormsContext } from '../../lib/contexts/UserFormsContext';
import { alertBox } from '../../lib/events/alertEvents';
import Button from '../buttons/Button';
import style from './UserDeleteForm.module.css';

const UserDeleteForm = ({ currentUser, closeModal }) => {
	const { onSuccess } = useContext(UserFormsContext);

	const [isSubmitting, setIsSubmitting] = useState(false);

	return (
		<form
			className={style.form}
			onSubmit={ev =>
				handleSubmit(ev, currentUser.id, setIsSubmitting, onSuccess, closeModal)
			}
		>
			<p>
				Are you sure about delete {'"'}
				{currentUser.name}
				{'"'}?
			</p>
			<Button
				type='button'
				kind='secondary'
				disabled={isSubmitting}
				onClick={closeModal}
			>
				{isSubmitting ? 'Loading...' : 'Cancel'}
			</Button>
			<Button type='submit' disabled={isSubmitting}>
				{isSubmitting ? 'Loading...' : 'Delete user'}
			</Button>
		</form>
	);
};

const handleSubmit = async (
	ev,
	userId,
	setIsSubmitting,
	onSuccess,
	closeModal
) => {
	ev.preventDefault();

	setIsSubmitting(true);

	const success = await deleteUserById(userId);

	if (success) {
		onSuccess();
		alertBox.success('Usuario eliminado con éxito');
	} else {
		alertBox.error('Error al Delete al usuario');
	}
	closeModal();
};

export default UserDeleteForm;
