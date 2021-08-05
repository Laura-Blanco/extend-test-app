import React from 'react'
import './Lists.css'
import {
  Link,
  useParams,
} from 'react-router-dom'

function Lists (props) {
  return (
    <div className = 'lists'>
      <h1>{'All Lists'}</h1>
      {Object.values(props.allLists).map((list, listIndex) => {
        return (
          <div className = 'oneList' key = {listIndex} >
            <li className = 'Link' key = {listIndex}> <Link to = {`/Lists/${list.id}`}>{list.title}</Link> </li>
            <p> {(list.items).map((listItem, i) => {
              return (
                <div className = 'List Items' key = {i}>
                  <p> {listItem}</p>
                </div>
              )
            })} </p>
          </div>
        )
      })}
    </div>
  )
}

function List (props) {
  let {listId} = useParams()
  const handleRemoveItem = (inputData, listId) => {
    const list = props.allLists[listId]
    list.items = list.items.filter((oneItem) => oneItem !== inputData)
    let newAllLists = {...props.allLists, [list.id]: list}
    props.setAllLists(newAllLists)
  }

  return (
    <div>
      {(props.allLists[listId]).items.map((listItem, index) => {
        return (
          <div className = 'Detail Page' key = {index}>
            <p> {listItem} </p>
            <button onClick = {() => handleRemoveItem(listItem, listId)}>{'Remove'}</button>
          </div>
        )
      })}
    </div>
  )
}

export default Lists
export {
  List,
}
