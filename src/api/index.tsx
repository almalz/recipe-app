import axios from 'axios'
import firebase from './firebase'
import { Recipe } from '../types'

const BASE_URL = process.env.BASE_URL

axios.defaults.baseURL = BASE_URL

export const options = {}

export const getRecipes = async () => {
  const URL = '/recipe'
  const res = await axios.get(URL)
  const data = res.data
  return data
}

export const getOneRecipeById = async (id: string) => {
  const URL = `/recipe/${id}`
  const res = await axios.get(URL)
  const data = res.data
  return data
}

export const getOneRecipeByUser = async (user: firebase.User) => {
  const URL = `/me/recipe/`
  const res = await axios.get(URL, {
    headers: { firebase_token: user.getIdToken }
  })
  const data = res.data
  return data
}

export const postOneRecipeByUser = async (
  recipe: Recipe,
  user: firebase.User
) => {
  const URL = `/me/recipe/`
  const res = await axios.post(URL, {
    params: { recipe },
    headers: { firebase_token: user.getIdToken }
  })
  const data = res.data
  return data
}
