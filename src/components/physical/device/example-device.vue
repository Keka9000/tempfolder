<template>
  <div @click="(e) => testhandler(e)">
    example device
  </div>
</template>

<script>
export default {


  methods: {

    testhandler: function (e) {

     // return this.data.open ? console.log('slot click.self') : false
     console.log('slot click.self', e)

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

<style lang="css" scoped>
</style>
