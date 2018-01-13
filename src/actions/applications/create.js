import ApiClient from '../../api/client'
export const CREATE_APPLICATION = 'CREATE_APPLICATION'

const api = new ApiClient()

export default (newApplication) => {
  return dispatch => {
  api
			.post("applications", newApplication)
      .then((res) => {
        dispatch({
					type: CREATE_APPLICATION,
					payload: res.body
				});
      })
      .catch(error => {
        console.log(error)
      })
  }
}
