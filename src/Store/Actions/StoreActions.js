import * as actionTypes from './ActionTypes'
import StoreService from '../Services/StoreService'

//-----BACKUP ACTION-----------------------------
export const backupData = () => {
	return dispatch => {
		StoreService.backupData()
			.then(response => {
				dispatch({ type: actionTypes.BACKUP_DATA })
			})
			.catch(error => {
				console.log('[StoreActions][backupData]error: ', error)
			})
	}
}
