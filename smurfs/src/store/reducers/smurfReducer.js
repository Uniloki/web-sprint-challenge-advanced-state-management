import { FETCHING_SMURFS_START, FETCH_SMURFS_SUCCESS } from '../actions'

const initialState = {
	smurfs: [],
	isLoading: false,
	error: '',
}

export const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_SMURFS_START:
			return {
				...state,
				isLoading: true,
				error: '',
			}
		case FETCH_SMURFS_SUCCESS:
			return {
				...state,
				isLoading: false,
				smurfs: action.payload,
			}
		default:
			return state
	}
}
