import React from 'react';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Todo from './Todo.js'
configure({adapter: new Adapter()});

describe('Todo', () => {
    const createTodo = props => <Todo text={props.name}/>

    it('it should render an li element when given a prop', () => {
        const liElement = render(createTodo({name: 'Hello world!'})).find('li');
    
        expect(liElement.toArray.have.lengthOf(1));
    })
})