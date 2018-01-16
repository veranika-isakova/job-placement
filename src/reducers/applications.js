import {
  FETCHED_APPLICATIONS,
  CREATED_APPLICATION
} from '../actions/applications'

export default (state = [], {type, payload} = {}) => {
  switch(type) {
    case FETCHED_APPLICATIONS :
      return [ ...payload ]
    case CREATED_APPLICATION :
      return [{ ...payload }].concat(state)
    default :
      return state
  }
}
