import React from 'react'
import "./Contacts.css";




export default function Contacts() {

const Contact=
<div class="content py-3 w-75 text-white ">
	<div class="row">
		  <div class="col-md-6 offset-md-3">
                    <div class="Form card border">
                        <div class="card-body">
                            <form class="form">
                                    <label for="name2" class="mb-0">Name</label>
                                    <div class="row mb-1">
                                        <div class="col-lg-12">
                                            <input type="text" name="name2" id="name2" class="form-control" required=""/>
                                        </div>
                                    </div>
                                    <label for="email2" class="mb-0">Email</label>
                                    <div class="row mb-1">
                                        <div class="col-lg-12">
                                            <input type="text" name="email2" id="email2" class="form-control" required=""/>
                                        </div>
                                    </div>
                                    <label for="message2" class="mb-0">Message</label>
                                    <div class="row mb-1">
                                        <div class="col-lg-12">
                                            <textarea rows="6" name="message2" id="message2" class="form-control" required=""></textarea>
                                        </div>
                                    </div>
                                    <button class="btn btn-primary">Send Message</button>
                              
                            </form>
                        </div>
                    </div>

                </div>
	</div>
</div>
  return (
    <div className='Contacts p-5'>
      <div className='center  '><h1>CONTACT US</h1></div>
      <div className='Flex'>
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
