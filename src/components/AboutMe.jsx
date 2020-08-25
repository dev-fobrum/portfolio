import React from 'react'
import { IconContext } from 'react-icons'
import { FiLinkedin } from 'react-icons/fi'

const AboutMe = () => {
    return (
        <div className="container about-me-container">
            <h1>ABOUT ME</h1>

            <p>
                Hi, my name is Fernando Brum and I’m a developer since 2015. Started my career being a PHP backend developer,
                but life lead me to create a crave to knowledge and keep learning about all that I can.
            </p>

            <p>
                Since then learned about JavaScript, HTML5, CSS3,  jQuery, Python, NodeJS, React and React Native. I also have
                interesting about another topics, like UX, UI, astronomy, physics, politics, cooking... and of course movies,
                series, HQs and games like a good nerd.
            </p>

            <div className="about-me-linkedin">
                <IconContext.Provider
                    value={{ color: '#1CB35C', size: '20px' }}
                >
                    <a className="link contact-me" target="_blank" rel="noopener" href="https://www.linkedin.com/in/fernando-o-brum-954263109/">
                        <FiLinkedin />
                        Contact me
                    </a>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default AboutMe