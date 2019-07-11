import axios from 'axios'

const $http = axios.create({

    baseURL: 'http://192.168.50.37:5000/api/',
    // withCredentials: false,
    // headers: {
    //
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //
    // }

})

export default {

  state: {

    // devices: [],

    //заглушка
    devices: [{"id":1,"cls":"building","name":"Здание #1","children":[{"id":2,"cls":"cabinet","name":"Cabinet #2","template":"APC_001","children":[{"cls":"device","id":28,"status":1,"name":"Flatpack2"},{"cls":"device","id":3,"status":0,"name":"UMUX1500 #2R"}]},{"id":1,"cls":"cabinet","name":"Cabinet #1","template":"APC_001","children":[{"cls":"device","id":10,"status":0,"name":"KDS"},{"cls":"device","id":9,"status":0,"name":"Кросс"}]}]}],
    active: null,

  },

  mutations: {

    LOAD_DEVICES (state, data) {

        state.devices = []
        data.forEach(device => {state.devices.push(device)})

    },

    ACTIVE_DEVICE (state, data) {

        state.active = data ? data : null

    },

  },

  actions: {

    async loadDevices ({ commit, state, getters }) {

      console.log('loadDevices on store started')
          try {

              $http.get('device').then((response) => {

                  // if (response.data.valid) {
                  if (response) {

                      console.log('Store', 'loadDevices', 'response', response)

                      commit('LOAD_DEVICES', response.data)

                  } else {

                      console.log('Store', 'loadDevices', 'smth wrong')

                  }

              }, (err) => {

                  console.error('Store', 'loadDevices', 'error', err)

              })

          }
          catch (error) {

            throw error

          }
    },

    activeDevice ({ commit, state, getters }, data) {

      console.log('activeDevice on store started')

      try {

        commit('ACTIVE_DEVICE', data)

      }
      catch (error) {

        throw error

      }

    },
    //
    // async removeTask ({ commit, state, getters }, data) {
    //
    //   var tasks = getters.getTasks
    //   var taskIndex
    //   tasks.forEach((item, index) => {
    //     if(item.id == data.id) {
    //       taskIndex = index
    //     }
    //   })
    //   try {
    //
    //     await firebase.database().ref('tasks').child(taskIndex).remove()
    //     commit('REMOVE_TASK', taskIndex)
    //
    //   }
    //   catch (error) {
    //
    //     throw error
    //
    //   }
    //
    // },

  },

  getters: {

    getDevices (state) {

        return state.devices

    },

    getActiveDevice (state) {

        return state.active

    },

  }

}
