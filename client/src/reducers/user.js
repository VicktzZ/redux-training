export const userReducer = (users=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        default:
            return users
    }
}