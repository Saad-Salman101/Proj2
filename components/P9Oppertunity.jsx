/* eslint-disable @next/next/no-img-element */
import React from 'react'

const P9Oppertunity = () => {
  return (
    <div>

        <section class="min-h-screen flex flex-col justify-center items-center relative bg-black text-white px-4">
            <div class="absolute top-16">
                <img class="w-80 xl:w-52 filter invert md:mb-0 mb-16" src="assets/P1ZimoTeam.png" alt="zimo-team-logo"/>
                </div>
                <p class="text-[20px] lg:text-[18px]  uppercase  absolute top-1/4 -translate-y-1/4 md:top-[180px] xs:top-[125px] w-full text-center tracking-widest">Equal Opportunity</p>
                <p class="text-[#737373] uppercase  text-center tracking-[2px] max-w-[900px] w-[90%] leading-5 md:leading-[40px] xl:leading-[26px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 3xl:text-[14px] text-[12px] pt-0 lg:pt-8">ZIMO is proud to be an equal opportunity workplace and is an affirmative action employer. We are committed to equal employment opportunity regardless of race, colour, ancestry, religion, sex, national origin, sexual orientation, age, citizenship, marital status, disability, gender identity or Veteran status. We also consider qualified applicants regardless of criminal histories, consistent with legal requirements.</p>
                <div class="flex flex-col items-center absolute bottom-0 gap-12">
                    <a class="3xl:text-[14px] text-[20px] uppercase tracking-[2px] cursor-pointer hover:text-[#BE9F56] transition-all">Join our team</a>
                    <a><img class="w-10 cursor-pointer hover:scale-100 animate-bounce hover:animate-ping transition-all py-1 filter invert" src="/assets/DownArrow.png" alt="arrow" />
                        </a></div></section>
    </div>
  )
}

export default P9Oppertunity