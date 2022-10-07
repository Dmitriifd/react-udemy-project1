import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

const EmployeesList = ({ data }) => {
	return (
		<ul className='app-list list-group'>
			{data.map((item) => (
				<EmployeesListItem key={item.id} {...item} />
			))}
		</ul>
	)
}

export default EmployeesList
