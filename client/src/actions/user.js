import * as api from '../api'

export const fetchUsers = () => async dispatch => {
    const { data } = await api.fetchUsers()

    dispatch({ type: 'FETCH_ALL', payload: data })
}