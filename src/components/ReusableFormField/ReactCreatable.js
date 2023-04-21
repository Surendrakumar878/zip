import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError';
import CreatableSelect from 'react-select/creatable';

const ReactCreatable = (props) => {
    const { label, name, options, ...rest } = props;

    return (
        <div className='flex flex-col w-10/12' >
            <label htmlFor={name}>{label}</label>
            <Field name={name} >
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return (
                            <CreatableSelect
                                {...field}
                                {...rest}
                                isMulti
                                // defaultValue={value}
                                value={value}
                                onChange={val => setFieldValue(name, val)}
                                options={options}
                            />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default ReactCreatable
