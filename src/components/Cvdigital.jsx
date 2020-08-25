import React from 'react'

import Gallery from './Gallery'

const Cvdigital = () => {
    return (
        <div className="container cvdigital-container">
            <h1>CVDIGITAL</h1>

            <p>CVDigital is a personal project developed for skill pratice in NodeJS and REACT. The project
            has the objective to create digitals curriculum vitaes to easy share between workers and companies</p>

            <Gallery />

            <p>
                <a target="_blank" rel="noopener" className="link" href="http://cvdigital.info">See the project</a> {' '}
                and {' '}
                <a target="_blank" rel="noopener" className="link" href="http://cvdigital.info/cv/fobrum">mine personal CVDigital</a>
            </p>
        </div>
    )
}

export default Cvdigital