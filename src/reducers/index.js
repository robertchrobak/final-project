const INITIAL_STATE = {
  foodItems: [
  ],
  calorieGoal: null,
  isLoading: true,
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "RECEIVE_FOODITEM":
      return Object.assign({}, state, {
        foodItems: [ ...state.foodItems, action.foodItem ]
      })
    case "RECEIVE_CALORIEGOAL":
      return Object.assign({}, state, {
        calorieGoal: action.calorieGoal
      })
    default:
      return state;
  }
}
