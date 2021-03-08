import React from 'react';
import Button from 'react-bootstrap/Button';

const ToDo = ({ text, setTodos, todos, todo }) => {

    const deleteHandler = () => {
        //filter itereert door elke todo in todos
        //checkt de id
        //indien id niet gelijk is blijft die
        //indien id gelijk is wordt die geskipt
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const doneHandler = () => {
        setTodos(todos.map((el) => {
            if (el.id === todo.id) {
                return {
                    ...el, completed: !el.completed
                };
                
            }
            return el;
        }));
    };

    return(
        <div className="todo">
            <li className={`${todo.completed ? "done" : "" }`} >{text}</li>
            <Button onClick={doneHandler} className="buttonDone">Done</Button>
            <Button onClick={deleteHandler} >Delete</Button>
        </div>
    );
}

export default ToDo;