

import React from 'react';
import TodosList from './TodosList';
import Header from './Header';


const TodoContainer = () => {

    const state = [
        {
            id:1,
            title: 'item 1'
        },
        {
            id:2,
            title: 'item 2'
        },
        {
            id:3,
            title: 'item 3'
        }
    ]

    return (
        <div>
            <Header/>
            <TodosList todos={state} />
        </div>
    )
}

export default TodoContainer
