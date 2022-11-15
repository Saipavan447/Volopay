import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Tab from './components/Tab'
import Your from './components/Your'
import All from './components/All'
import Blocked from './components/Blocked'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />

      <Tab />
      <div className="app-body">
        <Switch>
          <Route exact path="/all" component={All} />
          <Route exact path="/your" component={Your} />
          <Route exact path="/blocked" component={Blocked} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
