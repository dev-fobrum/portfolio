import React from 'react'
import { IconContext } from 'react-icons'
import { FiCoffee, FiArrowRight, FiCode, FiGithub, FiLinkedin } from 'react-icons/fi'

const Banner = () => {
    return (
        <div className="banner-content">
            <div className="container banner-container">
                <div className="banner-info">
                    <div className="banner-info-name">
                        <h1>Fernando Brum</h1>
                    </div>

                    <div className="banner-info-ocupation">
                        <h2>Fullstack Developer</h2>
                    </div>

                    <div className="banner-info-icons">
                        <IconContext.Provider
                            value={{ color: '#1CB35C', size: '34px' }}
                        >
                            <FiCoffee />
                            <FiArrowRight />
                            <FiCode />
                            <FiArrowRight />
                            <FiGithub />
                        </IconContext.Provider>
                    </div>
                </div>

                <div className="banner-linkedin">
                    <IconContext.Provider
                        value={{ color: '#1CB35C', size: '20px' }}
                    >
                        <a className="link contact-me" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/fernando-o-brum-954263109/">
                            <FiLinkedin />
                            Contact me
                        </a>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default Banner