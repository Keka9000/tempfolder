<template>
  <v-flex class="cabinet">
    <another-device v-for="device in getDevices" :data="device"/>

    <div v-if="unit" v-for="(key, index) in getUnitPosition" :key="key"
      :id="key"
      class="unit"
      @click="(payload) => testClickHandler(payload)"
    >

    </div>

  </v-flex>


</template>

<script>

import AnotherDevice from '@/components/physical/device/another-device'

export default {

  components: {

    AnotherDevice

  },

  props: {},

  data: () => ({

    size: null,
    side: 'front',
    unit: {},
    response: {},

  }),

  computed: {

    getDevices: function () {

      let devices = this.$store.getters['getActiveCabinet']

      if (devices) {

        return devices.children.filter(device => {

          return device.mount == this.side

        })

      }

    },

    getUnitPosition: function () {

      let keys = Object.keys(this.unit).slice().reverse();

      return keys

    },

  },

  watch: {},

  created () {

    console.log('cabinet created')
    this.setup()

  },

  mounted () {},

  updated () {

    console.log('cabinet updated')

  },

  beforeDestroy () {},

  methods: {

    setup: function () {

      let cabinet = this.$store.getters['getActiveCabinet']
      console.log('cabinet', cabinet)
      this.size = cabinet.usize
      this.createUnits()
    },

    createUnits: function () {

      for (let i = 0; i < this.size; i++) {

        this.unit[i + 1] = {
          id: i + 1,
          open: true,
          unit: null
        }

      }

    },

    testClickHandler: function (e) {

      if (event.target !== event.currentTarget) return
      console.log('click ', e.target.className, e.target.id)

    },

  },

}
</script>

<style scoped>

.cabinet {
  height: 100%;
  width: 100%;
  transform-origin: 0 0;
  transform: scale(.45);
  position: absolute;
}

.unit {
  height: 44.5px;
  width: 450px;
  background-color: white;
  box-sizing: border-box;
  border: solid 1px grey;
  /* border: solid 1px grey; */
  position: relative;

  /* padding: 1px 1px 1px 1px; */
}

  .closed {
    background-color: grey;
  }

</style>
