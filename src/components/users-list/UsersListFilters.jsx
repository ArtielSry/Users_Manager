import { useState } from 'react';
import { SORT_OPTIONS } from '../../constants/sortOptions';
import {
	onlyActiveChanged,
	searchChanged,
	sortByChanged
} from '../../lib/actions/filtersActions';
import Button from '../buttons/Button';
import InputCheckbox from '../forms/InputCheckbox';
import InputSearch from '../forms/InputSearch';
import Select from '../forms/Select';
import Modal from '../modal/Modal';
import UserCreateForm from '../user-forms/UserCreateForm';
import style from './UsersListFilters.module.css';

const UsersListFilters = ({ search, onlyActive, sortBy, dispatchFilters }) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className={style.form}>
			<Modal closeModal={() => setShowModal(false)}>
				{showModal && <UserCreateForm closeModal={() => setShowModal(false)} />}
			</Modal>
			<div className={style.row}>
				<InputSearch
					placeholder='Search...'
					value={search}
					onChange={ev => dispatchFilters(searchChanged(ev.target.value))}
				/>
				<Select
					value={sortBy}
					onChange={ev =>
						dispatchFilters(sortByChanged(Number(ev.target.value)))
					}
				>
					<option value={SORT_OPTIONS.DEFAULT}>For Default</option>
					<option value={SORT_OPTIONS.NAME}>For Name</option>
					<option value={SORT_OPTIONS.ROLE}>For Role</option>
					{!onlyActive && (
						<option value={SORT_OPTIONS.ACTIVE}>For Status</option>
					)}
				</Select>
			</div>
			<div className={style.row}>
				<div className={style.active}>
					<InputCheckbox
						className={style.checkbox}
						checked={onlyActive}
						onChange={ev =>
							dispatchFilters(onlyActiveChanged(ev.target.checked))
						}
					/>
					<p>Display only actives</p>
				</div>
				<Button onClick={() => setShowModal(true)}>Add User</Button>
			</div>
		</div>
	);
};
export default UsersListFilters;
