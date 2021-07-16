import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { Route , Link} from 'react-router-dom';
import { render } from '@testing-library/react';
import Lists from './lists';
import creteList from './createList';

function App() {
  const [list,setList] = useState([]);
  const [inputData, setInputData] = useState('');
  const handleAddItem = () => {
    const newList = [...list, {title: inputData}];
    setList(newList);
    setInputData('');
    console.log(list)
  }

  return (
    <div className = "App">
      <h1> Laura's Shopping List </h1>
      <div className = "Shopping Items">
        <input type = "text" value = {inputData} onChange={(event) => setInputData(event.target.value)} />
        <button onClick = {() => handleAddItem()}>
          Enter
        </button>  
      </div>
      <div className = 'list'>
        <Route path = "/" component={Lists}/>
        {list.map((item,index) => {
          return (
            <div>
              <p> {item.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;