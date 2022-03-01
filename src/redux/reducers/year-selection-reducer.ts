const yearSelectionReducer = (state = { state: false }, action) => {
  switch (action.type) {
    case 'YEAR-SELECTION':
      return Object.assign({}, state, { state: action.payload })
    default:
      return state
  }
}

export default yearSelectionReducer
