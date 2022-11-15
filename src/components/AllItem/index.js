import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ImFire} from 'react-icons/im'
import {HiOutlineRefresh} from 'react-icons/hi'
import './index.css'

const AllItem = props => {
  const {userDetails} = props

  const {
    companyName,
    name,
    budgetName,
    spend,
    availableToSpend,
    cardType,
    expiry,
    limit,
    cardHolder,
  } = userDetails
  console.log(cardHolder)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const dateMonth = new Date(expiry)
  const month = months[dateMonth.getMonth()]
  const date = dateMonth.getDate()
  const monthDate = month + date

  const subscriptionClassNameSub =
    cardType === 'Subscription'
      ? `sub-icon-burner-none subscription-icon`
      : `sub-icon-burner-display subscription-icon`

  const subscriptionClassNameBurner =
    cardType === 'Burner'
      ? `sub-icon-sub-none subscription-icon`
      : `sub-icon-sub-display subscription-icon`

  const subscriptionType =
    cardType === 'Burner' ? 'Expiries:' : `${month} Limit:`

  const dateLimit =
    cardType === 'Burner' ? monthDate : `${limit} ${spend.currency}`

  return (
    <div className="card-container">
      <div className="card-section">
        <div className="card-section-top">
          <div className="card-section-top-1">
            <h1 className="title">{companyName}</h1>
            <p className="name">
              {name} &nbsp;
              {budgetName}
            </p>
            <p className="subscription">{cardType}</p>
          </div>
          <div className="card-section-top-2">
            <HiOutlineRefresh
              size={10}
              className={subscriptionClassNameBurner}
            />
            <ImFire size={10} className={subscriptionClassNameSub} />
            <p className="date">
              {subscriptionType} &nbsp;
              {dateLimit}
            </p>
          </div>
        </div>
        <div className="progress-bar-container">
          <ProgressBar>
            <ProgressBar variant="danger" now={spend.value} key={2} />
            <ProgressBar
              variant="success"
              now={availableToSpend.value}
              key={1}
            />
          </ProgressBar>
        </div>
        <div className="bottom-section">
          <div className="bottom-section-1">
            <div className="bottom-section-inner">
              <p className="spent-color">.</p>
              <p className="spent">Spent</p>
            </div>
            <div className="bottom-section-inner">
              <p className="ava-color">.</p>
              <p className="ava">Available to spend</p>
            </div>
          </div>
          <div className="bottom-section-2">
            <p className="bottom-section-inner-2">
              {spend.value} &nbsp;
              {spend.currency}
            </p>
            <p className="bottom-section-inner-2">
              {availableToSpend.value} &nbsp;
              {availableToSpend.currency}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllItem
