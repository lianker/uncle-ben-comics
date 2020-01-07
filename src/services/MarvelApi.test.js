import axios from 'axios'

import MarvelApi from './MarvelApi'

jest.mock('axios')

describe('MarvelApi', () => {
  describe('new instance creation', () => {
    it('Should create a instance of Marvel api', () => {
      const api = new MarvelApi({})
      expect(api).toBeInstanceOf(MarvelApi)
    })

    it('Should receive publilcKey as an option', () => {
      const api = new MarvelApi({
        publicKey: 'bla'
      })
      expect(api.publicKey).toEqual('bla')
    })

    it('Should throw exception if invalid publilcKey', () => {
      const api = new MarvelApi({ privateKey: 'bar' })
      expect(() => api.publicKey).toThrow('invalid public key')
    })

    it('Should receive privateKey as an option', () => {
      const api = new MarvelApi({
        privateKey: 'foo'
      })
      expect(api.privateKey).toEqual('foo')
    })

    it('Should throw exception if invalid privateKey', () => {
      const api = new MarvelApi({ publicKey: 'bar' })
      expect(() => api.privateKey).toThrow('invalid private key')
    })

    it('Should receive apiUrl as an option', () => {
      const api = new MarvelApi({
        apiUrl: 'http://myapi.com'
      })
      expect(api.apiUrl).toEqual('http://myapi.com')
    })

    it('Should use default apiUrl if not provided', () => {
      const api = new MarvelApi({})
      expect(api.apiUrl).toEqual('http://gateway.marvel.com')
    })

    it('Should receive apiVersion as an option', () => {
      const api = new MarvelApi({
        apiVersion: 'v3'
      })
      expect(api.apiVersion).toEqual('v3')
    })

    it('Should use default apiVersion if not provided', () => {
      const api = new MarvelApi({})
      expect(api.apiVersion).toEqual('v1')
    })
  })

  describe('.getComics()', () => {
    let api
    let defaultParams

    beforeEach(() => {
      axios.get.mockResolvedValue({
        data: {
          data: {
            results: [{comic: {id: 1}}]
          }
        }
      })

      defaultParams = {
        ts: 23,
        apikey: 'bar',
        hash: 'c6703fab7ee263e9181e3735bee11525'
      }

      api = new MarvelApi({
        publicKey: 'bar',
        privateKey: 'foo'
      })

      jest.spyOn(api, 'createDefaultParams').mockReturnValue(defaultParams)
    })

    it('should call axios.get method', async () => {
      await api.getComics({})

      expect(axios.get).toHaveBeenCalled()
    })

    it('should add default filter values to axios params', async () => {
      // Arrange
      const options = {
        params: {
          ...defaultParams,
          limit: 20,
          offset: 0,
          orderBy: '-onsaleDate'
        }
      }

      // Act
      await api.getComics({})

      // Assert
      expect(axios.get).toBeCalledWith(
        'http://gateway.marvel.com/v1/public/comics',
        options
      )
    })

    it('should use filters from args to axios params', async () => {
      // Arrange
      const options = {
        params: {
          ...defaultParams,
          limit: 10,
          offset: 10,
          orderBy: 'title'
        }
      }

      // Act
      await api.getComics({
        limit: 10,
        offset: 10,
        orderBy: 'title'
      })

      // Assert
      expect(axios.get).toBeCalledWith(
        'http://gateway.marvel.com/v1/public/comics',
        options
      )
    })

    it('Should return correct response', async () => {
      const result = await api.getComics({})

      expect(result).toEqual([{comic: {id: 1}}])
    })
  })
})
