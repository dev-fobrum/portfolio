import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

import GithubCard from './GithubCard'

const OtherProjects = () => {
    const [repositories, setRepositories] = useState(false)
    const [limit, setLimit] = useState('full')

    useEffect(() => {
        fetch("https://api.github.com/users/dev-fobrum/repos?sort=updated&per_page=6")
            .then(res => res.json())
            .then(data => {
                setLimit('')
                setRepositories(data)
            })
            .catch(err => {
                throw err;
            });
    }, [])

    const getRepos = () => {
        const offset = Math.ceil((repositories.length / 6)) + 1

        fetch(`https://api.github.com/users/dev-fobrum/repos?sort=updated&per_page=6&page=${offset}`)
            .then(res => res.json())
            .then(data => {
                if (data.length < 6) setLimit('full')
                setRepositories([...repositories, ...data])
            })
            .catch(err => {
                throw err;
            });
    }

    const renderRepositories = () => {
        if (!repositories) {
            return (
                <div className="loading-github">
                    <span>Loading...</span>
                </div>
            )
        } else {
            return repositories.map(repository => {
                return (
                    <GithubCard
                        id={repository.id}
                        key={repository.id}
                        url={repository.html_url}
                        description={repository.description}
                        name={repository.name}
                        fullName={repository.full_name}
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

                <div className={`see-more ${limit}`} onClick={getRepos}>
                    <span href="" className="button" >
                        <FiPlus /> See More
                </span>
                </div>
            </div>
        </div>
    )
}

export default OtherProjects