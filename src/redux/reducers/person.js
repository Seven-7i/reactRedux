import { ADD_PERSON } from "../constant";

const initState = [
  {id: '001',name: '张三', age: 18}
]
// redux的reducer函数必须是一个纯函数
const personReducer = (preState = initState, action) => {
  const {type, data} = action
  switch(type) {
    case ADD_PERSON:
      // 这里不能用preState.unshift(data)   return preState，因为这样会导致personReducer不是一个纯函数
      // 纯函数的概念为：一类特别的函数，只要是同样的输入(实参),必定得到同样的输出(返回)
      // 纯函数必须遵守一下一些约束：1.不得改写参数数据。2.不会产生任何副作用，例如网络请求，输入和输出设备。3.不能调用Date.now()或者Math.random()等不纯的方法
      return [data, ...preState]
    default:
      return preState
  }
}

export default personReducer