import React from 'react'

export default function Form(props) {
    const {values, submit, change, errors} = props;


const onChange = event => {
    const {name, value, checked, type} = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    change(name, newValue)
}


    return (
    <form onSubmit = {submit} className = 'form-container'>
        <div className = 'errors'>
            <p>{errors.name}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.termsOfService}</p>
        </div>
        <div className="form-inputs">
            <label>Name 
                <input 
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={onChange}
                    placeholder='First and Last Name'
                />
            </label>
            <label>Email 
                <input 
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                    placeholder='Email'
                />
            </label>
            <label>Password 
                <input 
                    type='password'
                    name='password'
                    onChange={onChange}
                    value={values.password}
                    placeholder='Password'
                />     
            </label>
        </div>
        <div className = "form-checkboxes">
            <label>I have read the Terms of Service
                <input 
                    type='checkbox'
                    name='termsOfService'
                    onChange={onChange}
                    checked={values.termsOfService}
                />              
            </label>
            </div>
        <input type='submit'  value='Submit' />
    </form>

    );
}
