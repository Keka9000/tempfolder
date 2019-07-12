<template>
  <!-- :class='(data.compatible.some(device => {return device === dragged.id || dragged.id == undefined})) ? "slot" : "slot-denied"' -->
  <v-flex xs12 :id="id" grow pa-0
    @click.self="(e) => testhandler(e)"
    :class='(data.open) ? "slot" : "slot-denied"'
  >
    <component
      v-if="data.unit"
      :is="data.unit.name"
      @onMouseDown="(e) => onMouseDown(e)"
      @onMouseMove="(e) => onMouseMove(e)"
      @onMouseUp="(e) => onMouseUp(e)"
    />
  </v-flex>



 <!-- <v-flex xs12 grow class="slot">
   Я слот № {{id}} в 42 стойке
 </v-flex> -->
</template>

<script>
export default {

  props: {

    data: {
      type: Object,
      default: () => ({})
    },

    id: {
      type: String,
    },
},

  data: () => ({}),

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  updated () {},

  beforeDestroy () {},

  methods: {

    testhandler: function (e) {

     return this.data.open ? console.log('slot click.self') : false

    },

    onMouseDown: function (e) {
      // console.log('onMouseDown catch on slot', e)
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
