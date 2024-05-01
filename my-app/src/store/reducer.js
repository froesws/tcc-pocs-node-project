const initState = {
    identity: ''
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'DUMMY_ACTION':
            return {
                ...state,
                identity: action.identity
            }
        default:
            return state
    }
}

export default reducer;