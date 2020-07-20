import {CHANGE_SEARCH_FIELD,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCESS,
        REQUEST_ROBOTS_FAILED
} from './constants';
// Search Field Action - takes text input from the user, returns an object 
// Action is to change the search field and send the text to the reducer
export const setSearchField = (text) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = ()=> (dispatch) =>{
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
};