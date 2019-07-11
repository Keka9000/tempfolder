<template>

  <v-navigation-drawer
    class="back"
    app---
    dark---
    floating--
    persistent
    mobile-break-point="991"
    width="400"
  >

    <scroll-area>

      <template slot="header">

          <v-layout fill-height>
            <v-flex xs12 class="title text-xs-center py-2">
              Оборудование
            </v-flex>
          </v-layout>


      </template>

      <template slot="body">

        <v-treeview
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

      </template>

      <template slot="footer">

        <v-container v-show="$route.meta.sidebar === 'physical'" fluid fill-height >

          <v-layout column fill-height >

            <!-- <v-flex v-for="(n, index) in 30" :key="index" class="orange---">
              {{n}}
            </v-flex> -->
            <v-flex v-if="active.length">
              {{active}}
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

    active: [],
    active_link: {
      building: 'location',
      cabinet: 'cabinet',
      device: 'device'
      // cabinet: 'physical/cabinet',
      // device: 'physical/device'
    },

    tree: [],
    items: [
      {
        name: '.git'
      },
      {
        name: 'node_modules'
      },
      {
        name: 'public',
        children: [
          {
            name: 'static',
            children: [{
              name: 'logo.png',
              file: 'png'
            }]
          },
          {
            name: 'favicon.ico',
            file: 'png'
          },
          {
            name: 'index.html',
            file: 'html'
          }
        ]
      },
      {
        name: '1public',
        children: [
          {
            name: 'static',
            children: [{
              name: 'logo.png',
              file: 'png'
            }]
          },
          {
            name: 'favicon.ico',
            file: 'png'
          },
          {
            name: 'index.html',
            file: 'html'
          }
        ]
      },
      {
        name: '.gitignore',
        file: 'txt'
      },
      {
        name: 'babel.config.js',
        file: 'js'
      },
      {
        name: 'package.json',
        file: 'json'
      },
      {
        name: 'README.md',
        file: 'md'
      },
      {
        name: 'vue.config.js',
        file: 'js'
      },
      {
        name: 'fvdfvdfv',
        file: 'txt'
      },
      {
        name: 'vrerve',
        file: 'js'
      },
      {
        name: 'bgbfgbfb',
        file: 'json'
      },
      {
        name: 'xscscsdc',
        file: 'md'
      },
      {
        name: 'btrterewf',
        file: 'js'
      },
      {
        name: 'wecsdcsdc',
        file: 'txt'
      }
    ]
  }),

  computed: {

    getDevices: function () {

      return this.$store.getters['getDevices']

    },

  },

  watch: {

    active: function (newVal) {

        if(!newVal.length) {
          console.log('мимо')
          this.$store.dispatch('activeDevice', newVal[0])
          this.$router.push('/physical')
        } else {
          console.log('newval', newVal[0].id)
          this.$store.dispatch('activeDevice', newVal[0])
          this.$router.push('/physical/' + newVal[0].cls)
          // this.$router.push({
          //   name: newVal[0].cls,
          //   // params: this.active[0]
          //   meta: newVal[0].id
          // })
        }

    },

  },

  created () {
    // this.onResponsiveInverted()
    // window.addEventListener('resize', this.onResponsiveInverted)
    // this.setup()
  },

  mounted () {
    // this.onResponsiveInverted()
    // window.addEventListener('resize', this.onResponsiveInverted)
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

    setup: function () {

      if (this.$route.meta.sidebar === 'physical') {
        // console.log('this.loadDevices() started')
        // this.loadDevices()
        this.$store.dispatch('loadDevices')
        return
      }

      if (this.$route.meta.sidebar === 'logical') {
        // console.log('this.loadDevices() started')
        this.loadConnections()
        return
      }

    },

    // loadDevices: function () {
    //   console.log('this.loadDevices() started')
    //   this.$http.get('device').then((response) => {
    //
    //       // if (response.data.valid) {
    //       if (response) {
    //
    //           console.log('Sidebar', 'loadDevices', 'response', response.data)
    //
    //           this.items = response.data
    //
    //
    //
    //       } else {
    //
    //           // this.$q.notify({
    //           //
    //           //     color: 'negative',
    //           //     position: 'top',
    //           //     message: 'При загрузке проектов возникла ошибка',
    //           //     icon: 'report_problem'
    //           //
    //           // })
    //
    //       }
    //
    //   }, (err) => {
    //
    //       console.error('Sidebar', 'loadDevices', 'error', err)
    //
    //   })
    //
    //
    // },
    loadConnections: function () {
      console.log('this.loadConnections() started')
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
