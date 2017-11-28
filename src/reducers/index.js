const INITIAL_STATE = {
  foodItems: [
   { food: "almond butter", calories: 200, meal: "Meal 1" },
   { food: "coffee", calories: 10, meal: "Meal 1" },
   { food: "1 grilled cheese sandwich", calories: 400, meal: "Meal 2" },
   { food: "tomato soup", calories: 300, meal: "Meal 2" }
  ],
  calorieGoal: 2000,
  isLoading: true,
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "REGISTER":
        const newFoodItems = state.foodItems.slice(0);
        newFoodItems.push(action.foodSubmission);
        return Object.assign({}, state, {
          foodItems: newFoodItems
        });
    case "REQUEST":
      return Object.assign({}, state, {
        foodItems: [],
        isLoading: true
      });
    case "RECEIVE":
      return Object.assign({}, state, {
        foodItems: action.foodItems,
        isLoading: false
      });
    default:
      return state;
  }
}

// var foodOptions = [
//  { food: "cookies", calories: 500 },
//  { food: "donuts", calories: 600 },
//  { food: "coffee", calories: 10 }
// ];
