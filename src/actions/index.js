export function register(foodSubmission) {
  return {
    type: "REGISTER",
    foodSubmission: foodSubmission
  }
}




// import $ from 'jquery-ajax';
//
// // trigger the process, make the request, and call the other two actions
// export function fetchStarships() {
//     // when using async actions and thunk, instead of returning the action object,
//     // we return a callback function. This has a `dispatch` parameter that we
//     // can use to dispatch other actions whenever we want.
//     return function(dispatch) {
//         dispatch(requestStarships());
//         $.get("https://swapi.co/api/starships/", function(data) {
//             // Here is where we dig into the response JSON to find the data we actually need.
//             const starships = data.results;
//             dispatch(receiveStarships(starships));
//         });
//     }
// }
//
// // Allow the reducer to update the state when the request starts loading.
// function requestStarships() {
//     return {
//         type: "REQUEST_STARSHIPS"
//     }
// }
//
// // Allow the reducer to update the state when the request finishes and brings back data.
// function receiveStarships(starships) {
//     return {
//         type: "RECEIVE_STARSHIPS",
//         starships
//     }
// }
