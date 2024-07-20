"use client";

import React , { useState } from 'react';


const CreateList = () => {
    const numbers = ["Task1", "Task2", "Task3"]; //Initialise List
    const [list, setList] = React.useState(numbers);
    const [name, setName] = React.useState('');

    //Handle Change event : create
    function handleChange(event : any) {
        setName(event.target.value);
    }

    //Handle add event : create
    function handleAdd() {
        if (name !== '') {
            const newList = list.concat([name]);
            setList(newList);
            setName('');
        }
    }

    function handleDelete(itemTask : any) {
        const newList = list.filter((item) => item !== itemTask);
        setList(newList);
    }
    
    const initArray = new Array(numbers.length).fill(false);
    const [colorState, setColorState] = React.useState(initArray);


    function handleColor(index : any) {
        const newColor = colorState.map((item, i) => (i === index ? !item : item));
        setColorState(newColor);
    }


    return (
        <>
            <p>Active task</p>
            <ul style={{listStyleType : "none"}}>{list.map((ListNumber, index) => (
                <li key={index}>
                    <input type="checkbox" />{ListNumber}            
                    <label>    
                        <button type="button" onClick={() => handleDelete(ListNumber)}>Delete</button>
                    </label>
                </li>))}
            </ul>
            <input type="text" value={name} onChange={handleChange} />
            <button type="button" onClick={handleAdd}>Add Task</button>
        </>
    );
};

export default CreateList;

//Good afternoon, this is the best I can attempt for assignment 2