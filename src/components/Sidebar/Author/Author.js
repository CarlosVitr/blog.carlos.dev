// @flow strict
import React from 'react'
// import { Link } from 'gatsby'
import styles from './Author.module.scss'
import Darkmode from 'darkmode-js'

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
}

const Author = ({ author, isIndex }: Props) => {
  return (
    <div className={styles['author']}>
      {/* <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link> */}

      {isIndex === true ? (
        <h1
          className={styles['author__title']}
          onClick={(e) => {
            new Darkmode()
          }}
        >
          <span className={styles['author__title-link']}>{author.name}</span>

          <span style={{ color: 'white' }}> Dark?</span>
        </h1>
      ) : (
        <h2
          className={styles['author__title']}
          onClick={(e) => {
            new Darkmode()
          }}
        >
          <span className={styles['author__title-link']}>{author.name}</span>
          <span style={{ color: 'white' }}> Dark?</span>
        </h2>
      )}
      <p className={styles['author__subtitle']}>{author.bio}</p>
    </div>
  )
}

export default Author
