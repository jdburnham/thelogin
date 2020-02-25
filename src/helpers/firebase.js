import Vue from 'vue'

import firebase from 'firebase/app'
import 'firebase/firebase-auth'

import * as firebaseui from 'firebaseui'

const firebaseConfig = {
  apiKey: 'AIzaSyA1EL2NxSKEKK7oZiQu4yx4LJjSB4JIYh4',
  authDomain: 'loginexample-ad913.firebaseapp.com',
  databaseURL: 'https://loginexample-ad913.firebaseio.com',
  projectId: 'loginexample-ad913',
  storageBucket: 'loginexample-ad913.appspot.com',
  messagingSenderId: '735790595971',
  appId: '1:735790595971:web:1df454c34c157d6ce640b6'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const ui = new firebaseui.auth.AuthUI(firebase.auth())

Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseui = ui
