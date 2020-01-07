import axios from 'axios'
import CryptoJs from 'crypto-js'

const BASE_URL = 'http://gateway.marvel.com'
const API_VERSION = 'v1'

export default class MarvelApi {
  constructor(options) {
    this._publicKey = options.publicKey
    this._privateKey = options.privateKey
    this.apiUrl = options.apiUrl || BASE_URL
    this.apiVersion = options.apiVersion || API_VERSION
  }

  get privateKey() {
    if (!this._privateKey) {
      throw new Error('invalid private key')
    }

    return this._privateKey
  }

  get publicKey() {
    if (!this._publicKey) {
      throw new Error('invalid public key') 
    }

    return this._publicKey
  }

  generateHash(timestamp, privateKey, publicKey) {
    return CryptoJs.MD5(`${timestamp}${privateKey}${publicKey}`).toString()
  }

  createDefaultParams(privateKey, publicKey, timestamp = Date.now()) {
    return {
      ts: timestamp,
      apikey: publicKey,
      hash: this.generateHash(timestamp, privateKey, publicKey)
    }
  }

  async getComics(filters = {}) {
    const { offset, limit, orderBy } = filters

    const defaultParams = this.createDefaultParams(
      this.privateKey,
      this.publicKey
    )

    const options = {
      params: {
        ...defaultParams,
        offset: offset || 0,
        limit: limit || 20,
        orderBy: orderBy || '-onsaleDate'
      }
    }

    const comicsUrl = `${BASE_URL}/${API_VERSION}/public/comics`

    return axios.get(comicsUrl, options).then(response => {
      return response.data.data.results
    })
  }
}
