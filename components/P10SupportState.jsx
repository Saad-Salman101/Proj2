import React, { useState } from "react";
import Image from "next/image";
import ZimoTeam from "../public/assets/zimo-team.png";
import ZimoInternship from "../public/assets/zimo-internship.png";
import BackArrow from "../public/assets/back-arrow.png";
import ReactCountryFlag from "react-country-flag";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from "react-select";

const validationSchema = Yup.object().shape({
    supportingstate: Yup.string()
        .required(<div className="text-red-500 ml-[2rem] md:ml-[12rem] upper
        ">SUPPORTING STATEMENT IS REQUIRED</div>),
});


const P10SupportState = () => {
    const dispatch = useDispatch();
    const { c, country,email,fname,sname } = useSelector((state) => state.custom);
    // console.log(country.country);

    const doublesubBtn = () => {
        dispatch({ type: "doubledecrement" });
    };
    const subBtn = () => {
        dispatch({ type: "increament" });
    };

    const [selectedOption, setSelectedOption] = useState(null);

   const handleSubmit = (values, { setSubmitting }) => {
        subBtn();
        setSubmitting(false);
      };



    return (
        <div className='flex-col justify-between'>

            <div className="flex justify-between h-[100px] " >
                <div className="w-[20%]  h-[2vw]  ">
                    <div className="text-black text-2xl ml-8 mt-6  font-Lato text-[20px] tracking-[2px] cursor-pointer">
                        APPLY
                    </div>
                    <button onClick={doublesubBtn}>
                        <div className="text-black ml-8 mt-1 font-Lato text-[20px] tracking-[2px] cursor-pointer">
                            <Image src={BackArrow} alt="" height={15} width={20} /> BACK
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

            <div className="w-full flex justify-center mt-[12vw] md:mt-[1rem]  h-[45rem] ">
                <div className="relative flex flex-col justify-around items-center font-Lato mt-4  w-[60%] px-6">



                    <div className="w-full flex" >
                        <Formik
                            initialValues={{ supportingstate:'' }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                
                                <div className="overflow-x-hidden">
                                <Form>
                                    <div className=" w-full flex flex-col items-center justify-center">
                                <div className="mb-1">
                                        <div className="text-black uppercase text-[18px] lg:text-[18px] md:text-[18px]  md:tracking-[2px] tracking-[2px] w-[70vw] md:w-[35rem] max-w-[700px]  outline-none bg-transparent   placeholder:text-center text-center   p-3  ">
                                        SUPPORTING INFORMATION
                                        </div>
                                    </div>

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
                                    </div>
                                    
                                    <div className="my-2">
                                        <div className="text-silver  text-[10px] lg:text-[10px] md:text-[18px]  md:tracking-[2px] tracking-[2px] w-full md:w-full  outline-none bg-transparent   placeholder:text-center text-center   p-3 ">
                                        YOU CAN PROVIDE ADDITIONAL (SUPPORTING) information to help us better understand YOU AS A PERSON AND your qualifications/suitability for the role/program/INTERNSHIP. please provide us with additional details WHICH YOU BELIEVE WILL SUPPORT YOUR APPLICATION.
                                        </div>
                                    </div>

                                            <div className="form-group ">
                                            <Field
                                                as="textarea"
                                                id="supportingstate"
                                                name="supportingstate"
                                                className="form-control w-full h-[80%] border border-gray-500/50 placeholder:text-gray-400 rounded-lg"
                                                rows="16"
                                                placeholder="Supporting Information"
                                            />
                                            <ErrorMessage name="message" component="div" className="error-message" />
                                            </div>


                                            {/* <button   className="flex-col absolute left-[300px]  md:left-[50vw]  md:bottom-[350px] lg:flex items-center justify-center h-[90px] w-[100px] md:h-[120px] md:w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center uppercase">
                                           <div className=" text-[#737373] mb-2 text-[10px]"> OPTIONAL</div> ADD SUPPORTING STATEMENT
                                        </button> */}

                                            <button onClick={doublesubBtn}
                                            className="absolute right-[40px]  md:right-[-150px]  md:bottom-[220px] lg:flex items-center justify-center h-[110px] w-[110px] md:h-[120px] md:w-[120px] bg-white text-black tracking-widest text-[14px] rounded-lg text-center uppercase border border-black"
                                            style={{ borderWidth: '1px' }}
                                            >
                                            Cancel
                                            </button>

                                    <button type="submit" disabled={isSubmitting} className="absolute right-[200px]  md:right-[-150px]  md:bottom-[80px] lg:flex items-center justify-center h-[120px] w-[120px] md:h-[120px] md:w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center uppercase">
                                        ADD Supporting Statement
                                    </button>
                                </Form>
                                </div>
                            )}
                        </Formik>
                    </div>

                </div>
            </div>



            <div className='w-full flex justify-between mt-24  md:mt-1   '>
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

export default P10SupportState;
