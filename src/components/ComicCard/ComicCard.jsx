import React from 'react'
import PropTypes from 'prop-types'
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react'
import './ComicCard.css'

import { Link, useRouteMatch } from 'react-router-dom'

function ComicCard({ comicId, title, path, extension, price }) {
  const match = useRouteMatch()

  return (
    <div className="ComicCard" >
      <div
        style={{
          backgroundSize: '100% 100%',
          backgroundImage: 'url(' + path + '.' + extension + ')'
        }}
        className="comic-card-image"
      ></div>
      <div className="title">
        <Link to={`${match.url}/${comicId}`} title={title}>{title}</Link>
      </div>

      <a className="price" href="">
        <Icon name="shopping cart" />
        R$ {price}
      </a>
    </div>
  )
}

ComicCard.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired
}

export default ComicCard
