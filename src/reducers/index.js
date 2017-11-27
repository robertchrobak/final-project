const INITIAL_STATE = {
    foodItems: [
      { name: "",
      calorieCount: 0 }
    ]
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "ADD":
            const newFoodItems = state.FoodItems.slice(0);
            newFoodItems.push(action.FoodItems);
            return Object.assign({}, state, {
                FoodItems: newFoodItems
            });
        default:
            return state;
    }
}
