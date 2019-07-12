import axios from 'axios'

const $http = axios.create({

    baseURL: 'http://192.168.50.37:3000/api/',
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
    // devices: [{"id":1,"cls":"building","name":"Здание #1","children":[{"id":2,"cls":"cabinet","name":"Cabinet #2","template":"APC_001","children":[{"cls":"device","id":28,"status":1,"name":"Flatpack2"},{"cls":"device","id":3,"status":0,"name":"UMUX1500 #2R"}]},{"id":1,"cls":"cabinet","name":"Cabinet #1","template":"APC_001","children":[{"cls":"device","id":10,"status":0,"name":"KDS"},{"cls":"device","id":9,"status":0,"name":"Кросс"}]}]}],
    devices: [{"id":1,"name":"Зона #1","comment":"Это примечание для первой зоны","cls":"zone","children":[{"id":1,"name":"Объект #1","comment":"Первый объект","latitude":null,"longitude":null,"cls":"facility","children":[{"id":1,"name":"Здание #1","comment":"Главное здание","address":"г. Москва, ул. 5-го Октября, д.34","cls":"building","children":[{"id":1,"name":"Cabinet #1","comment":"щхщшгхзщшгзшгхзш","template":"APC_001","serial_number":"SN123","inventory_number":"I0987","install_date":0,"warranty_date":0,"lifespan_date":1559850000000,"cls":"cabinet","width":2000,"height":1200,"depth":760,"usize":42,"children":[{"id":1,"name":"Coral #1","comment":"Стартовая точка","template":"CORAL R800M","x":0,"y":222,"mount":"front","cls":"device","manufacturer":"Tadiran","description":"R800M - Coral IPx R800 Main Unit","width":450,"height":400,"depth":330,"power_consumption":575},{"id":9,"name":"Umux 1500","comment":"","template":"UMUX 1500","x":0,"y":667,"mount":"front","cls":"device","manufacturer":"Keymile","description":"Multi-Service Subrack, 19\" / 8 HU","width":450,"height":355,"depth":280,"weight":6.44},{"id":10,"name":"KDS","comment":"","template":"Unitel KDS","x":0,"y":0,"mount":"front","cls":"device","vendor_code":"KDS","manufacturer":"Unitel Engineering","description":"PLC 105-DI 2-temperature 2-relay_output, 19\" / 1 HU","width":450,"height":46,"depth":173,"weight":2.8},{"id":11,"name":"EO2","comment":"","template":"Unitel EO2","x":0,"y":1156,"mount":"front","cls":"device","vendor_code":"PKUS CP24 EO-2","manufacturer":"Unitel Engineering","description":"Преобразователь оптических интерфейсов E1 (CMI, G.704) или C37.94 в электрический E1 (HDB3, G.703), 19\" / 1 HU","width":450,"height":45,"depth":250,"weight":2.8},{"id":12,"name":"Cisco 2911","comment":"","template":"Cisco 2911-K9","x":0,"y":1022,"mount":"front","cls":"device","manufacturer":"Cisco","description":"CISCO2911/K9 - 2900 Series Integrated Service Router","width":450,"height":89,"depth":305,"power_consumption":0.22},{"id":14,"name":"Кросс оптический","comment":"","template":"СвязьСтройДеталь 130301-00019","x":0,"y":178,"mount":"front","cls":"device","vendor_code":"130301-00019","manufacturer":"Связьстройдеталь","description":"Оптический кросс 24xSC, 19\" / 1 HU","width":450,"height":45,"depth":310,"weight":2.9},{"id":15,"name":"Панель распределения питания","comment":"","template":"Unitel PRP","x":0,"y":44,"mount":"front","cls":"device","vendor_code":"UI","manufacturer":"Unitel","description":"Панель распределения питания","width":450,"height":135,"depth":400,"weight":5},{"id":16,"name":"Кросс оптический 24xSC","comment":"ВОЛС Здание 1 - Здание 2","template":"СвязьСтройДеталь 130301-00019","x":0,"y":1245,"mount":"front","cls":"device","vendor_code":"130301-00019","manufacturer":"Связьстройдеталь","description":"Оптический кросс 24xSC, 19\" / 1 HU","width":450,"height":45,"depth":310,"weight":2.9},{"id":20,"name":"ЭО2_2","comment":"тест","template":"Unitel EO2","x":0,"y":1334,"mount":"front","cls":"device","vendor_code":"PKUS CP24 EO-2","manufacturer":"Unitel Engineering","description":"Преобразователь оптических интерфейсов E1 (CMI, G.704) или C37.94 в электрический E1 (HDB3, G.703), 19\" / 1 HU","width":450,"height":45,"depth":250,"weight":2.8},{"id":27,"name":"DNWP 45","comment":"efrgsdfgshg","template":"DNWP CM-6","x":0,"y":1422,"mount":"front","cls":"device","vendor_code":"T32009.01","manufacturer":"DNWP","description":"Мультисервисная платформа Connection Master, 6 слотов, 2HU, 19\"","width":450,"height":90,"depth":240,"weight":4.6},{"id":61,"name":"FlatPack_1","comment":"54646456464","template":"Eltek Flatpack 2 CTO20402","x":0,"y":1556,"mount":"front","cls":"device","vendor_code":"CTO20402","manufacturer":"Eltek","description":"Система электропитания Flatpack2, 8кВТ, 19'', 2HU","width":450,"height":90,"depth":370,"weight":5},{"id":62,"name":"FlatPack_5","comment":"","template":"Eltek Flatpack 2 CTO20402","x":0,"y":1734,"mount":"front","cls":"device","vendor_code":"CTO20402","manufacturer":"Eltek","description":"Система электропитания Flatpack2, 8кВТ, 19'', 2HU","width":450,"height":90,"depth":370,"weight":5}]},{"id":2,"name":"Cabinet #2","comment":"","template":"APC_001","serial_number":"SN124","inventory_number":"ИН2432313","install_date":1553200000000,"warranty_date":0,"lifespan_date":0,"cls":"cabinet","width":2000,"height":1200,"depth":760,"usize":42,"children":[{"id":2,"name":"UMUX1500 #1","comment":"Стартовое устройство для тракта","template":"UMUX 1500","x":0,"y":0,"mount":"front","cls":"device","manufacturer":"Keymile","description":"Multi-Service Subrack, 19\" / 8 HU","width":450,"height":355,"depth":280,"weight":6.44},{"id":3,"name":"UMUX1500 #2R","comment":"Какой то текст для тестирования примечания","template":"UMUX 1500","x":0,"y":400,"mount":"front","cls":"device","manufacturer":"Keymile","description":"Multi-Service Subrack, 19\" / 8 HU","width":450,"height":355,"depth":280,"weight":6.44},{"id":19,"name":"CM-6","comment":"Тестирование шаблона","template":"DNWP CM-6","x":0,"y":889,"mount":"front","cls":"device","vendor_code":"T32009.01","manufacturer":"DNWP","description":"Мультисервисная платформа Connection Master, 6 слотов, 2HU, 19\"","width":450,"height":90,"depth":240,"weight":4.6},{"id":28,"name":"Flatpack2","comment":"Тест","template":"Eltek Flatpack 2 CTO20402","x":0,"y":1067,"mount":"front","cls":"device","vendor_code":"CTO20402","manufacturer":"Eltek","description":"Система электропитания Flatpack2, 8кВТ, 19'', 2HU","width":450,"height":90,"depth":370,"weight":5}]},{"id":3,"name":"Cabinet #3","comment":"","template":"APC_001","serial_number":"SN125","inventory_number":"","install_date":0,"warranty_date":1552250000000,"lifespan_date":0,"cls":"cabinet","width":2000,"height":1200,"depth":760,"usize":42,"children":[{"id":4,"name":"UMUX1500 #2L","comment":"","template":"UMUX 1500","x":0,"y":356,"mount":"front","cls":"device","manufacturer":"Keymile","description":"Multi-Service Subrack, 19\" / 8 HU","width":450,"height":355,"depth":280,"weight":6.44},{"id":17,"name":"DNWP_1","comment":"123","template":"DNWP CM-16","x":0,"y":756,"mount":"front","cls":"device","vendor_code":"T32009.04","manufacturer":"DNWP","description":"Мультисервисная платформа Connection Master, 16 слотов, 8HU, 19''","width":450,"height":360,"depth":240,"weight":10.7},{"id":18,"name":"DNWP_2","comment":"234","template":"DNWP CM-6","x":0,"y":1289,"mount":"front","cls":"device","vendor_code":"T32009.01","manufacturer":"DNWP","description":"Мультисервисная платформа Connection Master, 6 слотов, 2HU, 19\"","width":450,"height":90,"depth":240,"weight":4.6},{"id":21,"name":"КДС _3","comment":"","template":"Unitel KDS","x":0,"y":44,"mount":"front","cls":"device","vendor_code":"KDS","manufacturer":"Unitel Engineering","description":"PLC 105-DI 2-temperature 2-relay_output, 19\" / 1 HU","width":450,"height":46,"depth":173,"weight":2.8},{"id":22,"name":"ПРП 3","comment":"","template":"Unitel PRP","x":0,"y":89,"mount":"front","cls":"device","vendor_code":"UI","manufacturer":"Unitel","description":"Панель распределения питания","width":450,"height":135,"depth":400,"weight":5}]}]},{"id":2,"name":"Здание #2","comment":"Дополнительное здание","address":"г. Москва, Угольный проезд, строение 5","cls":"building","children":[{"id":4,"name":"Cabinet #4","comment":"","template":"APC_001","serial_number":"SN126","inventory_number":"","install_date":0,"warranty_date":0,"lifespan_date":1552420000000,"cls":"cabinet","width":2000,"height":1200,"depth":760,"usize":42,"children":[{"id":5,"name":"UMUX1500 #3R","comment":"","template":"UMUX 1500","x":0,"y":0,"mount":"front","cls":"device","manufacturer":"Keymile","description":"Multi-Service Subrack, 19\" / 8 HU","width":450,"height":355,"depth":280,"weight":6.44}]},{"id":5,"name":"Cabinet #5","comment":"","template":"APC_001","serial_number":"SN127","inventory_number":"","install_date":0,"warranty_date":1552510000000,"lifespan_date":0,"cls":"cabinet","width":2000,"height":1200,"depth":760,"usize":42,"children":[{"id":6,"name":"UMUX1500 #3L","comment":"","template":"UMUX 1500","x":0,"y":88,"mount":"front","cls":"device","manufacturer":"Keymile","description":"Multi-Service Subrack, 19\" / 8 HU","width":450,"height":355,"depth":280,"weight":6.44}]},{"id":6,"name":"Cabinet #6","comment":"","template":"APC_001","serial_number":"SN128","inventory_number":"IN543","install_date":0,"warranty_date":0,"lifespan_date":1552250000000,"cls":"cabinet","width":2000,"height":1200,"depth":760,"usize":42,"children":[{"id":7,"name":"UMUX1200","comment":"","template":"UMUX 1200","x":0,"y":0,"mount":"front","cls":"device","manufacturer":"Keymile","description":"Multi-Service Subrack, 19\" / 4 HU","width":450,"height":188,"depth":280,"weight":"N/A"},{"id":8,"name":"Coral #2","comment":"","template":"CORAL R800M","x":0,"y":222,"mount":"front","cls":"device","manufacturer":"Tadiran","description":"R800M - Coral IPx R800 Main Unit","width":450,"height":400,"depth":330,"power_consumption":575},{"id":13,"name":"Cisco 2911 #2","comment":"","template":"Cisco 2911-K9","x":0,"y":711,"mount":"front","cls":"device","manufacturer":"Cisco","description":"CISCO2911/K9 - 2900 Series Integrated Service Router","width":450,"height":89,"depth":305,"power_consumption":0.22}]}]}]}]},{"id":2,"name":"Зона 2","comment":"Тестовая зона 2","cls":"zone","children":[{"id":1,"name":"Подзона 1","comment":"Тестовая подзона 1","cls":"subzone","children":[{"id":2,"name":"Объект 2","comment":"Например подстанция","latitude":null,"longitude":null,"cls":"facility","children":[{"id":3,"name":"Здание 3","comment":"","address":"Московская ул. 31","cls":"building","children":[{"id":7,"name":"Стойка 7","comment":"Стойка 7 - тестовая","template":"Tripp_Lite_U42","serial_number":"123456","inventory_number":"54321","install_date":1555020000000,"warranty_date":1557440000000,"lifespan_date":1558560000000,"cls":"cabinet","width":1000,"depth":600,"usize":22,"children":[{"id":23,"name":"КДС_10","comment":"","template":"Unitel KDS","x":0,"y":0,"mount":"front","cls":"device","vendor_code":"KDS","manufacturer":"Unitel Engineering","description":"PLC 105-DI 2-temperature 2-relay_output, 19\" / 1 HU","width":450,"height":46,"depth":173,"weight":2.8},{"id":24,"name":"ПРП_7","comment":"Панель распределения питания","template":"Unitel PRP","x":0,"y":44,"mount":"front","cls":"device","vendor_code":"UI","manufacturer":"Unitel","description":"Панель распределения питания","width":450,"height":135,"depth":400,"weight":5},{"id":25,"name":"Umux 1200 ","comment":"","template":"UMUX 1200","x":0,"y":222,"mount":"front","cls":"device","manufacturer":"Keymile","description":"Multi-Service Subrack, 19\" / 4 HU","width":450,"height":188,"depth":280,"weight":"N/A"}]}]}]}]},{"id":2,"name":"Подзона №5","comment":"","cls":"subzone","children":[{"id":4,"name":"56","comment":"","address":"","cls":"building","children":[]}]}]},{"id":3,"name":"Выставка","comment":"Что будет на выставке","cls":"zone","children":[{"id":3,"name":"Выставочный центр","comment":"","latitude":null,"longitude":null,"cls":"facility","children":[{"id":5,"name":"Павильон","comment":"","address":"","cls":"building","children":[{"id":8,"name":"Стенд","comment":"","template":"Tripp_Lite_U42","serial_number":"111","inventory_number":"123","install_date":0,"warranty_date":0,"lifespan_date":0,"cls":"cabinet","width":1000,"depth":600,"usize":22,"children":[{"id":63,"name":"КДС-выставка","comment":"","template":"Unitel KDS","x":0,"y":0,"mount":"front","cls":"device","vendor_code":"KDS","manufacturer":"Unitel Engineering","description":"PLC 105-DI 2-temperature 2-relay_output, 19\" / 1 HU","width":450,"height":46,"depth":173,"weight":2.8},{"id":64,"name":"ПРП-выставка","comment":"","template":"Unitel PRP","x":0,"y":44,"mount":"front","cls":"device","vendor_code":"UI","manufacturer":"Unitel","description":"Панель распределения питания","width":450,"height":135,"depth":400,"weight":5},{"id":65,"name":"ЭО-2 выставка","comment":"","template":"Unitel EO2","x":0,"y":178,"mount":"front","cls":"device","vendor_code":"PKUS CP24 EO-2","manufacturer":"Unitel Engineering","description":"Преобразователь оптических интерфейсов E1 (CMI, G.704) или C37.94 в электрический E1 (HDB3, G.703), 19\" / 1 HU","width":450,"height":45,"depth":250,"weight":2.8},{"id":66,"name":"Cisco выставка","comment":"","template":"Cisco 2911-K9","x":0,"y":222,"mount":"front","cls":"device","manufacturer":"Cisco","description":"CISCO2911/K9 - 2900 Series Integrated Service Router","width":450,"height":89,"depth":305,"power_consumption":0.22}]}]}]}]}],
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

              // $http.get('device').then((response) => {
              // $http.get('links?cls=__ROOT__&id=undefined&end=device&compact').then((response) => {
              $http.get('links?cls=__ROOT__&id=undefined&end=device&compact').then((response) => {

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
