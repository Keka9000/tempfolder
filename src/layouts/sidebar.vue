<template>

  <v-navigation-drawer
    class="back"
    app---
    dark---
    floating
    persistent
    mobile-break-point="991"
    width="500"
  >

    <scroll-area>

      <!-- <template slot="header">

          <v-layout fill-height>
            <v-flex xs12 class="title text-xs-center py-2">
              Оборудование
            </v-flex>
          </v-layout>


      </template> -->

      <template slot="body">

        <v-container fluid fill-height ma-0 pa-0>
          <!-- <v-layout column justify-start align-start style="border-right: solid 1px #F7941D; overflow-x: hidden !important"> -->
          <v-layout column justify-start align-start style="overflow-x: hidden !important">

            <v-treeview
              style="cursor: pointer"
              hoverable---
              v-model="tree"
              :open="open"
              :items="getDevices"
              :active.sync="active"
              activatable
              item-key="name"
              return-object
              multiple-active---
              open-on-click---
            >
              <template
                v-slot:prepend="{ item, open }"
              >
                <v-icon v-if="!item.file">
                  {{ open ? 'folder_open' : 'folder' }}
                </v-icon>
                <v-icon v-else>
                  usb
                </v-icon>
              </template>
            </v-treeview>
            <!-- {{active}} -->
          </v-layout>
        </v-container>

      </template>

      <template slot="footer">

        <v-container v-show="$route.meta.sidebar === 'physical'" fluid fill-height >

          <v-layout column fill-height >

            <!-- <v-flex v-for="(n, index) in 30" :key="index" class="orange---">
              {{n}}
            </v-flex> -->
            <v-flex v-if="active.length">
              <!-- {{active}} -->
            </v-flex>


          </v-layout>

        </v-container>

      </template>

    </scroll-area>

  </v-navigation-drawer>

</template>

<script>

import scrollArea from './../components/partials/scrollarea'

export default {

  name: 'Sidebar',

  components: {

    'scroll-area': scrollArea,

  },

  data: () => ({
    // logo: require('@/assets/img/redditicon.png'),
    links: [
      {
        to: '/physical',
        // icon: 'mdi-view-dashboard',
        text: 'Физические'
      },
      {
        // to: '/dashboard/user-profile',
        to: '/schema',
        // icon: 'mdi-account',
        text: 'Схемы'
      },
      {
        // to: '/dashboard/table-list',
        to: '/alarm-log',
        // icon: 'mdi-clipboard-outline',
        text: 'Журнал событий'
      },
    ],
    responsive: false,

    open: ['public'],
    // active: this.getDevices[0],
    active: [],
    active_link: {
      building: 'location',
      cabinet: 'cabinet',
      device: 'device'
      // cabinet: 'physical/cabinet',
      // device: 'physical/device'
    },
    rules: {
      device: payload => payload.cls != 'device',
    },

    tree: [],
    items: []
  }),

  computed: {

    getDevices: function () {

      return this.$store.getters['getDevices']

    },

  },

  watch: {

    active: function (newVal) {

        if(!newVal.length) {
          console.log('мимо', newVal.length)
          this.active.push(this.getDevices[0])
          this.$router.push('/')
        } else {
          console.log('newval', newVal[0].cls, newVal[0].id)

          if (newVal[0].cls == 'cabinet') {
            this.$store.dispatch('cabinet', newVal[0])
            this.$router.push('/physical/' + newVal[0].cls)
          } else {
            this.$store.dispatch('selected', newVal[0])
            this.$router.push('/physical/' + newVal[0].cls)
          }

        }

    },

  },

  created () {
    // this.onResponsiveInverted()
    // window.addEventListener('resize', this.onResponsiveInverted)
    // this.setup()



    // this.$http.get('links?heap&only=socket').then((response) => {
    //
    //   if (response) {
    //
    //     console.log('loadActivePorts', response)
    //     // commit('ADD_ACTIVE_PORTS', response.data)
    //
    //   }
    //
    // })



  },

  beforeMounted () {



  },

  mounted () {

    this.active.push(this.getDevices[0])

  },

  updated () {

    // this.setup()

  },
  beforeDestroy () {
    // window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {

    testhandler: function (payload) {

      console.log('payload', payload)

    },

    // treeFilter: function (payload) {
    //
    //   payload => payload.length >= 8 || 'Min 8 characters',
    //
    // },

    setup: function () {

      if (this.$route.meta.sidebar === 'physical') {
        // console.log('this.loadDevices() started')
        // this.loadDevices()
        this.$store.dispatch('loadDevices')
        return
      }

      if (this.$route.meta.sidebar === 'logical') {
        // console.log('this.loadDevices() started')
        // this.loadConnections()
        return
      }

    },

    loadActivePorts: function () {
      // console.log('this.loadActivePorts() started')
      // this.$store.dispatch('loadActivePorts')
    },
    // ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    // onResponsiveInverted () {
    //   if (window.innerWidth < 991) {
    //     this.responsive = true
    //   } else {
    //     this.responsive = false
    //   }
    // }
  }
}
</script>

<style lang="stylus">

</style>
