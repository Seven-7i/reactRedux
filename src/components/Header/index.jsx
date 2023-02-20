import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {

  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }

  go = () => {
    this.props.history.go(-2)
  }

  render() {
    return (
      <div className='page-header'>
        <h2>React Router Demo</h2>
        <button onClick={this.back}>回退</button>&nbsp;
        <button onClick={this.forward}>前进</button>&nbsp;
        <button onClick={this.go}>go</button>
      </div>
    )
  }
}

// withRouter的作用是把一个“一般组件”变成“路由组件”,让这个“一般组件”拥有this.props.history上的方法
export default withRouter(Header)