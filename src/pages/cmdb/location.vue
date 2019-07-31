<template>
  <v-container fluid fill-height class="blue" pa-0>
    <v-layout column class="yellow--" pa-2>

      <v-flex xs1>

        <v-layout class="pink--" justify-space-between align-center px-1>

          <v-flex class="pink">
            <span class="title font-weight-medium">{{getActiveLocation.name}}</span>
          </v-flex>

          <v-flex xs2>

            <v-layout class="grey--" fill-height justify-space-around align-center px-2>

              <v-btn flat icon color="primary">
                <v-icon color="primary">star_outline</v-icon>
              </v-btn>
              <v-flex ml-3>
                <span class="subheader">Избранное</span>
              </v-flex>

            </v-layout>

          </v-flex>

        </v-layout>

        <v-layout class="cyan--" justify-start px-1>
          <v-flex shrink class="pink" pr-2
            @click="() => testAlert(getActiveLocation.name + ' открываем интерфейс создания локации')"
          >
            <span class="title font-weight-medium">Создание новой локации</span>
          </v-flex>
          <v-flex shrink class="pink" pr-2
            @click="() => testAlert(getActiveLocation.name + ' открываем интерфейс импорта локации из шаблона')"
          >
            <span class="title font-weight-medium">Импорт локации из шаблона</span>
          </v-flex>
        </v-layout>

      </v-flex>

      <v-flex xs3 class="yellow" pa-1>
        <v-layout fill-height class="white" ma-0>
          <v-flex xs8 class="blue">

          </v-flex>

          <v-flex xs4 class="blue lighten-3">

          </v-flex>

        </v-layout>
      </v-flex>

      <v-flex xs2 class="green" pa-1>
        <v-layout fill-height class="white" ma-0>

          <v-flex class="blue lighten-4">
            {{getActiveLocation}}
          </v-flex>

        </v-layout>
      </v-flex>

      <v-flex class="grey" pa-1>

      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {

  components: {},

  props: {},

  data: () => ({
    location: {},
    crumbs: ''
  }),

  computed: {

    getActiveLocation: function () {

      return this.$store.getters['getActiveLocation']

    },

    // getCrumbs: function () {
    //
    //   return this.crumbs
    //
    // },

  },

  watch: {},

  created () {

    console.log('location page created')

  },

  mounted () {},

  updated () {
    // this.createCrumbs()
  },

  beforeDestroy () {},

  methods: {

    setup: function () {},

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

<style lang="css" scoped>
</style>
