import React from 'react'
import greenTrees from '../assets/green-trees.jpg'
import Falk from '../assets/walking-worker.jpg'
import cutTree from '../assets/cut-tree.jpg'
import sawdust from '../assets/sawdust.jpg'
import cut from '../assets/cut-tree-close.jpg'
import vegetation from '../assets/vegetationspflege.jpg'
import { GiWoodPile } from "react-icons/gi";
import { GiWoodAxe } from "react-icons/gi";
import { GiGrassMushroom } from "react-icons/gi";
import { BsMoonStarsFill } from "react-icons/bs";



function Home() {

  return (
    <>
    <div className=' text-[#A47E3B]'>
      
      <header>
        <main >
          <div className=' flex items-center w-full'>
            <div className='lg:border-r-4 border-[#99B500] mt-6 mb-6 w-[55%] mr-2 sm:mr-0'>
              <img src={greenTrees} alt="" />
            </div>
            <div className='m-auto p-4 sm:p-10 sm:items-center w-[50%] text-center'>
                <h1 className='sm:text-4xl text-xl w-full m-auto max-w-[600px] font-bold'>
                „Lerne Charakter von den Bäumen, Werte von den Wurzeln und Wandel von den Blättern“<br/> – Tasneem Hameed
                </h1>
                <a href="#about"><button className='sm:mt-8 mt-4 btn text-[#B6C4B6] '>Erfahren Sie mehr...</button></a>
                
            </div>
            </div>
            </main>
            <div className='border-2   border-[#99B500]'></div>
      </header>
      
  
      

      
      <section id='about' className='xl:ml-[120px] xl:mr-[120px] '>
        <div className='z-5 flex'>
          <div className='w-[50%]  text-center flex-col'>
            
            <div className=' lg:w-[60%] w-full text-white m-auto p-4 bg-[#99B500]'> 
            <h1 className='text-4xl mb-2 '>Falk</h1>
            <p className='text-2xl'>staatlich anerkannter Forstwirt</p>
          
            </div>
            <div className='font-medium'>
              <p className='w-full lg:w-[60%] m-auto p-2 mt-2 lg:mt-8 lg:text-3xl'>Hallo, mein Name ist Falk,</p>
              <p className='w-full lg:w-[60%] m-auto p-2 mt-2 lg:text-3xl'>
ich bin ausgebildeter Forstwirt und betreibe seit 2019 mein eigenes Unternehmen. </p>
              <p className='w-full lg:w-[60%] m-auto p-2 mt-2 lg:text-3xl'>Sowohl die
fachgerechte Ausführung meiner Arbeit als auch die Arbeit für den Wald sind die Faktoren, die mir
bei meiner Arbeit am Herzen liegen.</p>
            </div>
            </div>
              <div> 
                <img src={Falk} className=' relative w-full ml-4 max-w-[300px]  sm:max-w-[400px]' alt="" />
              </div>
            </div>


      </section>

      <section className='py-10 sm:p-10' id='leistungen'>
          <h1 className='text-4xl py-10 text-center text-white bg-[#99B500]'>Leistungen</h1>
         

          <div className='p-6 md:p-4 sm:p-10 m-auto flex-wrap sm:flex justify-between items-center text-white w-full overflow-auto' >
            <div className='relative mt-10 p-6 rounded-lg flex-col m-auto md:w-full md:max-w-[45%] lg:w-auto  text-center   bg-[#99B500]'>
                <img className='w-[250px] h-[200px] rounded-lg m-auto ' src={vegetation} alt="" />
                <GiGrassMushroom className='absolute top-[35%] left-[235px] lg:left-[115px]  md:left-[98px] sm:left-[115px] text-[100px] text-[#99B500] p-1 border-2 border-white bg-white rounded-full '/>
                <h2 className='text-center mt-[72px] w-full max-w-[300px] m-auto text-2xl lg:text-3xl'>Vegetationspflege</h2>
                <p className='text-center m-auto mt-10 text-xl max-w-[300px] lg:text-2xl'>Pflege von Grünanlagen</p>
                <a href="leistungen"><button className='mt-14 btn-2 text-xl text-[#B6C4B6]'>Mehr Lesen</button></a>
            </div>
            <div className='relative mt-10 p-6 rounded-lg flex-col m-auto md:w-full md:max-w-[45%] lg:w-auto text-center  bg-[#99B500]'>
                <img className='w-[250px] h-[200px] rounded-lg m-auto ' src={cut} alt="" />
                <GiWoodAxe className='absolute top-[35%] left-[235px] lg:left-[115px] md:left-[98px] sm:left-[115px] text-[100px] text-[#99B500] p-1 border-2 border-white bg-white rounded-full '/>
                <h2 className='text-center mt-[72px] text-2xl lg:text-3xl'>Gefahrenbaumfällung</h2>
                <p className='text-center lg:max-w-[300px] mt-8 text-xl lg:text-2xl'>Sichere und fachgerechte Fällung von Bäumen</p>
                <a href="leistungen"><button className='mt-8 btn-2 text-xl text-[#B6C4B6]'>Mehr Lesen</button></a>
            </div>
            <div className='relative mt-10 p-6 rounded-lg flex-col m-auto md:w-full md:max-w-[45%] lg:w-auto text-center   bg-[#99B500]'>
                <img className='w-[250px] h-[200px] rounded-lg m-auto ' src={cutTree} alt="" />
                <BsMoonStarsFill className='absolute top-[35%] left-[235px] lg:left-[115px] md:left-[98px] sm:left-[115px] text-[100px] text-[#99B500] p-1 border-2 border-white bg-white rounded-full '/>
                <h2 className='text-center mt-[72px] text-2xl lg:text-3xl'>Mondphasenholz</h2>
                <p className='text-center lg:max-w-[300px] mt-8 text-xl lg:text-2xl'>Besonderes Holz durch altes Wissen</p>
                <a href="leistungen"><button className='mt-8 btn-2 text-xl text-[#B6C4B6]'>Mehr Lesen</button></a>
            </div>
            <div className='relative mt-10 p-6 rounded-lg flex-col m-auto md:w-full md:max-w-[45%] lg:w-auto text-center  bg-[#99B500]'>
                <img className='w-[250px] h-[200px] rounded-lg m-auto ' src={sawdust} alt="" />
                <GiWoodPile className='absolute top-[32%] left-[235px] lg:left-[115px] md:left-[98px] sm:left-[115px] text-[100px] text-[#99B500] p-1 border-2 border-white bg-white rounded-full '/>
                <h2 className='text-center mt-[72px] text-2xl lg:text-3xl'>Holzernte</h2>
                <p className='text-center lg:max-w-[300px] mt-4 text-xl lg:text-2xl'>Individuelle und fachgerechte Beratung und Ausführung</p>
                <a href="leistungen"><button className='mt-4 btn-2 text-xl text-[#B6C4B6]'>Mehr Lesen</button></a>
            </div>
          
            
      </div>
      </section>

      <section className='p-10 '>
        <div className='bg-[#99B500] p-10 flex-col  items-center justify-center text-center rounded-lg'>
            <h1 className='lg:text-4xl text-2xl w-full text-white m-auto '>Falls Sie Interesse an unseren Leistungen haben, 
            dann können Sie sich ganz einfach telefonisch oder über das Kontaktformular bei uns melden.</h1>
           <a href="kontakt"> <button className='btn-2 lg:text-2xl mt-10 text-xl m-auto max-[768px]:mt-10 '>Wir freuen uns auf dich</button></a>
        </div>
      </section>
     

      <section className='bg-main-about text-white '>
        <div className='p-[100px] mt-10 flex-col  text-center'>
          <div className='w-full max-w-[920px] m-auto'>
          <h2 className=' text-4xl sm:text-[48px] sm:tracking-wide sm:leading-[64px] m-auto text-shadow'>Ich freue mich, Sie mit meinem Team unterstützen zu dürfen – egal welchen Anspruch Sie haben –
um gemeinsam unsere Zukunft zu sichern und den Wald friedfertig und nachhaltig zu nutzen
.</h2>
            <p className=' text-[24px] mt-8 text-center text-shadow'>Mit forstlichen Grüßen<br/>
Ihr Falk Bergmann</p>
          <a href="kontakt">  <button className='btn text-xl w-full max-w-[400px] m-auto mt-10'>Kontaktieren Sie uns</button></a>
</div>
</div>
      </section>
      </div>
      </>
    
  )
}

export default Home