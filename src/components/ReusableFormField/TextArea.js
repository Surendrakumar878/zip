import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const TextArea = (props) => {
    const { label, name, placeholder, ...rest } = props
    return (
        <div className='flex flex-col gap-1 w-10/12 ' >
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" className="bg-[#F4F5F7]" placeholder={placeholder} id={name} type="text" name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default TextArea
