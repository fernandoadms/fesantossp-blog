import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

import { Link } from 'gatsby'

const Pagination = (
  {
    isFirst,
    isLast,
    currentPage,
    numPages,
    prevPage,
    nextPage,
  }) => (
  <S.PaginationWrapper>
    {!isFirst &&
      <Link to={prevPage}> 
        ← página anterior
      </Link>
    }

    <p>{currentPage} de {numPages} páginas</p>

    {!isLast &&
      <Link to={nextPage}> 
        próxima página →
      </Link>
    }
    
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string
}

export default Pagination