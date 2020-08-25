import React, { useState, useEffect } from 'react'

import githublogo from '../imgs/github-logo.jpg'

const GithubCard = ({ description, url, name }) => {
    const [image, setImage] = useState('https://raw.githubusercontent.com/' + name + '/master/screenshots/screenshot_1.png')

    useEffect(() => {
        fetch(image, { method: 'head' })
            .then(function (status) {
                if (!status.ok) {
                    setImage(githublogo)
                }
            }).catch(e => {
                setImage(githublogo)
            })
    }, [])

    return (
        <div className="github-card">
            <div className="image" style={{
                backgroundImage: `url(${image})`
            }}>
                {/* <img src={image} alt="" /> */}
            </div>

            <div className="description">
                {description}
            </div>

            <div className="anchor">
                <a target="_blank" href={url} className="link">See on Github</a>
            </div>
        </div>
    )
}

export default GithubCard