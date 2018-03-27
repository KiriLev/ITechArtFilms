export default (state = [], action) => {
    switch (action.type) {
        case 'LOAD_FILM':
            return action.payload;
        default:
            return state
    }
}
