const INITAIL_STATE = {
    user: {},
    allUsers: []
}

export default (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case "GETUSER":
            return ({
                ...state,
                user: action.user
            })
        case "GETALLUSERS":
            return ({
                ...state,
                allUsers: action.allUsers
            })

        default:
            return state
    }
}