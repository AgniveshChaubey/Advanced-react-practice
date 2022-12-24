import React from "react";
import { useState } from "react";
import './styles.css'

export default function RadioGrp() {
    const [selected, setSelected] = useState("");
    return (
        <div className="RadioGrp">
            <h2>How did you hear about Little Lemon?</h2>
            <RadioGroup onChange={setSelected} selected={selected}>
                <RadioOption value="social_media">Social Media</RadioOption>
                <RadioOption value="friends">Friends</RadioOption>
                <RadioOption value="advertising">Advertising</RadioOption>
                <RadioOption value="other">Other</RadioOption>
            </RadioGroup>
            <button disabled={!selected} className='btn btn-outline-success'>Submit</button>
        </div>
    );
}

export const RadioGroup = ({ onChange, selected, children }) => {
    // Use React.Children.map and React.cloneElement to clone the children
    // and pass the correct props to each RadioOption
    const RadioOptions = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            onChange,
            checked: child.props.value === selected,
        });
    });
    return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
    // Hook up the onChange handler to call the onChange prop passed to RadioGroup
    // Also, make sure to pass the correct checked prop to the input element
    return (
        <div className="RadioOption">
            <input
            id={value}
            type="radio"
            name={value}
            value={value}
            checked={checked}
            onChange={(e)=>{
                onChange(e.target.value);
            }}
            />
            <label htmlFor={value}>{children}</label>
        </div>
    );
};


