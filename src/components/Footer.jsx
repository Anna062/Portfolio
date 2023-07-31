import React from 'react';
import '../styles/Footer.css'
const Footer = () => {

    return <footer>
        <h1>Contactez-moi</h1>
        <div className='footer'>
        <div>
            <p className='fp'>Adresse</p>
            <p className='ft'>2 rue de la Canebière 13001</p>
        </div>
        <div>
            <p className='fp'>Telephone</p>
            <p className='ft'>0745678900</p>
        </div>
        <div>
            <p className='fp'>Email</p>
            <p className='ft'><a href='mailto:fatim.dicko@gmail.com'>fatim.dicko@gmail.com</a></p>
        </div>
        </div>

    </footer>
}

export default Footer;