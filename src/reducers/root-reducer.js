import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions'

const rootReducer = handleActions({
  ["GET_PRODUCT_DATA_COMPLETE"] : (state, action) => (
    Object.assign({}, state, {productData: action.payload})
  )
}, {
  todoList: 1,
  message: "hello",
  productData: null
})

export default rootReducer;

// export default (state = {}, action) => {
//   switch(action.type) {
//     case 'ADD TODO':
//       return {
//         todoList: action.payload
//       }
//     default: return {
//       todoList: "init"
//     }
//     return state
//   }
// }
