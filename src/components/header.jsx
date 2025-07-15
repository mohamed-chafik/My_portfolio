import React, { useEffect, useRef } from 'react';
function Header() {
    return (
        <section className='bg-[#ffffee] w-full h-[100vh] flex justify-center items-center  bg-center' id='head'>
            <div className="w-fit h-fit flex flex-col items-center justify-center bg-draw" >
                <h1 className='font-rock text-8xl'>Mohamed Chafik</h1>
                <p className='w-fit mt-[30px] font-fira'>Front-End Developer | Minimal Code, Maximal Impact</p>
            </div>
        </section>
    );
}

export default Header;
