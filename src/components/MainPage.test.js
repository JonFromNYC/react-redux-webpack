import {shallow} from 'enzyme';
import React from 'react';
import MainPage from './MainPage.component';

let wrapper;
beforeEach( ()=>{
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots:[],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>)
});

it('renders MainPage', ()=>{
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', ()=>{
    expect(wrapper.instance().filterRobots()).toEqual([]);
})

// it('expect to render MainPage component', ()=>{
//     const mockStore = {
//         robots:[],
//         searchField:''
//     };
//     expect(shallow(<MainPage store={mockStore}/>)).toMatchSnapshot();
// });