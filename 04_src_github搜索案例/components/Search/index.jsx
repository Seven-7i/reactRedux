import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    const {value: keyWord} = this.keyWordElement
    this.props.updateAppState({isFirst: false, isLoading: true})
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      res => {
        console.log(res)
        this.props.updateAppState({isLoading: false, users: res.data.items})
      },
      error => {
        this.props.updateAppState({isLoading: false, err: error.message})
      }
    )
  }

  render() {
    return (
      <section className='jumbotron'>
        <h3 className='jumbotron-heading'>Search Github Users</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
