import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <>
            <article className='footer__account-details'>
                <p><span>Bank:</span> Zenith Bank</p>
                <p><span>Account Name:</span> Dayon Consulting Enterprises </p>
                <p><span>Account Number:</span> 1216983282</p>
            </article>
            <footer className='invoiceFooter'>
                <article className='footer__article'>
                    <FontAwesomeIcon className='footer__icons' icon={faInstagram} />
                    <FontAwesomeIcon className='footer__icons' icon={faXTwitter} />
                    <p className='footer__icons'>dayon_consult</p>
                </article>
                <article className='footer__article'>
                    <FontAwesomeIcon className='footer__icons' icon={faPhone} />
                    <FontAwesomeIcon className='footer__icons' icon={faWhatsapp} />
                    <p className='footer__icons'>07033548020</p>
                </article>
                <article className='footer__article'>
                    <FontAwesomeIcon className='footer__icons' icon={faLocationDot} />
                    <p className='footer__icons'>29, Vitafoam build, Mayfair, Ile-Ife, Osun State</p>
                </article>
                <article className='footer__article'>
                    <FontAwesomeIcon className='footer__icons' icon={faEnvelope} />
                    <p className='footer__icons'>dayonconsulting@gmail.com</p>
                </article>
            </footer>
        </>
    )
}

export default Footer