import {
  FETCHED_APPLICATIONS,
  CREATE_APPLICATION
} from '../actions/applications'

export default (state = [], {type, payload} = {}) => {
  switch(type) {
    case FETCHED_APPLICATIONS :
      return [ ...payload ]
    case CREATE_APPLICATION :
      return [{ ...payload }].concat(state)
    default :
      return state
  }
}
