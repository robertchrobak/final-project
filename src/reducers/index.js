const INITIAL_STATE = {
  foodItems: [
   { food: "cookies", calories: 500 },
   { food: "donuts", calories: 600 },
   { food: "coffee", calories: 10 }
 ],
  isLoading: true,
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
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
