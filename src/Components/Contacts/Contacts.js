import React from 'react'
import "./Contacts.css";




export default function Contacts() {

const Contact=
<div ClassName="content py-3 w-75 text-white ">
	<div ClassName="row">
		  <div ClassName="col-md-6 offset-md-3">
                    <div ClassName="Form card border">
                        <div ClassName="card-body">
                            <form ClassName="form">
                                    <label for="name2" ClassName="mb-0">Name</label>
                                    <div ClassName="row mb-1">
                                        <div ClassName="col-lg-12">
                                            <input type="text" name="name2" id="name2" ClassName="form-control" required=""/>
                                        </div>
                                    </div>
                                    <label for="email2" ClassName="mb-0">Email</label>
                                    <div ClassName="row mb-1">
                                        <div ClassName="col-lg-12">
                                            <input type="text" name="email2" id="email2" ClassName="form-control" required=""/>
                                        </div>
                                    </div>
                                    <label for="message2" ClassName="mb-0">Message</label>
                                    <div ClassName="row mb-1">
                                        <div ClassName="col-lg-12">
                                            <textarea rows="6" name="message2" id="message2" ClassName="form-control" required=""></textarea>
                                        </div>
                                    </div>
                                    <button ClassName="btnk">Send Message</button>
                              
                            </form>
                        </div>
                    </div>

                </div>
	</div>
</div>
  return (
    <div className='Contacts p-5'>
      <div className='center '><h1>CONTACT US</h1></div>
      <div className='di col-sm Flex'>
    <div>
      <div className='border mine w-70 p-3'>
        <p className='center '>Powered by industry-leading digital technology & a data-driven approach, we help employers across industries find the 
          best talent & job seekers, the perfect jobs with which they can fall in love.</p>
      </div>
      <div className='border socials'>
      <i class="fab fa-facebook"></i>
      <i class="fab fa-whatsapp"></i>
      <i class="fab fa-linkedin-in"></i>
      <i class="fab fa-instagram"></i>
      </div>
      </div>

      {Contact}

      </div>
      
    </div>
  )
}
