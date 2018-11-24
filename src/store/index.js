import './dbmeinv'

const state = {
  allItems: [],
  items: [],
  count: 0
}

const getState = key => state[key]
const commit = (key, val) => (state[key] = val)

const pushItems = count => {
  getState('items').push(
    ...getState('allItems').slice(count * 5, (count + 1) * 5)
  )
}

export default {
  state,
  getState,
  commit,
  pushItems
}
