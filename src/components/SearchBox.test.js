import {shallow} from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox.component';

// console.log("Shallow Test:\t",shallow(<SearchBox />).length); //length === 1
describe('<SearchBox />', ()=>{
    it('renders a SearchBox component', ()=>{
        expect(shallow(<SearchBox />)).toMatchSnapshot();
    });
})