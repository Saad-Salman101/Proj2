import React, { useState } from "react";
import Image from "next/image";
import ZimoTeam from "../public/assets/zimo-team.png";
import ZimoInternship from "../public/assets/zimo-internship.png";
import BackArrow from "../public/assets/Back.png";
import ReactCountryFlag from "react-country-flag";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from "react-select";

const validationSchema = Yup.object().shape({
    qualifications: Yup.string()
    .required(<div className="text-red-500 ml-[2rem] md:ml-[12rem] upper
    ">QUALIFICATION IS REQUIRED</div>),
    yearsofcompletion: Yup.string()
    .required(<div className="text-red-500 md:ml-[12rem] upper
    ">YEARS OF COMPLETION IS REQUIRED</div>),
    university: Yup.string()
    .required(<div className="text-red-500 md:ml-[12rem] upper mt-[-20px]
    ">UNIVERISTY IS REQUIRED</div>),
    employmentstatus: Yup.string()
     .required(<div className="text-red-500 md:ml-[12rem] upper
    ">EMPLOYEMENT STATUS IS REQUIRED</div>),
     experience: Yup.string()
    .required(<div className="text-red-500 md:ml-[12rem] upper
    ">EXPERIENCE IS REQUIRED</div>),
    resume: Yup.string()
    .required(<div className="text-red-500 ml-[2rem] md:ml-[12rem] upper
    ">RESUME IS REQUIRED</div>),
});


const P10Form3 = () => {



    const dispatch = useDispatch();
    const { c, country, email, fname, sname } = useSelector((state) => state.custom);
    console.log(email, fname);
    // console.log(country.country);

    const subBtn = () => {
        dispatch({ type: "decrement" });
    };
    const addBtn = () => {
        dispatch({ type: "increament" });
    };
    const doubleaddBtn = () => {
        dispatch({ type: "doubleincreament" });
    };
    // console.log(subBtn);

    // const [phone, setPhone] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    // console.log(selectedOption)

    const handledoubleadd =()=>{
        doubleaddBtn()
    }

    const handleSubmit = (values, { setSubmitting }) => {
        // console.log(values);
        addBtn();
        setSubmitting(false);
      };

    const qualifications = [
        { value: '', label: 'CURRENT EMPLOYMENT STATUS' },
        { value: 'BA', label: 'BA' },
        { value: 'BBA', label: 'BBA' },
        { value: 'BSCS', label: 'BSCS' },
        { value: 'BSSE', label: 'BSSE' },
        { value: 'BSIT', label: 'BSIT' },
        { value: 'BFA', label: 'BFA' },
      ];
      const experience = [
        { value: ' NO EXPERIENCE', label: 'NO EXPERIENCE' },
        { value: 'LESS THAN 1 YEAR', label: 'LESS THAN 1 YEAR' },
        { value: '1 YEAR', label: '1 YEAR' },
        { value: '2 YEARS', label: '2 YEARS' },
        { value: '3 YEARS', label: '3 YEARS' },
      ];
      const yearsofcompletion = [
        { value: ' ', label: 'YEARS OF COMPLETION' },
        { value: '2023', label: '2023' },
        { value: '2022', label: '2022' },
        { value: '2021', label: '2021' },
        { value: '2020', label: '2020' },
        { value: '2019', label: '2019' },
      ];
      const employmentstatus = [
        { value: '', label: 'CURRENT EMPLOYMENT STATUS' },
        { value: 'STUDENT', label: 'STUDENT' },
        { value: 'UNEMPLOYED', label: 'UNEMPLOYED' },
        { value: 'EMPLOYED (PART TIME)', label: 'EMPLOYED (PART TIME)' },
        { value: 'EMPLOYED (FULL TIME)', label: 'EMPLOYED (FULL TIME)' },
        { value: 'EMPLOYED (INTERNSHIP)', label: 'EMPLOYED (INTERNSHIP)' },
        { value: 'OTHERS', label: 'OTHERS' },

      ];


    return (
        <div className='flex-col justify-between'>

            <div className="flex justify-between h-[100px] " >
                <div className="w-[20%]  h-[2vw]  ">
                    <div className="text-black text-2xl ml-8 mt-6  font-Lato text-[20px] tracking-[2px] cursor-pointer">
                        APPLY
                    </div>
                    <button onClick={subBtn}>
                        {" "}
                        <div className="text-black ml-8 mt-1 font-Lato text-[20px] tracking-[2px] cursor-pointer">
                            <Image src={BackArrow} alt="" width={100} />
                        </div>
                    </button>

                </div>

                <div className="md:mb-20 mr-32 md:mt-4">
                    <div className="md:text-2xl text-lg md:mr-32  md:mt-4 font-Lato font-uppercase mb-5 tracking-[2px]">
                        YOUR APPLICATION


                        <div className="flex items-center justify-center gap-x-2 my-2 md:mt-6">
                            <div className="bg-[#BE9f56] h-[2px] w-[2rem] lg:w-[3rem]"></div>
                            <div className="bg-[#BE9f56] h-[2px] w-[2rem] lg:w-[3rem]"></div>
                            <div className="bg-[#BE9f56] h-[2px] w-[2rem] lg:w-[3rem]"></div>
                        </div>

                    </div>
                </div>

                <div>
                    .
                </div>

            </div>

            <div className="w-full flex justify-center mt-[18vw] md:mt-[1rem]  h-[45rem] ">
                <div className="relative flex flex-col justify-around items-center font-Lato mt-4 max-w-[40rem] w-full px-6">



                    <div className="w-full flex h-full" >
                        <Formik
                            initialValues={{ qualifications: '', yearsofcompletion: '', university: '', employmentstatus: '', experience: '' }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (

                                <div className="overflow-x-hidden">
                                    <Form>
                                    <div className="my-2">
                                        <div className="text-black  text-[18px] lg:text-[18px] md:text-[18px]  md:tracking-[2px] tracking-[2px] w-[70vw] md:w-[35rem] max-w-[700px]  outline-none bg-transparent   placeholder:text-center text-center   p-3  ">
                                            {email}
                                        </div>
                                    </div>

                                    <div className="my-2">
                                        <div className="text-black  text-[18px] lg:text-[18px] md:text-[18px]  md:tracking-[2px] tracking-[2px] w-[70vw] md:w-[35rem] max-w-[700px]  outline-none bg-transparent   placeholder:text-center text-center   p-3 ">
                                            {fname} {'  '} {sname}
                                        </div>
                                    </div>
                                        <div className="m-3">
                                        <Field
                                            component='select'
                                            name='qualifications'
                                            className="tracking-[2px] md:tracking-[2px] w-[65vw] md:w-[41vw] text-[15px] uppercase text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
                                        >
                                            <option value='' disabled>qualifications</option>
                                            {qualifications.map((myqualifications) => (
                                                <option key={myqualifications.value} value={myqualifications.value}>
                                                    {myqualifications.label}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage
                                            name='qualifications'
                                            component='div'
                                            className='text-red-500 text-sm mt-1 '
                                        />
                                        </div>

                                        <div className="m-3">
                                        <Field
                                            component='select'
                                            name='yearsofcompletion'
                                            className="tracking-[2px] md:tracking-[2px] w-[65vw] md:w-[41vw] text-[15px] uppercase text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
                                        >
                                            <option value=' ' disabled>years of completion</option>
                                            {yearsofcompletion.map((myyearsofcompletion) => (
                                                <option key={myyearsofcompletion.value} value={myyearsofcompletion.value}>
                                                    {myyearsofcompletion.label}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage
                                            name='yearsofcompletion'
                                            component='div'
                                            className='text-red-500 text-sm mt-1 '
                                        />
                                        </div>



                                        <div className="m-3">
                                            <Field type="text" name="university" placeholder="university" className="mb-6 tracking-[2px] md:tracking-[2px] w-[70vw] md:w-[35rem] placeholder:text-black placeholder:uppercase placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                            <ErrorMessage name="university" />

                                        <Field
                                            component='select'
                                            name='employmentstatus'
                                            className="tracking-[2px] md:tracking-[2px] w-[65vw] md:w-[41vw] text-[15px] uppercase text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
                                        >
                                            <option value=' ' disabled>current employment status</option>
                                            {employmentstatus.map((myemploymentstatus) => (
                                                <option key={myemploymentstatus.value} value={myemploymentstatus.value}>
                                                    {myemploymentstatus.label}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage
                                            name='employmentstatus'
                                            component='div'
                                            className='text-red-500 text-sm mt-1 '
                                        />
                                        </div>

                                        <div className="m-3">
                                        <Field
                                            component='select'
                                            name='experience'
                                            className="tracking-[2px] md:tracking-[2px] w-[65vw] md:w-[41vw] text-[15px] uppercase text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
                                        >
                                            <option value=' ' disabled>experience</option>
                                            {experience.map((myexperience) => (
                                                <option key={myexperience.value} value={myexperience.value}>
                                                    {myexperience.label}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage
                                            name='experience'
                                            component='div'
                                            className='text-red-500 text-sm mt-1 '
                                        />
                                            </div>

                                            <div className="mt-6">
                                            <Field name="resume">
                                                {({ field, form }) => (
                                                <label
                                                    htmlFor="resume"
                                                    className={`text-black font-normal text-18px md:text-14px md:tracking-0px tracking-2px w-full md:w-[41vw] text-center uppercase bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 ${
                                                    form.errors.resume && form.touched.resume
                                                        ? 'border-red-500'
                                                        : 'focus:border-[#BE9F56]'
                                                    } outline-none cursor-pointer`}
                                                >
                                                    CV / Résumé
                                                    <input
                                                    id="resume"
                                                    type="file"
                                                    {...field}
                                                    className="hidden"
                                                    />
                                                </label>
                                                )}
                                            </Field>
                                            <ErrorMessage name="resume" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>


                                                <p className="tracking-[2px] mt-4 md:tracking-[0px] text-[14px] text-center text-[#737373] uppercase ">UPLOAD YOUR Résumé IN ENGLISH AS DOCX OR PDF ONLY.</p>
                                                    
                                                <p className="tracking-[2px] mt-4 flex-grow 2xl:ml-2 3xl:ml-10 block  self-start text-center  text-[12px] text-[#737373] w-[90%] max-w-[580px] px-4 lg:px-0">By proceeding, you are confirming that you agree to the information you have provided to be used in accordance with ZIMO`s application processes.</p>
                                                
                                        <button onClick={handledoubleadd} className="flex-col absolute left-[300px]  md:left-[50vw]  md:bottom-[350px] lg:flex items-center justify-center h-[90px] w-[100px] md:h-[120px] md:w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center uppercase">
                                           <div className=" text-[#737373] mb-2 text-[10px]"> OPTIONAL</div> ADD SUPPORTING STATEMENT
                                        </button>

                                        <button type="submit" disabled={isSubmitting} className="absolute left-[100px]  md:left-[50vw]  md:bottom-[200px] lg:flex items-center justify-center h-[90px] w-[100px] md:h-[120px] md:w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center uppercase">
                                            SUBMIT
                                        </button>
                                    </Form>
                                </div>
                            )}
                        </Formik>
                    </div>

                </div>
            </div>



            <div className='w-full flex justify-between mt-20  md:mt-10   '>
                <div className='ml-10  flex-col flex-end'>
                    <div> .</div>
                    <Image src={ZimoTeam} alt='Zimo Career' width={300} height={45} className='mt-12 mb-10' />
                </div>
                <div className='w-[30%]'>
                </div>
                <div className='mr-5 mb-5'>
                    <Image src={ZimoInternship} alt='Zimo Career' width={100} height={100} className='mt-5 mb-10' />
                </div>
            </div>
        </div>
    );
};

export default P10Form3;
