const yearReducer = (state = { state: null }, action) => {
  switch (action.type) {
    case 'YEAR':
      return Object.assign({}, state, { state: action.payload })
    default:
      return state
  }
}

export default yearReducer
