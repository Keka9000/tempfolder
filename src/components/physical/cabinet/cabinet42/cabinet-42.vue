<template>
  <v-layout fill-height justify-start align-center>

    <div class="cabinet red--" >
      <v-flex v-for="(key, index) in getUnitPosition" :key="key">
        <component
          :is="'unit-normal'"
          :unit_id="key"
          :data="getUnitData[key]"
        />
        <!-- {{getUnitDevice}} -->
      </v-flex>
    </div>

    <div class="unit-positions">
      <div v-for="(key, index) in getUnitPosition" :key="key"
        class="position"
      >
        {{key}}
      </div>
    </div>

    <!-- {{unit}} -->
  </v-layout>
</template>

<script>

import UnitNormal from './unit-normal'

export default {

  components: {

    'unit-normal': UnitNormal

  },

  props: {

    data: {
      type: Array,
      default: () => ([])
    },

  },

  data: () => ({

    cabinetSize: 42,

    unit: {},

  }),

  computed: {

    getUnitPosition: function () {

      let keys = Object.keys(this.unit).slice().reverse();

      return keys

    },

    getUnitData () {

      this.createUnits()
      this.data.forEach(device => {
        this.unit[device.position].open = false
        this.unit[device.position].unit = device
      })
      // console.log('this.unit', this.unit)
      return this.unit

    },

  },

  watch: {},

  created () {

    console.log('cabinet-42 created')
    this.setup()


  },

  mounted () {},

  updated () {

    // this.createUnits()
    console.log('cabinet-42 updated', this.data)

  },

  beforeDestroy () {},

  methods: {

    setup: function () {

      this.createUnits()

    },

    createUnits: function () {

      for (let i = 0; i < this.cabinetSize; i++) {

        this.unit[i + 1] = {
          id: i + 1,
          open: true,
          unit: null
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

.unit-positions {
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

.unit {
  height: 20px;
  width: 220px;
  background-color: white;
  /* border: solid 1px grey; */
  position: relative;
  /* padding: 1px 1px 1px 1px; */
}

.unit-closed {
  height: 20px;
  width: 220px;
  background-color: grey;
  /* border: solid 1px grey; */
  position: relative;
  /* padding: 1px 1px 1px 1px; */
}

.unit-denied {
  height: 20px;
  width: 220px;
  background-color: red;
  opacity: .5;
  /* border: solid 1px grey; */
  position: relative;
  /* padding: 1px 1px 1px 1px; */
}

</style>
