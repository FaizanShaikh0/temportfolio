
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedinIn
} from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io";

import './contact.css'


function Contact() {
    return (
        <section id='Contact' className='contact_section'>
            <h2 className='section__title'>
                Get In <span>Touch</span>
            </h2>

            <div className="contact__container container grid">
                <div className='contact__data'>
                    <h3 className='contact__title'>Dont be shy !</h3>

                    <div className='contact__info'>
                        <div className='info__item'>
                            <FaEnvelopeOpen className='info__icon' />

                            <div>
                                <span className='info__title'>Mail Me</span>
                                <h4 className='info__desc'>faizanshaikh0730@gmail.com</h4>
                            </div>
                        </div>

                        <div className='info__item'>
                            <FaPhoneSquareAlt className='info__icon' />
                            <div>
                                <span className='info__title'>Call Me</span>
                                <h4 className='info__desc'>7767038027</h4>
                            </div>
                        </div>
                    </div>

                    <div className='contact__socials'>
                        <a href="http://facebook.com" className='contact__social-link'>
                            <FaFacebookF />
                        </a>
                        <a href="http://instagram.com" className='contact__social-link'>
                            <FaInstagram />
                        </a>
                        <a href="http://github.com" className='contact__social-link'>
                            <FaGithub />
                        </a>
                        <a href="http://linkedin.com" className='contact__social-link'>
                            <FaLinkedinIn />
                        </a>

                    </div>

                </div>

                <form className='contact__form' >
                    <div className='form__input-group'>
                        <div className='form__input-div'>
                            <input type='text' placeholder='Your Name' className='form__control'
                            />
                        </div>

                        <div className='form__input-div'>
                            <input type='email' placeholder='Your Email' className='form__control'
                            />
                        </div>

                        <div className='form__input-div subject'>
                            <input  type='text' placeholder='Your Subject' className='form__control'
                            />
                        </div>
                    </div>

                    <div className='form__input-div'>
                        <textarea className='form__control textarea' placeholder='Your Message'></textarea>
                    </div>

                    <button className='button'>Send Message
                        <span className='button__icon contact__button-icon'>
                        <IoIosArrowForward style={{ background: 'transparent' }} /></span>
                    </button>
                </form>
            </div>
        </section>
    );
}
export default Contact;