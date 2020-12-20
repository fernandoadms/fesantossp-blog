import React from 'react'
import { Disqus } from 'gatsby-plugin-disqus';

import PropTypes from 'prop-types'

import * as S from './styled'

const Comments = ({ url, title }) => {
  let disqusConfig = {
    url: `https://fsfront.github.io`,
    identifier: 'https-fsfront-github-io',
    title: title
  }

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>

      <Disqus config={disqusConfig} />
    </S.CommentsWrapper>
  )
}

Comments.prototype = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}


export default Comments