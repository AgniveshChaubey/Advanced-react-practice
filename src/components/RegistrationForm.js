import React from 'react'

export const RegistrationForm = () => {
    return (
        <form>
            <fieldset>
                <h2>Sign Up</h2>
                <div>
                    <label htmlFor="firstName">First name</label> <br />
                    <input type="text" id='fiestName' />
                </div>
                <div>
                    <label htmlFor="lastName">Last name</label> <br />
                    <input type="text" id='lastName' />
                </div>
                <div>
                    <label htmlFor="email">Email address</label> <br />
                    <input type="text" id='email' />
                </div>
                <div>
                    <label htmlFor="passwd">Password</label> <br />
                    <input type="text" id='passwd' />
                </div>
            </fieldset>
        </form>
    )
}
