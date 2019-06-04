import {createAction} from 'redux-actions';
import axios from 'axios'
import data from '../Webdev_data2.json'

/*
Creating an actin which utilizes axios to make a call to an api and
using redux thunk, access the dispatch in order toto store the data
in the global state tree.
*/
export const getGraphData = () => (dispatch) => {
  console.log("in getting data")
  console.log(data[0])
  //dispatch(createAction("GET_GRAPH_DATA_BEGIN")());
  // return axios.get('../Webdev_data2.json').then((response) => {
  //   console.log(response)
  //   if(response.status !=200) {
  //     console.log("REJECTED")
  //     console.log(response.message)
  //   } else if(response.status== 200) {
  //     console.log(response.data)
  //     console.log("after first")
  //     console.log(response.data)
  //     dispatch(createAction("GET_GRAPH_DATA_COMPLETE")(response.data[0]))
  //   }
  // }).catch((error) => {
  //   console.log("in catch")
  //   console.log(error)
  // })
  dispatch(createAction("GET_PRODUCT_DATA_COMPLETE")(data[0]))
}
