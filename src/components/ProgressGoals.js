import React, { useState } from 'react'

function GoalForm(props) {
    const [formData, setFormData] = useState({ goal:"", by:"" })

    function changeHandler(e) {
        setFormData({ ...formData, [e.target.value]: e.target.value })
    }

    function submitHandler(e) {
        e.preventDefault();
        props.onAdd(formData);
        setFormData({ goal: "", by: "" });
    }

    return (
        <>
            <h1>My App's progress</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name='goal' placeholder='Goal' value={formData.goal} onChange={changeHandler} />
                <input type="text" name='by' placeholder='By...' value={formData.by} onChange={changeHandler} />
                <button>Submit Goal</button>
            </form>
        </>
    )
}


function ListOfGoals(props) {
    return (
        <ul>
            {props.allGoals.map((g) => {
                <li key={g.goal}>
                    <span>My goal is to {g.goal}, by {g.by}</span>
                </li>
            })}
        </ul>
    )
}


export const ProgressGoals = () => {

    const [allGoals, updateAllGoals] = useState([]);

    function addGoal(goal) {
        return updateAllGoals([...allGoals, goal]);
    }

    return (
        <div className='ProgressGoals'>
            <GoalForm onAdd={addGoal} />
            <ListOfGoals allGoals={allGoals} />
        </div>
    )
}
