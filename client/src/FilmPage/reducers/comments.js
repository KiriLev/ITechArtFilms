export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return action.payload;
        default:
            return state
    }
}
