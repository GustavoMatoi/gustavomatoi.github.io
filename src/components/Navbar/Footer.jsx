import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import '../../index.css'
const Footer = () => {
    return (
        <div className='text-cyan-50 w-1/3 flex justify-around'>
            <p className='list-item' >
                <a target='_blank' href='https://github.com/GustavoMatoi'>
                    <FontAwesomeIcon icon={faGithub} size='2x' />
                </a>
            </p>
            <p className='list-item'>
                <a target='_blank' href='https://www.linkedin.com/in/gustavo-vaz-teixeira-6b613524b/'>
                    <FontAwesomeIcon icon={faLinkedin} size='2x' />
                </a>
            </p>
            <p className='list-item'>
                <a target='_blank' href='https://www.instagram.com/gustavomatoi/'>
                    <FontAwesomeIcon icon={faInstagram} size='2x' />

                </a>
            </p>
        </div>
    )
}

export default Footer
