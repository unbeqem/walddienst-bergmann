import React from 'react'

function Impressum() {
  return (
    <div className='p-10 mt-10 mb-10 text-[#A47E3B] flex-col justify-center items-center'>
    <h1 className='text-[#99B500] font-bold text-2xl mb-4'>Impressum</h1>
<div className='text-lg'>
<p>Falk Bergmann<br />
Stra&szlig;e der Jugend 25<br />
01936 Neukirch</p>
</div>

<h2 className='text-[#99B500] font-bold text-xl mt-4'>Kontakt</h2>
<div className='text-lg'>
<p>Telefon: +49 35795 390774<br />
E-Mail: brief@walddienst-bergmann.de</p>
</div>

<p className='text-[#99B500] font-bold text-lg mt-4'>Quelle: <a className='text-[#0C359E]' href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a></p>
</div>
  )
}

export default Impressum