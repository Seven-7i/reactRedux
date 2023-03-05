import React, { Component } from 'react'
// 引入redux————action文件
import {increment,decrement,increamentAsync} from '../../redux/actions/count'
// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
// 使用connect()()创建并暴露一个Count的容器组件

class Count extends Component {

  increment = () => {
    const {value} = this.selectNumber
    this.props.increment(parseInt(value))
  }
  
  decrement = () => {
    const {value} = this.selectNumber
    this.props.decrement(parseInt(value))
  }
  
  incrementIfOdd = () => {
    const {value} = this.selectNumber
    if(this.props.count % 2 !== 0) {
      this.props.increment(parseInt(value))
    }
  }

  incrementAsync = () => {
    const {value} = this.selectNumber
    this.props.increamentAsync(parseInt(value), 1000)
  }
  
  render() {
    return (
      <div>
        <h2>我是Count组件,下方组件的总人数为：{this.props.personCount}</h2>
        <h1>当前求和为: {this.props.count}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

export default connect(
  state => ({
    count: state.count, 
    personCount: state.persons.length
  }), 
  {
    increment,
    decrement,
    increamentAsync
  }
)(Count)