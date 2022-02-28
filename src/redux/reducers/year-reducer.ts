const yearReducer = (
  action = { type: 'YEAR', payload: 2022 },
  state = 2000
) => {
  switch (action.type) {
    case 'YEAR':
      return action.payload
    default:
      return state
  }
}

export default yearReducer
