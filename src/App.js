import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import createList from './createList'
import Lists from './Lists'

function App(){
    const [list,setList] = useState([]);
    const [inputData, setInputData] = useState('');
    const handleAddItem = () => {
      const newList = [...list, {title: inputData}];
      setList(newList);
      setInputData('');
      console.log(list)
    }

    return(
      <Router>
      <div className = "App">
        <h1> Laura's Shopping List </h1>
        <div className = "Shopping Items">
         <input type = "text" value = {inputData} onChange={(event) => setInputData(event.target.value)} />
         <button onClick = {() => handleAddItem()}>
          Enter
        </button>  
        </div>
        <div className = 'list'>
          {list.map((item,index) => {
            return (
             <div>
                <p> {item.title}</p>
             </div>
            )
         })}
        </div>
        <div className="menu">
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/createList">createList</Link> </li>
              <li> <Link to="/Lists">Lists</Link> </li>
            </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path="/" component={createList} />
            <Route path="/" component={Lists} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }

export default App;