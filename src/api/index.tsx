import axios from 'axios'

const BASE_URL = process.env.BASE_URL

axios.defaults.baseURL = BASE_URL

export const options = {}

export const getRecipes = async () => {
  const URL = '/recipe'
  const res = await axios(URL)
  const data = res.data
  return data
}
