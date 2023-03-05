// 引入createStore,专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware} from 'redux'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// 引入汇总之后的reducer
import reducer from './reducers'

// const store = createStore(countReducer)


export default createStore(reducer, applyMiddleware(thunk))