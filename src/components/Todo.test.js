import React from 'react';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Todo from './Todo.js'
configure({adapter: new Adapter()});

describe('Todo', () => {
    const createTodo = props => (
                                <div>
                                     <Todo text={props.name}/>
                                </div>
)

    it('it should render an li element when given a prop', () => {
        const liElement = render(createTodo({name: 'Hello world!'})).find('li.text').length

    console.log('test output ', liElement)
    expect(liElement).toEqual(1);
    })

    it('it should render an li element when given a prop', () => {
        const liElement = render(createTodo({name: 'Hello world!'})).find('li.text').text()

    console.log('test output ', liElement)
    expect(liElement).toEqual('Hello world!');
    })
})