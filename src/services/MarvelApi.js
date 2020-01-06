import axios from "axios"
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

  get privateKey(){
    if (!this._privateKey) {
        throw new Error('invalid private key')
    }
    
    return this._privateKey
  }
  
  get publicKey(){
    if (!this._publicKey) {
        throw 'invalid public key'
    }  

    return this._publicKey
  }
}
