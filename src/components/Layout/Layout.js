// @flow strict
import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'
import type { Node as ReactNode } from 'react'
import { useSiteMetadata } from '../../hooks'
import styles from './Layout.module.scss'

type Props = {
  children: ReactNode,
  title: string,
  slug?: string,
  description?: string,
  socialImage?: string
}

const Layout = ({ children, title, slug, description, socialImage }: Props) => {
  const { url } = useSiteMetadata()
  const metaImage = socialImage != null ? socialImage : '/cover.png'
  const metaImageUrl = url + withPrefix(metaImage)
  const url_absolute = url + (slug || '')

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <link rel="canonical" href={url_absolute} />
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={metaImageUrl} />
        <meta property="og:url" content={url_absolute} />
        <meta property="og:site_name" content="Blog by Frenco" />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {children}
    </div>
  )
}

export default Layout
