import React, {useState} from 'react'
import './App.css'
import {
  Route,
  Link,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'

import CreateList from './CreateList'
import Lists, {List} from './Lists'

function App () {
  const [allLists, setAllLists] = useState({})

  return (
    <Router>
      <div className = "App">
        <div className="App-intro">
          <Switch>
            <Route path ={'/createList'}><CreateList setAllLists = {setAllLists} /></Route>
            <Route path={'/Lists/:listId'}> <List allLists = {allLists} setAllLists = {setAllLists}/> </Route>
            <Route path= {'/Lists'}><Lists allLists = {allLists} setAllLists = {setAllLists} /> </Route>
          </Switch>
        </div>
        <div className="menu">
          <ul>
            <li> <Link to="/createList">{'createList'}</Link> <Link to="/Lists">{'Lists'}</Link></li>
          </ul>
        </div>
      </div>
    </Router>
  )
}

export default App
