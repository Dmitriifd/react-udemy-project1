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
				{ name: 'John Smith', salary: '800', increase: false, rise: true, id: uuidv4() },
				{ name: 'Alex Minik.', salary: '3000', increase: true, rise: false, id: uuidv4() },
				{ name: 'Carl With.', salary: '5000', increase: false, rise: false, id: uuidv4() },
			],
		}
	}

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
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

	// onToogleIncrease = (id) => {
	// 	// v1
	// 	// this.setState(({ data }) => {
	// 	//   const index = data.findIndex((elem) => elem.id === id)
	// 	//   const old = data[index]
	// 	//   const newItem = {...old, increase: !old.increase}
	// 	//   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
	// 	//   return {
	// 	//     data: newArr
	// 	//   }
	// 	// })
	//  // v2
	// 	this.setState(({ data }) => ({
	// 		data: data.map((item) => {
	// 			if (item.id === id) {
	// 				return { ...item, increase: !item.increase }
	// 			}
	// 			return item
	// 		}),
	// 	}))
	// }

	// onToogleRise = (id) => {
	// 	this.setState(({ data }) => ({
	// 		data: data.map((item) => {
	// 			if (item.id === id) {
	// 				return { ...item, rise: !item.rise }
	// 			}
	// 			return item
	// 		}),
	// 	}))
	// }

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}
				return item
			}),
		}))
	}

	render() {
		const employees = this.state.data.length
		const increased = this.state.data.filter((item) => item.increase).length
		return (
			<div className='app'>
				<AppInfo employees={employees} increased={increased} />

				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>

				<EmployeesList
					// onToogleIncrease={this.onToogleIncrease}
					// onToogleRise={this.onToogleRise}
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		)
	}
}

export default App
