import React from 'react'
import logo from '../assets/logo.jpg'

function Footer() {
  return (
    <div >
            <footer className="bg-[#99B500] p-4">
              <div className="flex justify-center w-full items-center p-4 lg:p-10">
                <div className="w-1/3 text-center ">
                  <img className="w-full max-w-[150px] rounded-lg lg:max-w-[250px] mb-4 m-auto" src={logo} alt='logo'/>
                  <p className="text-white text-lg sm:text-xl">Ohne Wald kein Leben</p>
                </div>
                <div className="w-1/3 text-center text-white ">
                  <h3 className="sm:text-xl text-lg font-bold mb-2">LEISTUNGEN</h3>
                    <p className='mb-2 text-sm sm:text-lg'>Vegetationspflege</p>
                    <p className='mb-2 text-sm sm:text-lg'>Gefahrenbaumfällung</p>
                    <p className='mb-2 text-sm sm:text-lg'>Mondphasenholz</p>
                    <p className='mb-2 text-sm sm:text-lg'>Holzernte</p>
                </div>
                <div className="w-1/3 text-center text-white">
                    <h3 className="font-bold text-lg sm:text-xl mb-2">KONTAKT</h3>
                    <p className='mb-2 text-sm sm:text-lg'>+49 35795 390774</p>
                    <p className='mb-2 text-sm sm:text-lg'>brief@walddienst-bergmann.de</p>
                  <a href="kontakt">  <button className="btn-2 text-sm sm:text-lg  lg:w-[50%] mt-2">Kontakt</button></a>
                </div>
              </div>
              <div className='text-white flex m-auto justify-center items-center text-center mb-6'>
               <p className='mr-20 text-lg'>Impressum</p> 
               <p className='mr-20 text-lg'>Copyright 2024</p>
               <p className='text-lg'>Made by Tristan Keick</p>
              </div>
            </footer>
            </div>
  )
}

export default Footer