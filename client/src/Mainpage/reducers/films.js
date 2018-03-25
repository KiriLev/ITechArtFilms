export default (state = [], action) => {
    switch (action.type) {
        case 'LOAD_FILMS':
            return [...state, ...action.payload];
        default:
            return state
    }
}
