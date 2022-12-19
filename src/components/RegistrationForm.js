import React, { useState } from 'react';
import { validateEmail } from './utils';


export const PasswordErrorMessage = () => {
    return (
        <p className='FieldError' style={{ color: 'red' }}>Password should have at least 8 characters</p>
    )
}


export const RegistrationForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState({
        value: '',
        isTouched: false
    });
    const [role, setRole] = useState('role');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Accoutn created')
        setFirstName('');
        setLastName('');
        setEmail('');
        setPasswd({
            value: "",
            isTouched: false,
        });
        setRole("role");
    };

    const getIsFormValid = () => {
        if (firstName &&
            validateEmail(email) &&
            passwd.value.length >= 8 &&
            role !== "role") {
            return true
        }
        return false;
    };

    return (
        <form onSubmit={handleSubmit} >
            <fieldset>
                <h2>Sign Up</h2>
                <div className='Field'>
                    <label htmlFor="firstName">
                        First name<sup style={{ color: 'red' }}>*</sup>
                    </label> <br />
                    <input
                        type="text"
                        
                        value={firstName}
                        placeholder='Fiest name'
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className='Field'>
                    <label htmlFor="lastName">
                        Last name
                    </label> <br />
                    <input type="text"
                        
                        value={lastName}
                        placeholder='Last name'
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div className='Field'>
                    <label htmlFor="email">
                        Email address
                        <sup style={{ color: 'red' }}>*</sup>
                    </label> <br />
                    <input
                        type="email"
                        
                        value={email}
                        placeholder='Email'
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='Field'>
                    <label htmlFor="passwd">
                        Password <sup style={{ color: 'red' }}>*</sup>
                    </label> <br />
                    <input
                        type="password"
                        
                        value={passwd.value}
                        placeholder='Password'
                        onChange={e => setPasswd({ ...passwd, value: e.target.value })}
                        onBlur={() => setPasswd({ ...passwd, isTouched: true })}
                    />
                    {passwd.isTouched && passwd.value.length < 8 ? (
                        <PasswordErrorMessage />
                    ) : null}
                </div>
                <div className="Field">
                    <label htmlFor="role">
                        Role
                        <sup style={{ color: 'red' }}>*</sup>
                    </label> <br />
                    <select id="role" value={role} onChange={e => setRole(e.target.value)}>
                        <option value="role">Role</option>
                        <option value="individual">Individual</option>
                        <option value="business">Business</option>
                    </select>
                </div>
                <button type='submit' disabled={!getIsFormValid} >Create account</button>
            </fieldset>
        </form>
    )
}
