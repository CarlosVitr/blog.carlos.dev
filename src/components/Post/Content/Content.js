// @flow strict
import React from 'react'
import { Link } from 'gatsby'
import styles from './Content.module.scss'
import Meta from '../Meta'

type Props = {
  body: string,
  title: string,
  date: string
}

const Content = ({ body, title, tags, tagSlugs, date }: Props) => (
  <div className={styles['content']}>
    <div className={styles['content__home']}>
      <Link className={styles['content__home-link']} to="/">
        Home
      </Link>
    </div>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__date']}>
      <Meta date={date} />
    </div>

    <div
      className={styles['content__body']}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
)

export default Content
