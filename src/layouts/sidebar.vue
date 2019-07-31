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
              :open="open"
              :items="getTree"
              :active.sync="active"
              item-disabled="disabled"
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

    open: ['public'],
    tree: [],
    items: [],
    active: [],

  }),

  computed: {

    getTree: function () {

      return this.tree

    },

  },

  watch: {

    active: function (newVal) {

        if(this.tree.length < 1) return
        if (!newVal.length) {
          console.log('!active', newVal)
          this.active.push(this.tree[0])
          this.$router.push('/')
        }
        if (newVal[0].cls == 'cabinet') {
          console.log('active cabinet', newVal)
          this.$store.dispatch('activeCabinet', newVal[0])
          this.$router.push('/physical/' + newVal[0].cls)
        }
        else {
          console.log('active selected', newVal)
          this.$store.dispatch('activeLocation', newVal[0])
          this.$router.push('/physical/' + newVal[0].cls)
        }

    },

  },

  created () {

    this.setup()

  },

  beforeMounted () {},

  mounted () {},

  updated () {},

  beforeDestroy () {},

  methods: {

    testhandler: function (payload) {

      console.log('payload', payload)

    },

    setup: function () {

      if (this.$route.meta.sidebar === 'physical') {

        this.loadTree()

      }

      if (this.$route.meta.sidebar === 'logical') {
        return
      }

    },

    loadTree: async function () {

      await this.$store.dispatch('loadDevices').then(() => {

        if(!this.$store.state.devices.devices) return

        let data = this.$merge([], this.$store.state.devices.devices)


        function get (arr) {

          let array = arr.map(item => {

            if(item.cls && item.cls == 'cabinet') {
              item.children = []
            }
            if(item.cls && item.cls == 'device') {
              item.children = []
            }
            if(item.children && item.children.length > 0) {
              get(item.children)
            }

            return item
          })
          return array
        }

        this.tree = get(data)

        this.active.push(this.tree[0])

      })
    },
  }
}
</script>

<style lang="stylus">

</style>
