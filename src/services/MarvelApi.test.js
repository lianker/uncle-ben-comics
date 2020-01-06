import MarvelApi from './MarvelApi'

describe('MarvelApi', () => {
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
  
  it('Should receive privateKey as an option', () => {
    const api = new MarvelApi({
      privateKey: 'foo'
    })
    expect(api.privateKey).toEqual('foo')
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
})
