import axios from 'axios'
import * as crypto from 'node:crypto'
require('dotenv').config()
const API_BASE_URL = process.env.API_BASE_URL as string
const API_STAGE_BASE_URL = process.env.API_STAGE_BASE_URL as string

class FetcherUtil {
  private readonly token: string
  private readonly stage: boolean

  constructor(config: { token: string; stage?: boolean }) {
    this.token = config.token
    this.stage = config.stage ? true : false
  }

  async get({ route, params = '' }) {
    return await axios.get(
      `${this.stage ? API_STAGE_BASE_URL : API_BASE_URL}/${route}/${params}`,
      {
        headers: {
          accept: 'application/json',
          'X-DCRT-HRM-AUTH': this.token,
        },
      }
    )
  }

  async post({ route, params = '' }, data) {
    return await axios.post(
      `${this.stage ? API_STAGE_BASE_URL : API_BASE_URL}/${route}/${params}`,
      {
        headers: {
          accept: 'application/json',
          'X-DCRT-HRM-AUTH': this.token,
        },
        data: data,
      }
    )
  }

  async patch({ route, params = '' }, data) {
    return await axios.patch(
      `${this.stage ? API_STAGE_BASE_URL : API_BASE_URL}/${route}/${params}`,
      {
        headers: {
          accept: 'application/json',
          'X-DCRT-HRM-AUTH': this.token,
        },
        data: data,
      }
    )
  }

  async put({ route, params = '' }, data) {
    return await axios.put(
      `${this.stage ? API_STAGE_BASE_URL : API_BASE_URL}/${route}/${params}`,
      {
        headers: {
          accept: 'application/json',
          'X-DCRT-HRM-AUTH': this.token,
        },
        data: data,
      }
    )
  }

  async delete({ route, params = '' }) {
    return await axios.delete(
      `${this.stage ? API_STAGE_BASE_URL : API_BASE_URL}/${route}/${params}`,
      {
        headers: {
          accept: 'application/json',
          'X-DCRT-HRM-AUTH': this.token,
        },
      }
    )
  }
}

const hashFunc = () => {
  return crypto.randomBytes(20).toString('hex')
}

export { FetcherUtil, hashFunc }
