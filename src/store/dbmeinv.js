import shuffle from 'lodash.shuffle'
import firebase from 'firebase/app'
import 'firebase/database'

import store from '.'

firebase.initializeApp({
  databaseURL: 'https://beauty-ad056.firebaseio.com'
})

const dataRef = firebase.database().ref('dbmn/data')
const cid = 'cid2' // Only boobs

dataRef
  .child(cid)
  .orderByKey()
  .limitToLast(500)
  .once('value')
  .then(snap => Object.keys(snap.val()))
  .then(keys =>
    Promise.all(
      keys.map(key =>
        dataRef
          .child('posts')
          .orderByKey()
          .equalTo(key)
          .once('child_added')
          .then(snap => snap.val())
      )
    )
  )
  .then(result => {
    store.commit('allItems', shuffle(result))
    store.pushItems(store.getState('count')) // First items
  })
