import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { Route , Link, Router} from 'react-router-dom';
import { render } from '@testing-library/react';
import Lists from './lists';
import createList from './createList';

export default function App(){
  return(
    <Router>
      <Route path="/" component={createList}/>
    </Router>
  );
}