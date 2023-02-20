import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
      // 有一个children属性指定的值为标签体内容 children="About"  <MyNavLink to='/about'>About</MyNavLink>
      <NavLink className='list-group-item' {...this.props}></NavLink>
    )
  }
}
