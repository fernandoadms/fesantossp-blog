import React from 'react'
import PostItem from '../PostItem'

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    background={hit.background}
    date={hit.fields.title}
    date={hit.date}
    description={hit.description}
    category={hit.category}
  />
    
)

export default Hit