import {Component} from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import AllItem from '../AllItem'
import Filter from '../Filter'
import './index.css'

class All extends Component {
  state = {
    searchInput: '',
    usersData: [],
    usersList: [],
    page: 1,
  }

  componentDidMount() {
    this.getClientsData()
  }

  onChangeSearchInput = searchInput => {
    this.setState({searchInput}, this.getClientsData)
  }

  filter = (cardHolder, cardTypeSub, cardTypeBur) => {
    const {usersData} = this.state
    const getFilter = usersData.filter(
      eachUser =>
        eachUser.cardHolder === cardHolder.toLowerCase() ||
        eachUser.cardType === cardTypeSub ||
        eachUser.cardType === cardTypeBur,
    )
    this.setState({usersData: getFilter}, this.getClientsData)
  }

  getClientsData = async () => {
    const {searchInput, usersList, page} = this.state

    console.log(usersList)
    console.log(searchInput)

    const response = await fetch(
      `https://636f3003f2ed5cb047d748f8.mockapi.io/users_data?page=${page}&limit=10`,
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
      cardHolder: eachItem.card_holder,
    }))

    this.setState({usersData: formattedData, page: page + 1})
  }

  render() {
    const {usersData} = this.state
    const hasMore = true

    return (
      <div className="app-container">
        <Filter
          onChangeSearchInput={this.onChangeSearchInput}
          filter={this.filter}
        />
        <InfiniteScroll
          loadMore={this.getClientsData}
          loader={<h1 className="loading">Loading...</h1>}
          hasMore={hasMore}
        >
          <ul className="clients-container">
            {usersData.map(eachData => (
              <AllItem key={eachData.id} userDetails={eachData} />
            ))}
          </ul>
        </InfiniteScroll>
      </div>
    )
  }
}
export default All
