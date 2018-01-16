import ApiClient from '../../api/client'
export const CREATED_APPLICATION = 'CREATED_APPLICATION'

const api = new ApiClient()

export default (newApplication) => {
  return dispatch => {
  api
			.post("applications", newApplication)
      .then((res) => {
        dispatch({
					type: CREATED_APPLICATION,
					payload: res.body
				});
      })
      .catch(error => {
        console.log(error)
      })
  }
}
