import React from 'react';
import Button from 'react-bootstrap/Button';


const Form = ({ setInputText, inputText, todos, setTodos }) => {

    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    };

    const submitTodoHandler = (event) => {
        //bij elke klik zal hij refreshen
        //dit hindert het refreshen
        event.preventDefault();

        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
        ]);

        setInputText("");

    };

    return (
        <form className="form">
            <input value={inputText} onChange={inputTextHandler} type="text" className="inputForm" />
            <Button onClick={submitTodoHandler} type="submit" className="addButton" variant="danger">Add!</Button>
        </form>
    );
}

export default Form;