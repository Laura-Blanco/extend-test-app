import React, { useState } from 'react'
import './App.css'
import {v4 as uuidv4 } from 'uuid'

function CreateList (props) {
  const [list, setList] = useState([])
  const [inputData, setInputData] = useState('')
  const handleAddItem = () => {
    const newList = [...list, {title: inputData}]
    setList(newList)
    setInputData('')
  }

  const [listName, setlistName] = useState('')
  const handleAddList = () => {
    // props.setAllLists((addList) => ([...addList, {id: uuidv4(), title: listName, items: list.map((item) => item.title)}]))
    const newList = {id: uuidv4(), title: listName, items: list.map((item) => item.title)}
    props.setAllLists((allLists) => ({...allLists, [newList.id]: newList}))
    setList([])
    setlistName('')
  }

  return (
    <div className = "Shopping Items">
      <h1> {'Laura\'s Shopping List'} </h1>
      <input type = "text" value = {inputData} onChange={(event) => setInputData(event.target.value)} />
      <button onClick = {() => handleAddItem()}> {'Add item'} </button>
      <div className = 'list'>
        {list.map((item, index) => {
          return (
            <div key = {index} >
              <p> {item.title}</p>
            </div>
          )
        })}
      </div>
      <input type = "text" value = {listName} onChange={(event) => setlistName(event.target.value)} />
      <button onClick = {() => handleAddList()}>
        {'Save'}
      </button>
    </div>
  )
}

export default CreateList
