import React, { Component } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <Header></Header>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              {/* <a className='list-group-item' href="./about.html">About</a>
              <a className='list-group-item active' href="./home.html">Home</a> */}

              {/* <Link className='list-group-item' to='/about'>About</Link>
              <Link className='list-group-item' to='/home'>Home</Link> */}

              {/* <NavLink className='list-group-item' to='/about'>About</NavLink>
              <NavLink className='list-group-item' to='/home'>Home</NavLink> */}
              <MyNavLink to='/about'>About</MyNavLink>
              <MyNavLink to='/home'>Home</MyNavLink>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                <Switch>
                  <Route path='/about' component={About}></Route>
                  <Route path='/home' component={Home}></Route>
                  <Redirect to="/about"></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

