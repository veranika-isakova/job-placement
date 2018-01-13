import ApiClient from '../../api/client'

export const FETCHED_APPLICATIONS = 'FETCHED_APPLICATIONS'

const api = new ApiClient()

export default () => {
  return dispatch => {

    api.get('applications')
      .then(res => dispatch({ type: FETCHED_APPLICATIONS, payload: res.body }))
      .catch(err => console.log(err))
  }
}
