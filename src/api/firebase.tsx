import firebase from 'firebase'
import 'firebase/auth'

import firebaseConfig from './.env.firebaseConfig.json'

export type FirebaseResponse = {
  user?: firebase.User
  error?: firebase.FirebaseError
}

if (!firebase.apps.length) {
  try {
    firebase.initializeApp(firebaseConfig)
  } catch (err) {
    console.error('Firebase initialization error raised', err.stack)
  }
}

export const createUser = async (email: string, password: string) => {
  try {
    const userCredentials = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    const user = userCredentials.user
    console.log('Creating new user: ', user)
    return user as FirebaseResponse
  } catch (error) {
    console.error(error)
    return error as FirebaseResponse
  }
}

export const signIn = async (email: string, password: string) => {
  try {
    const userCredentials = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
    const user = userCredentials.user
    console.log('Signing in user: ', user)
    return user as FirebaseResponse
  } catch (error) {
    console.error(error)
    return error as FirebaseResponse
  }
}

export const signOut = async () => {
  try {
    firebase.auth().signOut()
    console.log('Signing out')
  } catch (error) {
    console.error(error)
    return error as FirebaseResponse
  }
}
firebase.auth().onAuthStateChanged(() => {})

export default firebase
