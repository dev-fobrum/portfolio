import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

import GithubCard from './GithubCard'

const OtherProjects = () => {
    const [repositories, setRepositories] = useState(false)

    useEffect(() => {
        fetch("https://api.github.com/users/dev-fobrum/repos")
            .then(res => res.json())
            .then(data => {
                setRepositories(data)
            })
            .catch(err => {
                throw err;
            });
    }, [])

    const renderRepositories = () => {
        if (!repositories) {
            return 'Loading...'
        } else {
            return repositories.map(repository => {
                return (
                    <GithubCard
                        key={repository.id}
                        url={repository.html_url}
                        description={repository.description}
                        name={repository.full_name}
                    />
                )
            })
        }
    }

    return (
        <div className="other-projects-content">
            <div className="container other-projects-container">
                <h1>OTHER PROJECTS</h1>

                <div className="github-cards">
                    {renderRepositories()}
                </div>

                <div className="see-more">
                    <a href="" className="button">
                        <FiPlus /> See More
                    </a>
                </div>
            </div>
        </div>
    )
}

export default OtherProjects