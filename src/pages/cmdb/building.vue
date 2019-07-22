<template>
  <!-- <v-container fluid fill-height pa-0 > -->
    <!-- <v-layout column class="cabinet" ma-0 justify-start align-start> -->
      <!-- <v-flex v-for="device in getDevices" class="cabinet"> -->
      <div class="cabinet">
        <another-device v-for="device in getDevices" :data="device"/>
      </div>
      <!-- </v-flex> -->

    <!-- </v-layout> -->
  <!-- </v-container> -->
  <!-- <div ref="unit" class="parent-class"> -->
  <!-- <v-container fluid fill-height pa-0 > -->
  <!-- <content>
    <div class="cabinet" v-for="device in getDevices">
      <another-device :data="device"/>
    </div>
  </content> -->
  <!-- </v-container> -->
</template>

<script>

import AnotherDevice from '@/components/physical/device/another-device'

export default {

  components: {
    AnotherDevice

  },

  props: {},

  data: () => ({

    response: {},


  }),

  computed: {

    getDevices: function () {

      return this.response

    },

  },

  created () {


    let data = this.$store.getters['getDevices']

    this.response = data[0].children[0].children[0].children[0].children

    // console.log('response', this.response )
    // console.log('cabinet', data[0].children[0].children[0].children[0] )

    let el = document.getElementById('app')
    let size = el.getBoundingClientRect()
    console.log('size', size )



    // this.$http.get('links?cls=device&id=3&null').then((response) => {
    //
    //     // if (response.data.valid) {
    //     if (response) {
    //
    //         console.log('test', 'loadDevice', 'response', response)
    //
    //
    //     } else {
    //
    //         console.log('test', 'loadDevice', 'smth wrong')
    //
    //     }
    //
    // }, (err) => {
    //
    //     console.error('test', 'loadDevice', 'error', err)
    //
    // })

  },

  mounted () {

    // console.log('$el', this.$el)
  },
  // links?cls=device&id=3&null


  methods: {}


}
</script>

<style>

.cabinet {
  height: 1200px;
  width: 2000px;
  transform-origin: 0 0;
  transform: scale(.5);
  position: absolute;
}


</style>
