import React, { useEffect, useRef, useState } from 'react'

function Contact() {
 
 
  return (
    <div className='bg-contact'>
    <div class="container m-auto ">
      
      
      <div class="form">
        
      <div class="contact-info m-auto ">
          <h3 class="title ">Lasst uns gemeinsam wirken</h3>
  
          <div class="info ">
            <div class="information">
              <img className='w-8 mr-4 filter'  src="https://github.com/sefyudem/Contact-Form-HTML-CSS/blob/master/img/location.png?raw=true" class="icon" alt="" />
              <p>01936 Neukirch,<br/> Straße der Jugend 25</p>
            </div>
            <div class="information">
              <img className='w-8 mr-4 filter' src="https://github.com/sefyudem/Contact-Form-HTML-CSS/blob/master/img/email.png?raw=true" class="icon" alt="" />
              <p>brief@walddienst-bergmann.de</p>
            </div>
            <div class="information">
              <img className='w-8 mr-4 filter' src="https://github.com/sefyudem/Contact-Form-HTML-CSS/blob/master/img/phone.png?raw=true" class="icon" alt="" />
              <p>+49 35795 390774</p>
            </div>
          </div>
        </div>

        <div class="contact-form">
          

        <form action="index.html" autocomplete="off" >
            <h3 class="title">Kontaktieren sie uns</h3>
            <div class="input-container">
              <input  placeholder='Benutzername' type="text" name="name" class="input" />
              <span>Username</span>
            </div>
            <div class="input-container">
              <input  placeholder='E-Mail' type="email" name="email" class="input" />
              
              <span>Email</span>
            </div>
            <div class="input-container">
              <input  placeholder='Telefon' type="tel" name="phone" class="input" />
              
              <span>Phone</span>
            </div>
            <div class="input-container textarea">
              <textarea placeholder='Nachricht' name="message" class="input"></textarea>
              <span>Message</span>
            </div>
            <button class="btn-contact" >Senden </button> 
          </form>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Contact