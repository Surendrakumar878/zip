import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError';

import { BsFillLightbulbFill } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { BiBookContent } from "react-icons/bi";
import { BsFillFilePostFill } from "react-icons/bs";
import { BsPieChartFill } from "react-icons/bs";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { MdDeveloperBoard } from "react-icons/md";
import { FaPenFancy } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { BsFillChatFill } from "react-icons/bs";





const CheckBox = (props) => {
    const { label, name, options, ...rest } = props
    const icos = [<BsFillLightbulbFill />, <BsHeadset />, <BiBookContent />, <BsFillFilePostFill />, <BsPieChartFill />, <BsFillGrid1X2Fill />, <BsFillGrid1X2Fill />, <MdDeveloperBoard />, <FaPenFancy />, <GrGallery />, <BsFillChatFill />]


    return (
        <div className=' w-10/12 flex flex-col gap-2 justify-start items-start' >
            <label className='font-semibold mb-3' htmlFor={name}>{label}</label>
            <div className='flex flex-wrap gap-1 justify-center items-center ' >
                <Field name={name}  {...rest} >
                    {
                        ({ field }) => {
                            return options.map((option, index) => {
                                return (
                                    <React.Fragment key={option.key}   >
                                        {/* <input
                                            type="checkbox"
                                            id={option.value}
                                            {...field}
                                            value={option.value}
                                        // checked={field.value.includes(option.value)}
                                        />
                                        <label
                                            htmlFor={option.value}>{option.key}
                                        </label> */}

                                        <li className='list-none relative  border-1  bg-white ' >
                                            <input
                                                type="checkbox"
                                                id={option.value}
                                                {...field}
                                                value={option.value}
                                                className="absolute peer hidden right-2 top-1/2 -translate-y-1/2 " />
                                            <label htmlFor={option.value} className="inline-flex items-center justify-between gap-2   w-full p-2 text-gray-500 bg-white  border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                {/* <div className='text-btn text-xl ' >
                                                    {icos[index]}
                                                </div> */}
                                                <div class="block">
                                                    <div class="w-full text-xs font-semibold">{option.key}</div>
                                                </div>

                                            </label>
                                        </li>
                                    </React.Fragment>
                                )
                            })
                        }
                    }
                </Field>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default CheckBox
