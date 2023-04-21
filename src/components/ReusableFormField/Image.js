import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'

const Image = (props) => {
    const { label, name, placeholder, ref, ...rest } = props

    return (
        <div className='flex flex-col gap-1 w-10/12' >
            <label className='font-bold text-gray-600' htmlFor={name}>{label}</label>
            <Field name={name} {...rest} >
                {
                    props => {

                        const { field, form } = props
                        const { setFieldValue } = form

                        return (
                            <input
                                // multiple

                                // className="w-full border-b-4 rounded-lg appearance-none border-gray-300  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pl-4 "
                                className="file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-6 file:py-3 file:m-5 
                                file:border-none text-white
                                file:rounded-full file:cursor-pointer file:shadow-sm file:shadow-blue-600/50
                                bg-gradient-to-br from-gray-600 to-gray-700
                                rounded-full
                                cursor-pointer
                                shadow-xl shadow-gray-700/60
                                "
                                name={name}
                                type="file"

                                onChange={(val) => {
                                    setFieldValue(name, val.target.files[0]);
                                }} />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Image
