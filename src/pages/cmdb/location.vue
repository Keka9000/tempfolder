<template>
  <v-container fluid fill-height class="blue" pa-0>
    <v-layout column class="yellow--" pa-2>

      <v-flex xs1>

        <v-layout class="pink--" justify-space-between align-center px-1>

          <v-flex class="pink">
            <span class="title font-weight-medium">Локация</span>
          </v-flex>

          <v-flex xs2>

            <v-layout class="grey--" fill-height justify-space-around align-center px-2>

              <v-btn flat icon color="primary">
                <v-icon color="primary">star_outline</v-icon>
              </v-btn>
              <v-flex ml-3>
                <span class="subheader">Избранное</span>
              </v-flex>

            </v-layout>

          </v-flex>

        </v-layout>

        <v-layout class="cyan--" justify-start px-1>
          <v-flex class="pink">
            <span class="title font-weight-medium">navigation path / navigation path / navigation path</span>
          </v-flex>
        </v-layout>

      </v-flex>

      <v-flex xs3 class="yellow" pa-1>
        <v-layout fill-height class="white" ma-0>
          <v-flex xs8 class="blue">

          </v-flex>

          <v-flex xs4 class="blue lighten-3">

          </v-flex>

        </v-layout>
      </v-flex>

      <v-flex xs2 class="green" pa-1>
        <v-layout fill-height class="white" ma-0>

          <v-flex class="blue lighten-4">
            <!-- {{getSelected}} -->
          </v-flex>

        </v-layout>
      </v-flex>

      <v-flex class="grey" pa-1>

      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {

  components: {},

  props: {},

  data: () => ({
    location: {}
  }),

  computed: {

    getSelected: function () {

      return this.$store.getters['getSelected']

    },

  },

  watch: {},

  created () {

    console.log('location page created')


  },

  mounted () {
    let sel = this.$store.getters['getSelected']
    console.log('sel', sel)
  },

  updated () {
    let sel = this.$store.getters['getSelected']
    console.log('sel', sel)
    console.log('location page updated')

  },

  beforeDestroy () {},

  methods: {

    setup: function () {},

  },

}
</script>

<style lang="css" scoped>
</style>
