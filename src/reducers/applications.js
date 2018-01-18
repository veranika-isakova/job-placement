import {
  FETCHED_APPLICATIONS,
  CREATED_APPLICATION,
  REMOVED_APPLICATION
} from '../actions/applications'

export default (state = [], {type, payload} = {}) => {
  switch(type) {
    case FETCHED_APPLICATIONS :
      return [ ...payload ]
    case CREATED_APPLICATION :
      return [{ ...payload }].concat(state)
    case REMOVED_APPLICATION :
      return state
    default :
      return state
  }
}
