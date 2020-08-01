import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList.component';

it('expect to render a CardList', () => {
    const mockRobots = [
        {
            id:1, name:'John Snow',username:'JohnJohn',email:'j@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
});