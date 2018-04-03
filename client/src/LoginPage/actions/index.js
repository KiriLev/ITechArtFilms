export const loginSucceed = function (data) {
    return {
        type: 'LOGIN_SUCCEED',
        payload: data
    }
}

export const loginFailed = function (data) {
    return {
        type: 'LOGIN_FAILED',
        payload: data
    }
}