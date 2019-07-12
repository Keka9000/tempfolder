<template>
  <v-layout fill-height justify-start align-center>

    <div class="cabinet red--" >
      <v-flex v-for="(key, index) in getSlots" :key="key">
        <component
          :is="'slot-normal'"
          :id="key"
          :data="slot[key]"
        />

      </v-flex>
    </div>

    <div class="cabinet-positions">
      <div v-for="(key, index) in getSlots" :key="key"
        class="position"
      >
        {{key}}
      </div>
    </div>
  </v-layout>
</template>

<script>

import SlotNormal from './slot-normal'

export default {

  components: {

    'slot-normal': SlotNormal

  },

  props: {},

  data: () => ({

    cabinetSize: 42,
    slot: {},

  }),

  computed: {

    getActiveDevice: function () {

      return this.$store.getters['getActiveDevice']

    },

    getSlots: function () {

      let keys = Object.keys(this.slot).slice().reverse();

      return keys

      // return this.slot

    },

  },

  watch: {},

  created () {

    this.setup()

  },

  mounted () {},

  updated () {},

  beforeDestroy () {},

  methods: {

    setup: function () {

      this.getSlotData()

    },

    getSlotData: function () {

      for (let i = 0; i < this.cabinetSize; i++) {

        this.slot[i + 1] = {
          id: i + 1,
          open: false,
        }

      }

    },

  },

}
</script>

<style scoped>

.cabinet {
  width:276px;
  height:900px;
  background-image: url(template/_rack.png);
  /* background-size: contain; */
  background-size: cover;
  padding: 28px 28px 32px 28px;
  /* position: relative; */
  /* background-color: white; */
  /* border: solid 1px grey */
}

.cabinet-positions {
  width:20px;
  height:900px;
  padding: 28px 0px 32px 6px;
  /* position: relative; */
  /* background-color: white; */
  /* border: solid 1px grey */
}

.position {
  width:20px;
  height:20px;
  /* position: relative; */
  /* background-color: white; */
  /* border: solid 1px grey */
}

.slot {
  height: 20px;
  width: 220px;
  background-color: white;
  /* border: solid 1px grey; */
  position: relative;
  /* padding: 1px 1px 1px 1px; */
}

.slot-closed {
  height: 20px;
  width: 220px;
  background-color: grey;
  /* border: solid 1px grey; */
  position: relative;
  /* padding: 1px 1px 1px 1px; */
}

.slot-denied {
  height: 20px;
  width: 220px;
  background-color: red;
  opacity: .5;
  /* border: solid 1px grey; */
  position: relative;
  /* padding: 1px 1px 1px 1px; */
}

</style>
