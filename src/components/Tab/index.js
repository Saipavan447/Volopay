import {NavLink} from 'react-router-dom'
import {VscThreeBars} from 'react-icons/vsc'
import {BsGridFill} from 'react-icons/bs'

import './index.css'

const Tab = () => (
  <nav className="tab-section">
    <div className="tab-section-1">
      <NavLink
        className="your"
        to="/Your"
        activeStyle={{color: '#252525', textDecoration: 'underline red'}}
      >
        Your
      </NavLink>
      <NavLink
        className="all"
        to="/all"
        activeStyle={{
          color: '#252525',
          textDecoration: 'underline red',
        }}
      >
        All
      </NavLink>
      <NavLink
        className="blocked"
        to="/blocked"
        activeStyle={{color: '#252525', textDecoration: 'underline red'}}
      >
        Blocked
      </NavLink>
    </div>
    <div className="tab-section-2">
      <BsGridFill className="icon-3" />
      <VscThreeBars size={18} className="icon-4" />
    </div>
  </nav>
)
export default Tab
