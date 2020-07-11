import { CHANGE_SEARCH_FIELD } from './constants';
// Search Field Action - takes text input from the user, returns an object 
// Action is to change the search field and send the text to the reducer
export const setSearchField = (text) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})