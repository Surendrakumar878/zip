import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const Input = (props) => {
    const { label, name, placeholder, ...rest } = props
    return (
        <>
            <div className='flex flex-col gap-1 w-10/12' >
                <label htmlFor={name}>{label}</label>
                <Field className="border bottom-3  focus:border-b-4 rounded bg-[#F4F5F7] placeholder:text-sm placeholder:text-thin" id={name} name={name} placeholder={placeholder} {...rest} />
                <ErrorMessage name={name} component={TextError} />
            </div>
        </>
    )
}

export default Input

