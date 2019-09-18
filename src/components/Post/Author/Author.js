// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        <a
          className={styles['author__bio-twitter']}
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>Twitter </strong>
        </a>
        &middot;
        <a
          className={styles['author__bio-github']}
          href={getContactHref('twitter', author.contacts.github)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong> Github</strong>
        </a>
      </p>
    </div>
  );
};

export default Author;
