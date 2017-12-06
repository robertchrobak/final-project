// export function register(foodSubmission) {
//   return {
//     type: "REGISTER",
//     foodSubmission: foodSubmission
//   }
// }


import $ from 'jquery-ajax';

// trigger the process, make the request, and call the other two actions
export function fetchFoodItems(foodSubmission) {
  console.log("Action", foodSubmission.name);
    // when using async actions and thunk, instead of returning the action object,
    // we return a callback function. This has a `dispatch` parameter that we
    // can use to dispatch other actions whenever we want.
    return function(dispatch) {
        dispatch(requestFoodItems());
        // $.get("/dummy.json", function(data) {

        // ROBERTS KEY AND ID
        // var url = "https://api.nutritionix.com/v1_1/search/"+foodSubmission.name+"?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=adfc65c6&appKey=a4e2e4f78ba1945fb06847d48cffed03";
        // CECILS KEY AND ID
        // var url = "https://api.nutritionix.com/v1_1/search/"+foodSubmission.name+"?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=adfc65c6&appKey=a4e2e4f78ba1945fb06847d48cffed03";

        // ANTHONY'S KEY AND ID
        var url = "https://api.nutritionix.com/v1_1/search/"+foodSubmission.name+"?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=bbd09184&appKey=881fdfa0c176bb627ba179d44130e828";
// this is the ENDPOINT ^^^

// This is the Read in CRUD .
        $.get(url, function(data) {
// find out how to hide API key

            // Here is where we dig into the response JSON to find the data we actually need.
            // console.log(data);

            const foodItem = { food: data.hits[0].fields.item_name, calories: data.hits[0].fields.nf_calories, meal: foodSubmission.mealChoice };
            dispatch(receiveFoodItem(foodItem));
        });
    }
}

// Allow the reducer to update the state when the request starts loading.
function requestFoodItems() {
    return {
        type: "REQUEST_FOODITEMS"
    }
}

// Allow the reducer to update the state when the request finishes and brings back data.
function receiveFoodItem(foodItem) {
    return {
        type: "RECEIVE_FOODITEM",
        foodItem
    }
}

export function fetchCalorieGoal(calorieGoal) {
    return {
      type: "RECEIVE_CALORIEGOAL",
      calorieGoal: calorieGoal
    }
}

// export function removeFoodItem(index) {
//     this.setState(prevState => {
//         // Copy contacts array before modifying. We should not modify the original.
//         const newFoodItems = prevState.foodItems.slice();
//         foodItems.splice(index, 1); // Remove the item at this index.
//         // update the contacts in state
//         return { foodItems: newFoodItems };
//     });
// }

export function loginUser(username) {
    return {
        type: "LOGIN_USER",
        username:username.username
    }
}

export function removeFoodItem(index) {
    return {
      type: "REMOVE_FOOD_ITEM",
      index
    }
}
