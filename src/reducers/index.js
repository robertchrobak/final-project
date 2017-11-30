const INITIAL_STATE = {
  foodItems: [
   { food: "almond butter", calories: 25, meal: "Meal 1" },
   { food: "coffee", calories: 25, meal: "Meal 2" },
   { food: "1 grilled cheese sandwich", calories: 25, meal: "Meal 3" },
   { food: "tomato soup", calories: 25, meal: "Snacks" }
  ],
  calorieGoal: 1000,
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

// var foodOptions = [
//  { food: "cookies", calories: 500 },
//  { food: "donuts", calories: 600 },
//  { food: "coffee", calories: 10 }
// ];
