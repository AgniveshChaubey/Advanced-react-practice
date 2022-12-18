import React, { useRef, useState } from 'react'

export const Form = () => {
    const [value, setValue] = useState("");

    // const handleSubmit = () => {
    //     const inputValue = inputRef.current.value;
    // }
    const handleChange = (e) => {
        return setValue(e.target.value)
    }

    return (
        <form >
            Form
            <input
                type="text"
                value={value}
                onChange={handleChange}
            />
        </form>
    );
};
