<template>
  <v-container fluid fill-height pa-0

    class="example-device"
    @click="(e) => testhandler(e)"
  >
    <!-- example device -->
  </v-container>
</template>

<script>
export default {

  props: {

      data: {
        type: Object,
        default: () => ({})
      },

  },

  created () {

    console.log('data', this.data)

  },

  methods: {

    testhandler: function (e) {

     // return this.data.open ? console.log('slot click.self') : false
     console.log('slot click.self', e)
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

.example-device {
  height: 20px;
  width: 220px;
  /* background-color: yellow; */
  background-image: url(png/_device2.png);
  /* background-size: contain; */
  background-size: cover;
  /* border: solid 1px grey; */
  position: absolute;
  z-index: 9;
}

</style>
