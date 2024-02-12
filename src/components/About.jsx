import React from 'react'
import falk from '../assets/falk.jpg'


function About() {
  return (
    <>
    <div className='p-20 bg-about'>
        <div className=' w-full max-w-[720px] border-2 border-[#A47E3B] bg-[#99B500] p-10 m-auto rounded-lg'>
          <div className='mt-4 mb-6 text-white text-center'>
            <img className='w-[200px] rounded-full border-2 border-[#A47E3B] m-auto' src={falk} alt="" />
            <h2 className='text-3xl mt-6 mb-4'>Hallo, ich bin Falk Bergmann,</h2>
            <p className='lg:text-xl'>ich habe meine Ausbildung als Forstwirt in den Jahren 2009 bis 2012 beim Staatsbetrieb Sachsenforst
erfolgreich gemeistert und wurde auch als Geselle übernommen. Da wir uns privat für einen anderen
Lebensraum entschieden haben, habe ich die Anstellung im Jahr 2017 verlassen. Seit Oktober 2019
bin ich selbstständig als Forstwirt tätig.</p>
              <p className='mt-4 mb-4 lg:text-xl'>Ich liebe meinen Beruf sehr, weil ich gerne dazu beitragen möchte, dass wir wieder im Einklang mit
der Natur leben und ihre Geschenke achtsam für uns nutzen.
</p>
              <p className='mt-4 mb-4 lg:text-xl'>Um das zu erreichen, beschäftige ich mich viel mit der Literatur von Peter Wohlleben und Erwin
Thoma.</p>
              <p className='mt-4 mb-4 lg:text-xl'>Vor allem die Ernte von Mondphasenholz interessiert mich sehr.
Seit Ende des Jahres 2023 sind wir ein Team von vier Mitarbeitern. </p>
              <p className='mt-4 mb-4 lg:text-xl'>Auch im Jahr 2024 werden wir
weiterwachsen. </p>
              <p className='mt-4 mb-4 lg:text-xl'>Ich freue mich sehr darauf, auch für Sie, für Ihre Vorstellungen und Werte, dem Wald zu dienen.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default About