const INITIAL_STATE = {
  foodItems: [
  ],
  calorieGoal: 2000,
  isLoading: true,
  showLogin: true,
  showApp: false,
  username: "usernameplaceholder"
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
      case "REMOVE_FOOD_ITEM":
            const newContacts = state.contacts.slice(0);
            newContacts.splice(action.index, 1);

            return Object.assign({}, state, {
                contacts: newContacts
            });
    default:
      return state;
  }
}
