<template>

  <div class="cabinet red--">

    <v-layout column class="green-- wrapper">

        <device v-if="getDevices" v-for="(device, index) in getDevices" :key="device.name"
          :data="device"
          @select="(payload) => deviceSelectHandler(payload)"
        />

      <v-layout v-if="unit" v-for="(key, index) in getUnitPosition" :key="key">

        <div
          v-if="unit[key].open"
          :id="key"
          class="unit text-xs-center display-1"
          @click="(payload) => unitClickHandler(payload)"
        >
          добавить устройство
        </div>
        <div
          v-if="!unit[key].open"
          :id="key"
          class="unit text-xs-center display-1 grey lighten-3"
          @click=""
        >
          <!-- closed -->
        </div>

        <!-- <v-flex class="blue headline test-xs-center" ml-3 pt-2>
          {{key}}
        </v-flex> -->
        <div class="blue-- headline test-xs-center unit-positions">
          {{key}}
        </div>

      </v-layout>

    </v-layout>

  </div>

</template>

<script>

import Device from '@/components/physical/device/device'

export default {

  components: {

    Device

  },

  props: {
    mountSide: String,

    data: {
      type: Object,
      default: () => ({})
    },
  },

  data: () => ({

    size: null,
    side: '',
    unit: {},

  }),

  computed: {

    getDevices: function () {

      if (!this.data) return

      if (this.data.children) {

        return this.data.children.filter(device => {

          return device.mount == this.side

        })

      }

    },

    getUnitPosition: function () {

      let keys = Object.keys(this.unit).slice().reverse();

      return keys

    },

  },

  watch: {

    data (newVal) {

      if(!newVal) return

      this.setup()

    },

  },

  created () {

    // console.log('cabinet created')
    this.setup()

  },

  mounted () {},

  updated () {

    // console.log('cabinet updated')
    // this.setup()
  },

  beforeDestroy () {},

  methods: {

    setup: function () {

      this.size = this.data.usize
      this.side = this.mountSide
      // console.log('side', this.side)
      this.createUnits()
      this.addUnitStatus()
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

    addUnitStatus: function () {

      if(!this.data.children) return
      // console.log('addUnitStatus children', this.data.children)
      this.data.children.forEach(device => {

        this.unit[device.position].open = false
        if(device.height && device.height > 45) {

          let count = Math.ceil( device.height / 45 )
          // console.log('big device', device.name, count)
          for(let i = device.position; i > device.position - count; i--) {
            this.unit[i].open = false
          }

        }

      })
    },

    unitClickHandler: function (payload) {

      if (event.target !== event.currentTarget) return
      console.log('click ', this.side, payload.target.id)
      this.$emit('addDevice', {
        side: this.side,
        id: payload.target.id
      })

    },

    deviceSelectHandler: function (payload) {
      console.log('deviceSelectHandler ', payload)
      this.$emit('selectDevice', payload)

    },
  },
}
</script>

<style scoped>

.cabinet {
  height: 100%;
  width: 100%;
  /* transform-origin: 0 0; */
  /* transform: scale(.45); */
  position: relative;
  cursor: pointer;
  background-image: url(cabinet42/template/_rack.png);
}

.wrapper {
  transform-origin: 0 0;
  transform: scale(.45);
  left: 28px;
  top: 28px;

  /* padding: 14px 0px 20px 6px; */

  position: absolute;
}

.unit {
  height: 44.5px;
  width: 450px;
  background-color: white;
  box-sizing: border-box;
  border: solid 1px grey;

  /* border: solid 1px grey; */
  /* position: relative; */
  color: #fff;
  /* padding: 1px 1px 1px 1px; */
}

  .unit:hover {

    background-color: #F7941D;


  }

.unit-positions {
  width: 150px;
  display: flex;
  justify-content: flex-end;
  /* height:900px; */
  padding: 6px 0px 0px 0px;

  /* position: relative; */
  /* background-color: white; */
  /* border: solid 1px grey */
}
/* .unit:hover {
  height: 44.5px;
  width: 450px;
  background-color: #F7941D;
  box-sizing: border-box;
  border: solid 1px grey;
  position: relative;

} */


  .closed {
    background-color: grey;
  }

</style>
