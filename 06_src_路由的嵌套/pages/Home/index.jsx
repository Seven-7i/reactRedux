import React, { Component } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
// import News from './News'
// import Message from './Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className='nav nav-tabs'>
            <li>
              <MyNavLink to='/home/news'>News</MyNavLink>
            </li>
            <li>
              <MyNavLink to='/home/message'>Message</MyNavLink>
            </li>
          </ul>
          {/* <Routes>
            <Route path='/home/news' element={<News/>}></Route>
            <Route path='/home/message' element={<Message/>}></Route>
          </Routes> */}
          <Outlet></Outlet>
        </div>
      </div>
    )
  }
}
