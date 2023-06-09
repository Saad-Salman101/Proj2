// import React,{useEffect} from 'react';
// import Select from 'react-select';
import Image from 'next/image';
import ZimoCareer from '../public/assets/zimo-careers.png';
import ZimoTeam from '../public/assets/zimo-team.png'
import ZimoInternship from '../public/assets/zimo-internship.png'
import { useSelector,useDispatch } from 'react-redux';
import BackArrow from '../public/assets/back-arrow.png'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Element} from 'react-scroll';

const P10Home = ({mycountry}) => {

  const dispatch = useDispatch();
  const {c,country} = useSelector((state)=>state.custom)
  console.log(c)
  {country!==null ? console.log(country) : console.log('0123')}
console.log(mycountry)


const addBtn = ()=>{
  dispatch(
{    type: "increament",}
  );
};
const setcountry = (myvalue)=>{
  dispatch(
{    type: "setcountry",
payload:myvalue
});
};


  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form submitted with values:', values);
    addBtn();
    setcountry(values);
    setSubmitting(false);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.country) {
      errors.country = 'Please select a country';
    }
    return errors;
  };

  const countries = [
    { value: 'pakistan', label: 'Pakistan' },
    { value: 'united states', label: 'United States' },
    { value: 'united kingdom', label: 'United Kingdom' },
  ];

  return (
    <Element name="page10" className="section md:mb-0 mb-[24rem] "> 
    <div className='h-[100vh] flex-col justify-between'>
      <div className="w-[20%]  h-[12vh] ">
        <div className="text-black text-2xl ml-8 mt-6  font-Lato text-[20px] tracking-[2px] cursor-pointer">
          APPLY
        </div>

          <div className="text-black ml-8 mt-1 font-Lato hidden text-[20px] tracking-[2px] cursor-pointer">
            <Image src={BackArrow} alt="" height={10} width={15} /> BACK
          </div>
      </div>
      <div className='w-full flex justify-center items-center  h-[60%] md:mt-0 mt-[100px]'>
        <div className="relative flex flex-col justify-around items-center font-Lato border-[1px] rounded-xl  w-[95%]  md:w-[700px] h-[400px] border-3 border-golden">
          <div className='font-[20px] font-Lato uppercase mt-6 mb-5 tracking-[2px]'>  YOUR APPLICATION </div>
          <Image src={ZimoCareer} alt='Zimo Career' className='mt-10 mb-10 md:w-[40%] w-[50%]'/>
          <Formik
          initialValues={{ country: country ? country.country : '' }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                component='select'
                name='country'
                className="tracking-[2px] md:tracking-[2px] w-[65vw] text-[15px] md:w-[20vw] uppercase text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[18px] placeholder:tracking-[2px] placeholder:md:tracking-[2px] max-w-[580px] text-center     bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none" 
              >
                <option value='' disabled>Select your country</option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name='country'
                component='div'
                className='text-red-500 text-sm mt-1 '
              />
              <button
                type='submit'
                disabled={isSubmitting}
                className='absolute w-[120px] h-[100px] md:w-[120px] md:h-[120px] p-10 pt-17 pb-17 rounded-lg right-1/3 bottom-[-85px]  md:right-[-60px] md:bottom-2 text-white bg-black font-[20px] font-Lato uppercase text-center justify-center'
              >
                Start
              </button>
            </Form>
          )}
        </Formik>
        </div>
      </div>


      <div className='w-full flex justify-between mt-[200px] md:mt-1  h-[10vw] '> 
      <div className='ml-10  flex-col flex-end md:w-[20%] h-auto w-[40%]'>
      <Image src={ZimoTeam} alt='Zimo Career' layout='responsive' className='mt-12 mb-10' />
      </div>
      <div className='w-[20%]'>
        
      </div>
      <div className='mr-10 mb-5  flex-col md:w-[10%] h-auto w-[20%]'>
  <Image src={ZimoInternship} alt='Zimo Career' layout='responsive' className='mt-2 mb-10' />

</div>
      </div>
    </div>
    </Element>
  );
};

export default P10Home;
