import ApiClient from '../../api/client'
export const UPDATED_APPLICATION = 'UPDATED_APPLICATION'

const api = new ApiClient()

export default (appId, application) => {
  return dispatch => {
  api
			.patch(`applications/${appId}`, application )
      .then((res) => {
        dispatch({
					type: UPDATED_APPLICATION,
					payload: res.body
				});
      })
      .catch(error => {
        console.log(error)
      })
  }
}
