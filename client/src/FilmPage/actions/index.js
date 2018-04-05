export const loadFilm = function (data) {
    return {
        type: 'LOAD_FILM',
        payload: data
    }
}


export const addComment = function (data) {
    return {
        type: 'ADD_COMMENT',
        payload: data
    }
}