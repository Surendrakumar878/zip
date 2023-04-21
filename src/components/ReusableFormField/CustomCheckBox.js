

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
import { TiTick } from "react-icons/ti";





const CustomCheckBox = (props) => {
    const { label, name, options, ...rest } = props
    const icos = [<BsFillLightbulbFill />, <BsHeadset />, <BiBookContent />, <BsFillFilePostFill />, <BsPieChartFill />, <BsFillGrid1X2Fill />, <BsFillGrid1X2Fill />, <MdDeveloperBoard />, <FaPenFancy />, <GrGallery />, <BsFillChatFill />]


    return (
        <div className=' w-full md:w-10/12 flex flex-col gap-2 justify-start items-start' >
            <label className='font-semibold mb-3' htmlFor={name}>{label}</label>
            <div className=' flex-wrap  justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2' >
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

                                        <li className='list-none relative  bg-[#EAF3FF] hover:bg-btn group font-thin   rounded' >
                                            <input
                                                type="checkbox"
                                                id={option.value}
                                                {...field}
                                                value={option.value}
                                                className="absolute hidden peer right-2 top-1/2 -translate-y-1/2 " />
                                            <label
                                                htmlFor={option.value}
                                                className="inline-flex items-center justify-between md:gap-3 gap-1 p-4 w-full  text-gray-500   border-white1 rounded cursor-pointer dark:hover:text-gray-300 dark:border-white1 peer-checked:border-btn hover:text-white dark:peer-checked:text-gray-300 peer-checked:text-white peer-checked:bg-btn group-hover:bg-btn dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 bg-[#EAF3FF]">
                                                <div className=' text-xl group-hover:text-white peer-checked:text-white   ' >
                                                    {icos[index]}
                                                </div>
                                                <div class="block">
                                                    <div class="w-full text-xs font-semibold">{option.key}</div>
                                                </div>


                                                <div className='h-4 w-4  rounded-full  border border-btn  flex-shrink-0 peer-checked:hidden peer-checked:border-green-500 flex justify-center items-center' >
                                                    <div className='text-white1 text-xl font-black  ' >
                                                        o
                                                    </div>
                                                </div>

                                                {/* <TiTick className='peer-checked:text-white  peer-checked:block' /> */}

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

export default CustomCheckBox

