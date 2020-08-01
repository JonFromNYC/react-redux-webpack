import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card.component';

// const wrapper = shallow(<Foo />);
it('expect to render a Card component', ()=>{
    expect(shallow(<Card />)).toMatchSnapshot();
});