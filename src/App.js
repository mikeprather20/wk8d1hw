import React, { Component } from 'react'
import Button from '@mui/material/Button'
import Feed from './Feed'
import Contact from './Contact'
import Home from './Home'
import Nav from './Nav'
import './App.css'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      users: {},
      name: 'Mikey',
      age: 34
    }
  }


  addToAge = ()=>{
    this.setState({age: this.state.age + 1})
  }


  render() {
    return (

      <BrowserRouter>

      <div className='main'>

        <Nav />
        {this.state.name}
        {this.state.age}
        <Button variant="contained" onClick={this.addToAge}>Add to age</Button>

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/feed' element={<Feed/>}/>
        </Routes>

      </div>

      </BrowserRouter>

    )
  }
}
