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
    cnic: Yup.string()
        .required(<div className="text-red-500 ml-[2rem] md:ml-[12rem] upper
        ">CNIC IS REQUIRED</div>),
        address1: Yup.string()
        .required(<div className="text-red-500 md:ml-[12rem] upper
    ">ADDRESS 1 IS REQUIRED</div>),
    address2: Yup.string()
        .required(<div className="text-red-500 md:ml-[12rem] upper
        ">ADDRESS 2 IS REQUIRED</div>),
    city: Yup.string()
        .required(<div className="text-red-500 md:ml-[12rem] upper
        ">CITY IS REQUIRED</div>),
    state: Yup.string()
        .required(<div className="text-red-500 md:ml-[12rem] upper
        ">STATE IS REQUIRED</div>),
    zipcode: Yup.string()
        .required(<div className="text-red-500 ml-[2rem] md:ml-[12rem] upper
        ">ZiP-CODE IS REQUIRED</div>),
});


const P10Form2 = () => {
    const dispatch = useDispatch();
    const { c, country,email,fname,sname } = useSelector((state) => state.custom);
    // console.log(country.country);

    const subBtn = () => {
        dispatch({ type: "decrement" });
    };
    const addBtn = () => {
        dispatch({ type: "increament" });
    };


    // const [phone, setPhone] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);

   const handleSubmit = (values, { setSubmitting }) => {
        // console.log(values);
        addBtn();
        setSubmitting(false);
      };



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
                            <div className="bg-black h-[2px] w-[2rem] lg:w-[3rem]"></div>
                        </div>
                        
                    </div>
                </div>
                <div>
                    .
                </div>

            </div>

            <div className="w-full flex justify-center mt-[18vw] md:mt-[1rem]  h-[45rem] ">
                <div className="relative flex flex-col justify-around items-center font-Lato mt-4 max-w-[40rem] w-full px-6">



                    <div className="w-full flex" >
                        <Formik
                            initialValues={{ cnic: '', confirmemail: '', firstname: '', lastname: '', date: '', phonenumber: '' }}
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

                                    <div>
                                        <Field type="number" name="cnic" placeholder="national id number (CNIC)" className=" mb-2 tracking-[2px] md:tracking-[2px] w-[70vw] md:w-[35rem] placeholder:text-black placeholder:font-semibold placeholder:uppercase placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                        <ErrorMessage name="cnic" />
                                    </div>
                                    <div>
                                        <Field type="text" name="address1" placeholder="address 1" className="mb-6 tracking-[2px] md:tracking-[2px] w-[70vw] md:w-[35rem] placeholder:text-black placeholder:font-semibold placeholder:uppercase placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                        <ErrorMessage name="address1" />
                                    </div>

                                    <div>
                                        <Field type="text" name="address2" placeholder="address 2 (apartment, suite, etc.)" className="tracking-[2px] md:tracking-[2px] w-[70vw] md:w-[35rem] placeholder:text-black placeholder:font-semibold placeholder:uppercase placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                        <ErrorMessage name="address2" />
                                    </div>
                                    <div>
                                        <Field type="name" name="city" placeholder="City" className="mb-6 tracking-[2px] md:tracking-[2px] w-[70vw] md:w-[35rem] placeholder:text-black placeholder:font-semibold placeholder:uppercase placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                        <ErrorMessage name="city" />
                                    </div>
                                    <div>
                                        <Field type="name" name="state" placeholder="state / region" className="mb-6 tracking-[2px] md:tracking-[2px] w-[70vw] md:w-[35rem] placeholder:text-black placeholder:font-semibold placeholder:uppercase placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                        <ErrorMessage name="state" />
                                    </div>
                                    <div>
                                        <Field type="number" name="zipcode" placeholder="zip code / post code" className="mb-6 tracking-[2px] md:tracking-[2px] w-[70vw] md:w-[35rem] placeholder:text-black placeholder:font-semibold placeholder:uppercase placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" />
                                        <ErrorMessage name="zipcode" />
                                    </div>


                                    <button type="submit" disabled={isSubmitting} className="absolute right-1/2  md:right-[-100px]  md:bottom-[120px] lg:flex items-center justify-center h-[90px] w-[100px] md:h-[120px] md:w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center uppercase">
                                        CONTINUE
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

export default P10Form2;
