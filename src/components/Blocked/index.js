import {Component} from 'react'

import './index.css'
import BlockedItem from '../BlockedItem'

class All extends Component {
  state = {
    usersData: [],
  }

  componentDidMount() {
    this.getClientsData()
  }

  getClientsData = async () => {
    const response = await fetch(
      'https://636f3003f2ed5cb047d748f8.mockapi.io/users_data',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      companyName: eachItem.company_name,
      budgetName: eachItem.budget_name,
      ownerId: eachItem.owner_id,
      spend: eachItem.spend,
      availableToSpend: eachItem.available_to_spend,
      cardType: eachItem.card_type,
      expiry: eachItem.expiry,
      limit: eachItem.limit,
      status: eachItem.status,
    }))

    this.setState({usersData: formattedData})
  }

  render() {
    const {usersData} = this.state

    return (
      <div className="app-container">
        <ul className="your-clients-container">
          {usersData.map(eachData => (
            <BlockedItem key={eachData.id} userDetails={eachData} />
          ))}
        </ul>
      </div>
    )
  }
}
export default All
