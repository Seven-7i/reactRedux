import React, { Component } from 'react'
import store from '../../redux/store'
import {
  createIncreamentAction, 
  createDecreamentAction,
  createIncreamentAsyncAction
} from '../../redux/count_action'

export default class Count extends Component {

  // componentDidMount() {
  //   // 检测redux中状态的变化，只要变化，就调用render
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }
  
  increment = () => {
    const {value} = this.selectNumber
    store.dispatch(createIncreamentAction(parseInt(value)))
  }
  
  decrement = () => {
    const {value} = this.selectNumber
    store.dispatch(createDecreamentAction(parseInt(value)))
  }
  
  incrementIfOdd = () => {
    const {value} = this.selectNumber
    const count = store.getState()
    if(count % 2 !== 0) {
      store.dispatch(createIncreamentAction(parseInt(value)))
    }
  }

  incrementAsync = () => {
    const {value} = this.selectNumber
    // setTimeout(() => {
      store.dispatch(createIncreamentAsyncAction(parseInt(value), 500))
    // }, 500)
  }
  
  render() {
    console.log(store)
    return (
      <div>
        <h1>当前求和为: {store.getState()}</h1>
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
