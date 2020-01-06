const BASE_URL = 'http://gateway.marvel.com'

export default class MarvelApi {
    constructor(options){
        this.publicKey = options.publicKey
        this.privateKey = options.privateKey
        this.apiUrl = options.apiUrl || BASE_URL
    }
    
}