import React, { useRef, useState } from 'react'

export const Form = () => {
    const [name, setName] = useState("");

    // const handleSubmit = () => {
    //     const inputValue = inputRef.current.value;
    // }
    const handleChange = (e) => {
        return setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log("form submitted")
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className='field'>
                    <label htmlFor="name"> Name : </label>
                    <input
                        id='name'
                        type="text"
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <button disabled={!name} type='submit'>
                    Submit
                </button>
            </fieldset>
        </form>
    );
};
