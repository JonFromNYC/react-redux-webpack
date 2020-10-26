import {CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

import actions from './actions';

describe('search robots', ()=>{

    const initialStateSearch = {
        searchField:''
    }

    // test if the initial state is blank because no search param was entered
    it('should return initial state', ()=>{
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''})
    })

    // test CHANGE_SEARCH_FIELD if input to the search field is recognized and when consumed remains the same
    // tests the state and the action
    it('should handle CHANGE_SEARCHFIELD', ()=>{
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'test-data'
        })).toEqual({
            searchField: 'test-data'
        })
    })
}); // end of search robots test

describe('request robots', ()=>{
    //initial state for the test
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: ''
    }
    // test the initial state before requesting robot data
    it('should return initial state', ()=>{
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })

    // now test the three states of 1) pending 2) success 3) failed
    it('should handle REQUEST_ROBOTS_PENDING action', ()=>{
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots:[],
            isPending: true
        })
    });

    // test success
    it('should handle REQUEST_ROBOTS_SUCCESS action', ()=>{
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id:'123',
                name: 'test',
                email: 'test@gmail.com'
            }]
        })).toEqual({
            robots:[],
            isPending: true
        })
    });
});// end of REQUEST_ROBOTS_SUCCESS test