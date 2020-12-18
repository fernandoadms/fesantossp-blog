import React from 'react'
import * as S from './styled'
import Icons from './Icons'
import links from './content'

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]
        return (
          <S.SocialLinksItem key={i}>
            <S.SocialLinksLink
              href={link.url}
              rel='noopener noreferrer'
              target='_blank'
              title={link.label}
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>  
)

export default SocialLinks
