import {Component} from 'react'
import {BsSearch, BsFilter} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import './index.css'

const cardHolderName = ['Zachariah', 'Bianka', 'Granville']

class Filter extends Component {
  state = {
    showSearchInput: false,
    cardTypeList: [],
    cardHolder: '',
  }

  onChangeCardType = event => {
    const {cardTypeList} = this.state
    const cardType = event.target.value
    if (cardTypeList.includes(cardType)) {
      const index = cardTypeList.indexOf(cardType)
      cardTypeList.splice(index, 1)
    } else {
      cardTypeList.push(cardType)
    }
    console.log(cardTypeList)

    this.setState({cardTypeList})
  }

  onChangeCardHolder = event => {
    this.setState({cardHolder: event.target.value})
  }

  onApply = () => {
    const {cardHolder, cardTypeList} = this.state

    let [cardType1, cardType2] = cardTypeList

    if (cardType1 === undefined) {
      cardType1 = ''
    } else if (cardType2 === undefined) {
      cardType2 = ''
    }

    const {applyFilters} = this.props
    applyFilters(cardHolder, cardType1, cardType2)
  }

  onClear = () => {
    this.setState({cardHolder: '', cardTypeList: []})
  }

  changeSearchIconState = () => {
    this.setState(prevState => ({showSearchInput: !prevState.showSearchInput}))
  }

  onChangeSearchInput = event => {
    const {changeSearchInput} = this.props
    changeSearchInput(event.target.value)
  }

  renderSearchInput = () => {
    const {searchInput} = this.props
    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={this.onChangeSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  renderFiltersPopup = () => {
    console.log('filters')
    return (
      <div>
        <p>Filters</p>
        <hr />
        <p>type</p>
        <div>
          <label htmlFor="subscription">Subscription</label>
          <input
            type="checkbox"
            id="subscription"
            value="subscription"
            onChange={this.onChangeCardType}
          />
        </div>

        <div>
          <label htmlFor="burner">Burner</label>
          <input
            type="checkbox"
            id="burner"
            value="burner"
            onChange={this.onChangeCardType}
          />
        </div>
      </div>
    )
  }

  renderFilterPopup = () => (
    <div className="filter-container">
      <Popup
        trigger={
          <p className="filter-inner">
            <BsFilter /> Filter
          </p>
        }
        position="bottom right"
      >
        <div className="filters-container">
          <p className="filter-heading">Filters</p>
          <p className="filter-name">Type</p>
          <div className="checkbox-container">
            <div className="checkbox">
              <input
                type="checkbox"
                id="subscription"
                value="subscription"
                className="check"
                onChange={this.onChangeCardType}
              />
              <label htmlFor="subscription" className="checkbox-name">
                Subscription
              </label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                id="burner"
                value="burner"
                className="check"
                onChange={this.onChangeCardType}
              />
              <label htmlFor="burner" className="checkbox-name">
                Burner
              </label>
            </div>
          </div>
          <div>
            <p className="filter-name">Cardholder</p>
            <select className="card-holder" onChange={this.onChangeCardHolder}>
              <option value="" disabled selected hidden>
                Select Cardholder
              </option>
              {cardHolderName.map(eachName => (
                <option value={eachName}>{eachName}</option>
              ))}
            </select>
          </div>

          <div className="buttons-container">
            <button
              className="apply-button"
              type="button"
              onClick={this.onApply}
            >
              Apply
            </button>
            <button
              className="clear-button"
              type="button"
              onClick={this.onClear}
            >
              Clear
            </button>
          </div>
        </div>
      </Popup>
    </div>
  )

  renderFiltersHeader = () => {
    const {showSearchInput} = this.state
    return (
      <div className="filters-header-container">
        {showSearchInput ? (
          <div
            className="search-input-container"
            onBlur={this.changeSearchIconState}
          >
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              onChange={this.onChangeSearchInput}
            />
            <BsSearch className="search-icon" />
          </div>
        ) : (
          <p className="filter-item" onClick={this.changeSearchIconState}>
            <BsSearch />
          </p>
        )}

        {this.renderFilterPopup()}
      </div>
    )
  }

  render() {
    return <div className="filter-section">{this.renderFiltersHeader()}</div>
  }
}

export default Filter
