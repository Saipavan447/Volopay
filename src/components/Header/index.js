import {BiVideo, BiPlus} from 'react-icons/bi'

import './index.css'

const Header = () => (
  <div className="nav-sections">
    <div className="nav-section-1">
      <h1 className="virtual">Virtual cards</h1>
      <p className="learn">
        <BiVideo className="icon-1" /> Learn more
      </p>
    </div>
    <button type="button" className="virtual-button">
      <BiPlus size={18} className="icon-2" /> Virtual card
    </button>
  </div>
)

export default Header
