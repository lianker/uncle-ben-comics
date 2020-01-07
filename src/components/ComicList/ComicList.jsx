import React from 'react'
import Async from 'react-async'
import 'semantic-ui-css/semantic.min.css'

import ComicCard from '../ComicCard/ComicCard'
import MarvelApi from '../../services/MarvelApi'

const comics = async () => {
  const api = new MarvelApi({
    privateKey: '500e7b5bfb5a566943045b8844063ae3eaa95ebc',
    publicKey: '63a6190104326eab1c652458b794387f'
  })

  return await api.getComics({})
}

function ComicList(props) {
  return (
    <Async promiseFn={comics}>
      {({ data, err, isLoading }) => {
        if (isLoading) return 'Loading...'
        if (err) return `Something went wrong: ${err.message}`

        if (data)
          return (
            <div className="comicListContainer">
              {data.map(comic => (
                <ComicCard
                  title={comic.title}
                  description={comic.description}
                  path={comic.thumbnail.path}
                  extension={comic.thumbnail.extension}
                  comicId={comic.id}
                  price={comic.prices[0].price}
                />
              ))}
            </div>
          )
      }}
    </Async>
  )
}

export default ComicList
