// @flow strict
import React from 'react'
import { getContactHref, getIcon } from '../../../utils'
import Icon from '../../Icon'
import styles from './Contacts.module.scss'
import useDarkMode from 'use-dark-mode'
import DarkmodeJS from 'darkmode-js'

type Props = {
  contacts: {
    [string]: string
  }
}

const Contacts = ({ contacts }: Props) => {
  const darkMode = useDarkMode(true)

  return (
    <div className={styles['contacts']}>
      <ul className={styles['contacts__list']}>
        {Object.keys(contacts).map((name) =>
          !contacts[name] ? null : (
            <li className={styles['contacts__list-item']} key={name}>
              <a
                className={styles['contacts__list-item-link']}
                href={getContactHref(name, contacts[name])}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon name={name} icon={getIcon(name)} />
              </a>
            </li>
          )
        )}
        {/* <li className={styles['contacts__list-item']} key="toggle-dark-mode">
          <button
            className={styles['contacts__list-item-button']}
            onClick={() => {
              darkMode.toggle()
            }}
          >
            <Icon
              name="toggle darkmode"
              icon={getIcon(darkMode.value ? 'moon' : 'sun')}
            />
          </button>
        </li> */}
      </ul>
    </div>
  )
}

export default Contacts
