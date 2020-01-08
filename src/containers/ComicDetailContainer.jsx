import React from 'react'
import MarvelApi from '../services/MarvelApi'
import ComicDetail from '../components/ComicDetail/ComicDetail'
import Async from 'react-async'
import { useParams } from 'react-router-dom'

const comicById = async comicId => {
  const api = new MarvelApi({
    privateKey: '500e7b5bfb5a566943045b8844063ae3eaa95ebc',
    publicKey: '63a6190104326eab1c652458b794387f'
  })

  return await api.getComicById(comicId)
}

const ComicDetailContainer = () => {
  const { comicId } = useParams()

  return (
    <Async promiseFn={() => comicById(comicId)}>
      {({ data, err, isLoading }) => {
        if (isLoading) return 'Loading...'
        if (err) return `Something went wrong: ${err.message}`

        if (data)
          return (
            <ComicDetail
              id={data.id}
              title={data.title}
              description={data.description}
              imgUrl={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              price={data.prices[0].price}
            />
          )
      }}
    </Async>
  )
}

export default ComicDetailContainer
