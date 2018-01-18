import ApiClient from '../../api/client'
export const REMOVED_APPLICATION = 'REMOVED_APPLICATION'

const api = new ApiClient()

export default (eId) => {
  return dispatch => {
  api
			.delete(`applications/${eId}`)
      .then((res) => {
        dispatch({
					type: REMOVED_APPLICATION,
					payload: res.body
				});
      })
      .catch(error => {
        console.log(error)
      })
  }
}
