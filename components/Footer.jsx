/* eslint-disable @next/next/no-img-element */
import React from 'react'



const Footer = () => {



    const handleClick = (email) => {
        window.location.href = `mailto:${email}`;
      };


      const contactItems = [
        {
          name: 'REAL ESTATE',
          email: 'realestate@zimogroup.org',
        },
        {
          name: 'CARS',
          email: 'cars@zimogroup.org',
        },
        {
          name: 'YACHTS',
          email: 'yachts@zimogroup.org',
        },
        {
          name: 'WATCHES',
          email: 'watches@zimogroup.org',
        },
        {
          name: 'JETS',
          email: 'jets@zimogroup.org',
        },
        {
          name: 'PRIVATE ISLANDS',
          email: 'privateislands@zimogroup.org',
        },
        {
          name: 'DIAMONDS',
          email: 'diamonds@zimogroup.org',
        },
        {
          name: 'TRAVEL THE WORLD',
          email: 'ttw@zimogroup.org',
        },
      ];


      const contactItems2 = [
        {
          name: 'PROPERTY PROFESSIONALS/ AGENTS',
          email: 'agent@zimogroup.org',
        },
        {
          name: 'ADVERTISING',
          email: 'advertising@zimogroup.org',
        },
        {
          name: ' SPONSORSHIP',
          email: 'sponsor@zimogroup.org',
        },
        {
          name: ' PARTNERS',
          email: 'partners@zimogroup.org',
        },
        {
          name: 'LEGAL',
          email: 'legal@zimogroup.org',
        },
        {
          name: 'CORPORATE',
          email: 'corporate@zimogroup.org',
        },
        {
          name: ' MARKETING',
          email: 'marketing@zimogroup.org',
        },
      ];

      const contactItems3 = [
        {
          name: 'UNITED KINGDOM',
          email: 'press-uk@zimogroup.org',
        },
        {
          name: 'EUROPE',
          email: 'press-eu@zimogroup.org',
        },
        {
          name: '  NORTH AMERICA',
          email: 'press-na@zimogroup.org',
        },
        {
          name: ' MIDDLE EAST',
          email: 'press-me@zimogroup.org',
        },
        {
          name: 'ASIA/AUSTRALIA',
          email: 'press-apac@zimogroup.org',
        },
        {
          name: 'CHINA/HONG KONG',
          email: 'press-ch@zimogroup.org',
        },
      ];

  return (
    <>
    <div className='w-full md:static relative '>
        
        <div className='md:flex h-full w-full '>

        <div className='flex flex-col md:w-[80%] w-full justify-between items-start md:mt-10 mt-28 '>
            <div className='w-full flex justify-between '>
            <div className='ml-4'>
                        <div className='text-black uppercase text-[12px] font-Lato tracking-[2px]' >
                          enquiries
                        </div>
                        <div onClick={() => handleClick('realestate@zimogroup.org')} className='text-black text-[12px] font-Lato tracking-[2px] cursor-pointer hover:text-customgolden' >
                          hello@zimogroup.org
                        </div>
            </div>
            <div >
                    <img src='/assets/CONTACT.png' alt=''  className=' mr-36 md:static absolute top-[-80px] right-0 '/> 
            </div>

            </div>
            
            <div className='flex flex-col w-[80%] justify-start'>
            <img src='/assets/FooterBackground.png' alt='' className='absolute left-36 blur-md'/>
                <div className='md:w-[100%] w-full flex flex-col justify-center items-center '>
                <div className='ml-4 mr-4  w-[80%] md:mt-5 mt-16' >
                    <img src='/assets/P1ZimoTeam.png'alt=''/>
                    <img src='/assets/FooterLogo.png' alt='' className='  mt-4 ' /> </div>
                <img src='/assets/FooterSmallLogo.png' alt=''  className='  mt-10 md:mb-0 mb-1 ml-4 w-[20%]' /> 
                <div className='text-[10px] font-Lato text-center gap-1 tracking-widest leading-5'  >ZIMO{' '} GROUP{' '} LIMITED <br/>
                            71-75{' '} SHELTON{' '} STREET{' '} COVENT{' '} GARDEN{' '} LONDON{' '}  WC2H{' '} 9JQ{' '}
                            ENGLAND {' '} <br/>UNITED KINGDOM<br/>
                            • ZIMOGROUP.ORG
                            HELLO@ZIMOGROUP.ORG <br/>
                            REGISTERED IN ENGLAND
                            14383397
                            </div>
                </div>
                
            </div>

            <div className='w-full md:mt-0 mt-10 md:mb-0 mb-4 md:ml-0 ml-5'>
                <div className='text-black text-[12px] font-Lato tracking-[2px] w-full md:mb-6 md:ml-4  md:mr-0 mr-2'>&copy; ZIMO Group 2023</div>
            </div>


        </div>

       
            <div className='md:flex md:flex-col md: justify-center md:items-end   md:w-[20%] flex w-[100%]  ' >

                        <div className='md:ml-0 ml-5' >
                                
                                                        {contactItems.map((item) => (
                                <div className='mb-4' key={item.name}>
                                    <div className='text-black uppercase text-[12px] font-Lato tracking-[2px] md:text-right text-center'>
                                    {item.name}
                                    </div>
                                    <div
                                    onClick={() => handleClick(item.email)}
                                    className='text-black text-[12px] font-Lato tracking-[1px] cursor-pointer hover:text-customgolden md:text-right text-center'
                                    >
                                    {item.email}
                                    </div>
                                </div>
                                ))}



                        </div>

            </div>







            <div className='flex flex-col justify-center md:items-start items-center  md:w-[20%]  w-full md:ml-4 mt-8  ' >
                <div className=' mr-4 md:ml-0'>
                                    
                {contactItems2.map((item) => (
                                <div className='mb-4' key={item.name}>
                                    <div className='text-black uppercase text-[12px] font-Lato tracking-[2px] md:text-right text-center'>
                                    {item.name}
                                    </div>
                                    <div
                                    onClick={() => handleClick(item.email)}
                                    className='text-black text-[12px] font-Lato tracking-[1px] cursor-pointer hover:text-customgolden md:text-right text-center'
                                    >
                                    {item.email}
                                    </div>
                                </div>
                                ))}

                            </div>



                            <div className='md:ml-10 mr-4  mt-4'>
                            <div className='text-black uppercase text-[12px] font-Lato tracking-[2px] mb-4' >
                                    press
                                </div>
                                
                                {contactItems3.map((item) => (
                                <div className='mb-4' key={item.name}>
                                    <div className='text-black uppercase text-[12px] font-Lato tracking-[2px] md:text-right text-center'>
                                    {item.name}
                                    </div>
                                    <div
                                    onClick={() => handleClick(item.email)}
                                    className='text-black text-[12px] font-Lato tracking-[1px] cursor-pointer hover:text-customgolden'
                                    >
                                    {item.email}
                                    </div>
                                </div>
                                ))}
                    </div>


                    </div>


                    {/* <div className='md:stactic relative flex md:flex-col md:justify-end md:items-end justify-around md:w-[10%] w-[100%] md:mr-4 md:mb-4 mb-36'>
                    <div></div>
                          <div ><img src='/images/P14QR.png' alt='' className='md:static absolute bottom-[-70px] left-4'  /></div>
                      </div> */}







        </div>
    </div>
    </>
  )
}

export default Footer