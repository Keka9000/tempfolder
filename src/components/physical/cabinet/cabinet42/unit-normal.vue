<template>
  <!-- :class='(data.compatible.some(device => {return device === dragged.id || dragged.id == undefined})) ? "slot" : "slot-denied"' -->
  <v-flex xs12 :id="unit_id" grow pa-0
    @click.self="(e) => testhandler(e)"
    class="text-xs-center"
    :class='(data.open) ? "unit" : "unit-closed"'
  >

    <component
      v-if="data.unit"
      :data="data.unit"
      is="example-device"
      @onMouseDown="(e) => onMouseDown(e)"
      @onMouseMove="(e) => onMouseMove(e)"
      @onMouseUp="(e) => onMouseUp(e)"
    />
  </v-flex>

</template>

<script>

// import ExampleDevice from '@/components/physical/device/example-device'
import DeviceImport from './../../device-import.js'


export default {

  components: DeviceImport,

  props: {

    data: {
      type: Object,
      default: () => ({})
    },

    unit_id: {
      type: String,
    },
},

  data: () => ({}),

  computed: {},

  watch: {},

  created () {

    // let test = DinamicImport
    // console.log(test)

  },

  mounted () {},

  updated () {},

  beforeDestroy () {},

  methods: {

    testhandler: function (e) {

     // return this.data.open ? console.log('slot click.self') : false
     console.log('slot click.self', this.unit_id, e)
     this.$store.dispatch('addSelected', this.data)

    },

    onMouseDown: function (e) {
      console.log('onMouseDown catch on slot', e)
      this.$emit('onMouseDown', e, this.data.unit)
    },

    onMouseMove: function (e) {
      this.$emit('onMouseMove', e)
    },

    onMouseUp: function (e) {
      this.$emit('onMouseUp', e, this.data.unit, this.data.id)
    },

  },

}
</script>

<style scoped>



</style>
