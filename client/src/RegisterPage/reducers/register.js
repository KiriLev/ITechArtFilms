export default (state = {}, action) => {
    switch (action.type) {
        case 'REGISTER_USER':
            return action.payload;
        default:
            return state
    }
}
