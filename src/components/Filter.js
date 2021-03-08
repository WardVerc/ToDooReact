import React from 'react';

const Filter = ({ setFilter }) => {

    const filterHandler = (event) => {
        setFilter(event.target.value);
    };

    return (
        <select onChange={filterHandler}>
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="not done">Not done</option>
        </select>
    );
};

export default Filter;