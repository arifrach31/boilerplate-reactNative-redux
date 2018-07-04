import { combineReducers } from 'redux'
import { loading, success, failed } from './processor'
const rootReducers = combineReducers({
  loading,
  success,
  failed  
})

export default rootReducers