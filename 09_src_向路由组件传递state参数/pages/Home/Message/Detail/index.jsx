import React, { Component } from 'react'

const info = [
  {id: '01', content: 'this is number one'},
  {id: '02', content: 'this is number two'},
  {id: '03', content: 'this is number three'}
]
export default class Detail extends Component {
  render() {
    console.log(this.props)
    const {state} = this.props.location
    const {id, title} = state
    let msg = info.find(o => {
      return o.id === id
    })
    return (
      <ul>
        {/* {
          info.find
        } */}
        <li>ID: {id}</li>
        <li>Title: {title}</li>
        <li>Content: {msg.content}</li>
      </ul>
    )
  }
}
