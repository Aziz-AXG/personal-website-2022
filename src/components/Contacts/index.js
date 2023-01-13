import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import './contacts.css'

function Contacts() {

            const form = useRef('');

            const sendEmail = (e) => {
                        e.preventDefault();
                        if (document.getElementById("Email").value === '') {
                                    return Swal.fire(
                                                'Empty information!',
                                                'Please put your information',
                                                'question'
                                    )
                        }
                        emailjs.sendForm('azizfalah', 'azizContact', form.current, 'DW1pyzphottfTqVPw')
                                    .then((result) => {
                                                Swal.fire(
                                                            'Send Email',
                                                            'Email has been sent successfully.',
                                                            'success'
                                                )
                                    }, (error) => {
                                                Swal.fire({
                                                            icon: 'error',
                                                            title: 'Oops...',
                                                            text: 'Something went wrong!',
                                                })
                                    });
                        e.target.reset()
            };

            return (
                        <div id='Conatcts' className='contactContener'>
                                    <div className='contactBox' data-aos="zoom-in">
                                                <h1 data-aos="zoom-in">Contacts me</h1>
                                                <div className='contactList' data-aos="zoom-in">
                                                            <form ref={form} onSubmit={sendEmail} className="formBox">
                                                                        <label>Name</label>
                                                                        <input type="text" name="user_name" placeholder="Your Name.." />
                                                                        <label>Email</label>
                                                                        <input type="email" id='Email' name="user_email" placeholder="Your Email.." />
                                                                        <label>Phone Number</label>
                                                                        <input type="tel" name="phone" placeholder="Your Phone Number.." />
                                                                        <label>Subject</label>
                                                                        <input type="text" name="Subject" placeholder='Your  Subject..' />
                                                                        <label>Message</label>
                                                                        <textarea name="message" placeholder='Your Message..' />
                                                                        <input type="submit" value="Send" />
                                                            </form>
                                                            <div className='ReachMe'>
                                                                        <h1>Reach Me</h1>
                                                                        <p>Email: azeezfalah200@gmail.com</p>
                                                                        <p>Phone: +964 7727577674</p>
                                                                        <input type='image' img alt='web dev img' src={require('../../img/webDev.svg').default} />
                                                            </div>
                                                </div>
                                    </div>
                        </div>
            )
}

export default Contacts