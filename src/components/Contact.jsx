import React, { useEffect, useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
function Contact() {
 
  const emailRef = useRef(null)
 const nameRef = useRef(null)
 const messageRef = useRef(null)
 const phoneRef = useRef(null)
 
const [loading, setLoading] = useState(false);
  // ... state
  useEffect(() => emailjs.init("DsY4SEtYL7NZf5PE3"), []);
  // Add these
  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_es64e0s";
    const templateId = "template_gm6sqs8";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
       name: nameRef.current.value,
        recipient: emailRef.current.value,
        message: messageRef.current.value,
        phone: phoneRef.current.value
      });
      alert("Die E-Mail wurde erfolgreich versandt.");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
}
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
          

        <form action="index.html" autocomplete="off" onSubmit={handleSubmit}  >
            <h3 class="title">Kontaktieren sie uns</h3>
            <div class="input-container">
              <input ref={nameRef} placeholder='Benutzername' type="text" name="name" class="input" />
              <span>Username</span>
            </div>
            <div class="input-container">
              <input ref={emailRef}  placeholder='E-Mail' type="email" name="email" class="input" />
              
              <span>Email</span>
            </div>
            <div class="input-container">
              <input ref={phoneRef} placeholder='Telefon' type="tel" name="phone" class="input" />
              
              <span>Phone</span>
            </div>
            <div class="input-container textarea">
              <textarea ref={messageRef} placeholder='Nachricht' name="message" class="input"></textarea>
              <span>Message</span>
            </div>
            <button class="btn-contact" disabled={loading} >Senden </button> 
          </form>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Contact