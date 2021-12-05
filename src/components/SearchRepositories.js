import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { BiGitRepoForked } from 'react-icons/bi'
import { AiOutlineEye, AiOutlineStar } from 'react-icons/ai'
import { VscKey } from 'react-icons/vsc'

function SearchRepositories({
  name,
  description,
  link,
  created,
  stargazers,
  watchers,
  forks,
  license,
}) {
  return (
    <div className='repo'>
      <div className='repo-stats-name'>
        <p className='repo-name'>{name}</p>
        <div className='repo-stats'>
          <label className='stargazers'>
            <AiOutlineStar /> {stargazers}
          </label>
          <label className='watchers'>
            <AiOutlineEye /> {watchers}
          </label>
          <label className='forks'>
            <BiGitRepoForked /> {forks}
          </label>
          <label className='license'>
            <VscKey />
            {license ? license : 'No'}
          </label>
        </div>
      </div>

      <div>
        <p className='repo-description'>
          {!description
            ? "This repository doesn't have any description"
            : description}
        </p>
        <p className='date'>{moment(created).format('MMMM Do YYYY')}</p>
      </div>
      <a
        className='repo-link'
        target='_blank'
        rel='noopener noreferrer'
        href={link}
      >
        open in new tab
      </a>
    </div>
  )
}

SearchRepositories.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  created: PropTypes.string,
  stargazers: PropTypes.number,
  watchers: PropTypes.number,
  forks: PropTypes.number,
  license: PropTypes.string,
}

export default SearchRepositories
