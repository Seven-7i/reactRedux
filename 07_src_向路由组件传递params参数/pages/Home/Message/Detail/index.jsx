import React, { Component } from 'react'
// import {} from "react-router-dom"

const info = [
  {id: '01', content: 'this is number one'},
  {id: '02', content: 'this is number two'},
  {id: '03', content: 'this is number three'}
]
export default class Detail extends Component {
  render() {
    const {params} = this.props.match
    let msg = info.find(o => {
      return o.id === params.id
    })
    return (
      <ul>
        {/* {
          info.find
        } */}
        <li>ID: {params.id}</li>
        <li>Title: {params.title}</li>
        <li>Content: {msg.content}</li>
      </ul>
    )
  }
}
