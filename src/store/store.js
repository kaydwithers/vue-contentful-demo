const contentful = require('contentful')

const client = contentful.createClient({
  space: '43jc9ib0b9f2',
  accessToken: '10b810d1ad5e41437cc477dac4a80d5e051da5eb249d6a7964ff38b534c5d849'
})

const storage = {
  debug: false,
  state: {
    entries: {}
  },

  getPosts: function getPosts () {
    client.getEntries({
      limit: 10,
      order: 'sys.createdAt'
    }).then(function success (entries) {
      if (storage.debug) console.log('getPosts triggered')
      storage.state.entries = entries
    })
  }
}

export default {
  state: storage.state,
  getPosts () {
    storage.getPosts()
  }
}
