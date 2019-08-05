<i18n>
  {
    "en": {
      "create new location": "create new location",
      "import location from template": "import location from template",
    },
    "ru": {
      "create new location": "Создание новой локации",
      "import location from template": "Импорт локации из шаблона",
    }
  }
</i18n>


<template>
  <v-container fluid fill-height class="blue--" pa-0>
    <v-layout column class="yellow--" pa-2>

      <v-flex xs1>

        <v-layout class="pink--" justify-space-between align-center px-1>

          <v-flex class="pink--">
            <span class="title font-weight-medium">{{getData.name}}</span>
          </v-flex>

          <v-flex shrink>

            <v-layout class="grey--" fill-height justify-space-around align-center px-2>

              <v-btn flat icon color="primary">
                <v-icon color="primary">star_outline</v-icon>
              </v-btn>
              <v-flex shrink ml-3 class="green---">
                <span class="subheader">Избранное</span>
              </v-flex>

            </v-layout>

          </v-flex>

        </v-layout>

        <v-layout align-baseline>

          <!-- <span v-if="model.show !='common'" class="subheading font-weight-regular">Локация создается в:</span> -->
          <!-- <v-app-bar
            color="deep-purple accent-4"
            dense
            dark
          >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Page title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              v-for="(crumb, index) in getCrumbs"
              :key="index"
            >
              {{crumb.name}}
            </v-btn>


          </v-app-bar> -->
          <component
            v-if="model.show =='common'"
            is="crumbs"
            :crumbs="getCrumbs"
            @crumbClick="(payload) => testAlert(payload)"
          />

          <!-- <v-breadcrumbs :items="getCrumbs">
            <template v-slot:item="props">
              <v-flex
                class="crumbs subheading font-weight-regular text-uppercase"
                @click="() => {testAlert(props.item.name)}"
              >
                {{ props.item.name }}
              </v-flex>
            </template>
          </v-breadcrumbs> -->

          <!-- <v-chip
            v-for="(crumb, index) in getCrumbs"
            :key="index"
            class="subheading font-weight-medium"
          >
            {{crumb.name}}
          </v-chip> -->
        </v-layout>

        <v-layout class="cyan--" justify-start px-1 mt-2
          v-if="model.show =='common'"
        >
          <v-flex shrink class="create-location" pr-2
            @click="model.show = 'create'"
          >
            <!-- <span class="title font-weight-medium">Создание новой локации</span> -->
            <v-btn dark small class="grey lighten-2 font-weight-medium">Создание новой локации</v-btn>
            <!-- <v-btn dark small class="grey lighten-2 font-weight-medium">{{ $t('create new location') }}</v-btn> -->
          </v-flex>
          <v-flex shrink class="create-location"  pr-2
            @click="model.show = 'import'"
          >
            <v-btn dark small class="grey lighten-2 font-weight-medium">Импорт локации из шаблона</v-btn>
            <!-- <v-btn dark small class="grey lighten-2 font-weight-medium">message: {{ $t('import location from template') }}</v-btn> -->
            <!-- <span class="title font-weight-medium">Импорт локации из шаблона</span> -->
          </v-flex>
        </v-layout>

      </v-flex>

      <!-- <v-divider ></v-divider> -->
      <v-progress-linear
        value="0"
        height="5"
        class="grey lighten-2"
        background-color="transparent"
      ></v-progress-linear>

      <v-flex xs11 class="black--" pa-0>

        <component
          :is="getShowModel"
          :data="getData"
          :meta="getMeta"
          :crumbs="getCrumbs"
          @cansel="model.show = 'common'"
        />

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import Common from './location-common'
import Create from './location-create'
import Import from './location-import'
import Crumbs from '@/components/partials/bread-crumbs'


export default {

  components: {
    Common,
    Create,
    Import,
    Crumbs
  },

  props: {},

  data: () => ({
    model: {
      show: "common",
    },
    meta: {},
    location: {},
    crumbs: []
  }),

  computed: {



    getData: function () {

      // return this.$store.getters['getData']
      return this.location

    },

    getMeta: function () {

      return this.meta

    },

    getShowModel: function () {

      return this.model.show

    },

    getCrumbs: function () {

      return this.crumbs

    }

  },

  watch: {

    '$store.state.devices.activeLocation': function(newVal) {
      // console.log('newVal on WATCH', newVal)
      if(!newVal) return
      // this.location = this.$merge({}, newVal)
      // this.model.show = "common"
      this.setup()
    }

  },

  created () {

    this.setup()

  },

  mounted () {},

  updated () {},

  beforeDestroy () {},

  methods: {

    setup: function () {
      // console.log('location setup started')
      if(!this.$store.state.devices.activeLocation) return
      this.location = this.$merge({}, this.$store.state.devices.activeLocation)
      this.model.show = "common"
      this.loadMeta()
    },

    loadMeta: async function() {
      // console.log('loadMeta started')
      await this.$bridge.getMeta(this.location.cls).then((response) => {
          if (response) {
              // console.log('Location', 'loadMeta', 'response', response)
              this.meta = response.data
              this.createCrumbs()
          } else {
              console.log('Location', this.location.cls, this.location.id, 'loadMeta smth wrong')
          }
      })
      // await this.$http.get(this.location.cls + '/meta').then((response) => {
      //
      //     if (response) {
      //         console.log('Location', 'loadMeta', 'response', response)
      //         this.meta = response.data
      //         this.createCrumbs()
      //     } else {
      //         console.log('Location', this.location.cls, this.location.id, 'loadMeta smth wrong')
      //     }
      // })
    },

    createCrumbs: async function() {
      let child = this.$store.state.devices.activeLocation
      // api/:cls/:id/path[?include][&compute]
      await this.$http.get(child.cls + '/' + child.id + '/path').then((response) => {
        // console.log('Location', 'createCrumbs', 'response', response)
        this.crumbs = this.$merge([], response.data)
      })

    },

    testAlert: function (message) {

      alert(message)

    },

    // createCrumbs: function () {
    //
    //   let active = this.$store.state.devices.activeLocation
    //   let activeElem = active.cls + active.id
    //   let structure = this.$store.state.devices.devices
    //   // console.log('ACTIVE', active.cls, active.id)
    //   // console.log('STRUCTURE', structure)
    //
    //   let crumbs = Array(6)
    //   // console.log('crumbs', crumbs)
    //   function makeCounter() {
    //     var currentCount = 0;
    //
    //     return function() {
    //       return currentCount++;
    //     };
    //   }
    //   let counter = 0
    //
    //   let chips
    //
    //   function get (arr, merge) {
    //
    //     arr.forEach(item => {
    //       crumbs.splice(counter, 1, item.name)
    //
    //       if(item.cls + item.id == activeElem) {
    //         console.log('find!!!', 'item: ', item.name, 'activeElem: ', active.name,  crumbs)
    //         let c = merge([], crumbs)
    //         chips = c.slice(0, counter)
    //         // console.log('counter', counter)
    //         console.log('chips', chips)
    //         return
    //       }
    //
    //       if(item.children && item.children.length) {
    //         counter++
    //         get(item.children, merge)
    //       }
    //       counter = 0
    //     })
    //   }
    //
    //   get(structure, this.$merge)
    //   // console.log('CRUMBS', crumbs)
    //   // console.log('CHIPS', chips)
    //   this.crumbs = chips
    //
    // }

  },

}
</script>

<style scoped>

.crumbs {
  color: black;
}

.crumbs:hover {
  color: red;
  cursor: pointer;
}

.create-location {
  background-color: transparent;
}

.create-location:hover {
    color: red;
    cursor: pointer;
}

</style>
