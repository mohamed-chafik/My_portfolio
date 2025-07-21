import React, { useEffect, useRef } from 'react';
function Header() {
    return (
        <section className=' w-full h-[100vh] flex justify-center items-center  bg-center z-0' id='head'>
            <div className="w-fit h-fit flex flex-col items-center justify-center bg-draw z-3" >
                <h1 className='font-rock text-8xl text-white '>Mohamed Chafik</h1>
                <p className='w-fit mt-[30px] font-fira text-white'>Front-End Developer | Minimal Code, Maximal Impact</p>
            </div>
        </section>
    );
}

export default Header;
