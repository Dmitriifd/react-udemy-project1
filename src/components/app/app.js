import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{ name: 'John Smith', salary: '800', increase: false, id: 1 },
				{ name: 'Alex Minik.', salary: '3000', increase: true, id: 2 },
				{ name: 'Carl With.', salary: '5000', increase: false, id: 3 },
			],
		}
	}

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			id: uuidv4(),
		}
		this.setState(({ data }) => {
			const newArr = [...data, newItem]
			return {
				data: newArr,
			}
		})
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((elem) => elem.id !== id),
			}
		})
	}

	render() {
		return (
			<div className='app'>
				<AppInfo />

				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>

				<EmployeesList data={this.state.data} onDelete={this.deleteItem} />
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		)
	}
}

export default App
