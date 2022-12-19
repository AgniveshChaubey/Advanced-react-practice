import React, { useState } from 'react';

export const RegistrationForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState({
        value : '',
        isTouched :false
    });
    const [role, setRole] = useState('role');

    const handleSubmit = (e) => {
        alert('Accoutn created')
        e.preventDefault();
        setFirstName('');
        setLastName('');
        setEmail('');
        setPasswd('');
    }

    const getIsFormValid = () => {
        if (!firstName || !lastName || !email || !passwd) {
            return true;
        }
        return false;
    };

    return (
        <form onSubmit={handleSubmit} >
            <fieldset>
                <h2>Sign Up</h2>
                <div className='Field'>
                    <label htmlFor="firstName">First name<sup style={{color :'red'}}>*</sup> </label> <br />
                    <input type="text"
                        id='fiestName'
                        value={firstName}
                        placeholder='Fiest name'
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className='Field'>
                    <label htmlFor="lastName">Last name</label> <br />
                    <input type="text"
                        id='lastName'
                        value={lastName}
                        placeholder='Last name'
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div className='Field'>
                    <label htmlFor="email">Email address<sup style={{color :'red'}}>*</sup> </label> <br />
                    <input type="email"
                        id='email'
                        value={email}
                        placeholder='Email'
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='Field'>
                    <label htmlFor="passwd">Password<sup style={{color :'red'}}>*</sup></label> <br />
                    <input type="password"
                        id='passwd'
                        value={passwd}
                        placeholder='Password'
                        onChange={e => setPasswd(e.target.value)}
                    />
                </div>
                <div className="Field">
                    <label htmlFor="role">Role<sup style={{color :'red'}}>*</sup></label> <br />
                    <select id="role" value={role} onChange={e => setRole(e.target.value)}>
                        <option value="role">Role</option>
                        <option value="individual">Individual</option>
                        <option value="business">Business</option>
                    </select>
                </div>
                <button type='submit' disabled={getIsFormValid} >Create Account</button>
            </fieldset>
        </form>
    )
}
