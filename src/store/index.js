import Vue from 'vue'
import Vuex from 'vuex'
import devices from './devices'
// import connections from './connections'


Vue.use(Vuex)

const store = new Vuex.Store({

    modules: {
      devices,
      // connections
    }

})

export default store
