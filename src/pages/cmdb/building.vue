<template>

      <div class="cabinet">
        building
      </div>

</template>

<script>

export default {

  components: {},

  props: {},

  data: () => ({}),

  computed: {},

  created () {

    // let bridge = this.$bridge
    // console.log('bridge', bridge)

    this.testbridge()


  },

  mounted () {},

  methods: {

    async testbridge () {

      let test
      await this.$bridge.connect('http://192.168.50.38')
      console.log('test', await this.$bridge.getEnum('cls'))

    }

  }

}
</script>

<style>

</style>
