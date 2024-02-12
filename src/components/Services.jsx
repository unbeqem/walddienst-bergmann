import React from 'react'
import sawdust from '../assets/sawdust.jpg'
import cut from '../assets/cut-tree-close.jpg'
import cutTree from '../assets/cut-tree.jpg'
import vegetation from '../assets/vegetationspflege.jpg'

function Services() {
  return (
    <div className='p-10 text-white bg-services '>
      <div className='p-10 bg-[#99B500] w-full max-w-[1280px] m-auto rounded-t-lg'>
          <div className='p-4 max-[1024px]:flex-col  flex  mt-2 mb-6'>
              <div className='lg:w-[50%] w-full text-center'>
                <h1 className='text-4xl mb-8'>Vegetationspflege</h1>
                <p className='mb-4 text-xl lg:text-2xl'>Die Vegetationspflege führen wir vorwiegend für große Unternehmen aus, wie zum Beispiel die
Deutsche Bahn. 
                  </p>
                  <p className='text-xl lg:text-2xl'>Ziel davon ist es, die Bahnschienen und Leitungen freizuhalten, damit ein ungestörter
Bahnbetrieb und die Versorgung gewährleistet werden kann.</p>
              </div>

              <div className='lg:w-[50%] w-full mt-10'>
                  <img src={vegetation} className='w-full max-w-[400px] m-auto rounded-lg' alt="" />
              </div>
          </div>


      </div>

      <div className='p-10 bg-[#A47E3B] w-full max-w-[1280px] m-auto'>
          <div className='p-4 max-[1024px]:flex-col-reverse flex justify-around mt-2 mb-6'>

          <div className='lg:w-[50%] w-full mt-10'>
                  <img src={cut} className='w-full max-w-[400px] m-auto rounded-lg' alt="" />
              </div>

              <div className='lg:w-[50%] w-full text-center'>
                <h1 className='text-4xl mb-8'>Gefahrenbaumfällung</h1>
                <p className='mb-4 text-xl lg:text-2xl'>Als Gefahrenbäume werden Bäume bezeichnet, die nach fachmännischer Meinung nicht mehr bruch-
und standsicher sind. Sie sind meist eine Herausforderung, da sie nur dann eine Gefahr darstellen,
wenn sie zu Unfällen führen können (Verkehr, Wege, Wohngebiete). 
                  </p>
                <p className='text-xl lg:text-2xl'>Da ich eine sehr gute Ausbildung
als Forstwirt genießen konnte, macht es mir sehr viel Freude mein gelerntes Wissen über
Schnitttechniken und den gezielten Einsatz von Maschinen und anzuwenden.
                  </p>
              </div>

              
          </div>


      </div>

      <div className='p-10 text-white bg-[#99B500] w-full max-w-[1280px] m-auto '>
          <div className='p-4 max-[1024px]:flex-col flex justify-around mt-2 mb-6'>

              <div className='lg:w-[50%] w-full text-center'>
                <h1 className='text-4xl mb-8'>Mondphasenholz</h1>
                <p className='mb-4 text-xl lg:text-2xl'>Hierbei handelt es sich um Holz, welches zu einem bestimmten Zeitpunkt geerntet wird. Ich halte
mich hierbei überwiegend an die Wissensvermittlung von Erwin Thoma. 
                  </p>
                <p className='text-xl lg:text-2xl'>Demnach ist das Holz, das
nach alten Mondphasenregeln geerntet wird, widerstandsfähiger und dauerhafter.
                  </p>
              </div>

              <div className='lg:w-[50%] w-full mt-10'>
                  <img src={cutTree} className='w-full max-w-[400px] m-auto rounded-lg' alt="" />
              </div>

              
          </div>


      </div>

      <div className='p-10 bg-[#A47E3B] w-full max-w-[1280px] m-auto rounded-b-lg'>
          <div className='p-4 max-[1024px]:flex-col-reverse flex justify-around mt-2 mb-6'>

          <div className='lg:w-[50%]  w-full mt-10'>
                  <img src={sawdust} className='w-full max-w-[400px] m-auto rounded-lg' alt="" />
              </div>

              <div className='lg:w-[50%] w-full text-center'>
                <h1 className='text-4xl mb-8'>Holzernte</h1>
                <p className='mb-4 text-xl lg:text-2xl'>Im Moment bieten wir motormanuelle Holzernte an. Vor allem in nicht maschinenbefahrbarem
Gelände oder an empfindlichen Standorten bietet sich diese klassische Form der Forstarbeit an. 
                  </p>
                <p className='text-xl lg:text-2xl'>Dabei
wird überwiegend mit der Motorkettensäge gearbeitet und kaum auf große Maschinen zurück
gegriffen.
                  </p>
              </div>       
          </div>


      </div>
      
    </div>
  )
}

export default Services