import React from 'react';
import './enquiry.styles.css';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from '../Error/TextError';

const initialValues = {
    name: '',
    email: '',
    phone: '',
    techname: '',
    message: '' 
}

// const scriptURL = 'https://script.google.com/macros/s/AKfycbxhqHizqq3gHZP8b0NLtHXCcZnkDvU33pOyJNUd3Mx8XWlMENQ/exec';

const onSubmit = values => {
    console.log("Form Values",values)
    // fetch(scriptURL, { method: 'POST', body: values})
    //     .then(response => console.log('ho gaya'))
    //     .catch(error => console.error('Error!', error.message))
}

const validationSchema = Yup.object({
    name: Yup.string().required('Please provide your Name'),
    email: Yup.string().email('Please provide a valid Email').required('Please provide your Email'),
    phone: Yup.number().required('Please provide your Phone number')
    .typeError("That doesn't look like a phone number")   
    .integer("A phone number can't include a decimal point"),
    techname: Yup.string().required('Please provide a Technology'),
    message: Yup.string().required('Please provide a message'),
})

const Enquiry = ({setQuery}) => {
    
    return (
        <div className='enquiry-form'>
            <div className='form-heading'>
                <h2>Enquiry</h2>
                <span className='close' onClick={() => setQuery()}> _ </span>
            </div>

            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className='form'>
                    <div className='form-control'>
                        <label htmlFor='name'>Name</label>
                        <Field
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Name'
                        />
                        <ErrorMessage name='name' component={TextError}/>
                    </div>

                    <div className='form-control'>
                        <label htmlFor='email'>Email</label>
                        <Field
                        type='text'
                        id='email'
                        name='email'
                        placeholder='Email'
                        />
                        <ErrorMessage name='email' component={TextError}/>
                    </div>

                    <div className='form-control'>
                        <label htmlFor='phone'>Phone Number</label>
                        <Field
                        type='text'
                        id='phone'
                        name='phone'
                        placeholder='Phone Number'
                        />
                        <ErrorMessage name='phone' component={TextError}/>
                    </div>

                    <div className='form-control'>
                        <label htmlFor='techname'>Technology Name</label>
                        <Field
                        type='text'
                        id='techname'
                        name='techname'
                        placeholder='Technology Name'
                        />
                        <ErrorMessage name='techname' component={TextError}/>
                    </div>

                    <div className='form-control'>
                        <label htmlFor='message'>Message</label>
                        <Field
                        as='textarea'
                        id='message'
                        name='message'
                        />
                        <ErrorMessage name='message' component={TextError}/>
                    </div>

                    <button type='submit' className='submit-button'>Send Message</button>
                </Form>
            </Formik>

        </div>
    )
}

export default Enquiry
