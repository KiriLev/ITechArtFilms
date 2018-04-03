export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCEED':
            return action.payload;
        case 'LOGIN_FAILED':
            return action.payload;
        default:
            return state
    }
}
