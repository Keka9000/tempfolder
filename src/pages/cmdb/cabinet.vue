<template>
  <v-container fluid fill-height ma-0 pa-0 class="orange--" px-2>

      <v-layout fill-height class="black--" ma-0 pa-0 >

        <v-flex xs3 ma-0 pa-0 px-2>

          <v-layout fill-height class="blue--" justify-space-around align-center ma-0 pa-0 >

            <component
              :is="'cabinet-42'"
              :data="getActiveDevice.children"
            />

          </v-layout>

        </v-flex>

        <v-flex xs3 ma-0 pa-0 px-2>

          <v-layout fill-height class="blue--" justify-space-around align-center ma-0 pa-0 >

            <component
              :is="'cabinet-42'"
              :data="getActiveDevice.children"
            />

          </v-layout>

        </v-flex>

        <v-flex ma-0 pa-0 >

          <v-layout column fill-height class="cyan--"ma-0 pa-2 >

            <v-layout column class="blue--" justify-start>

              <v-flex xs1>

                <v-layout column class="yellow--">

                <span class="title font-weight-medium">Собираем</span>

                <v-layout class="pink--" justify-space-between>

                  <span class="display-1 font-weight-black">{{getActiveDevice.name}}</span>

                  <v-flex xs2>

                    <v-layout class="grey--" fill-height justify-space-around align-center px-2>

                      <v-btn flat block icon color="primary">
                        <v-icon>star</v-icon>
                      </v-btn>
                      <span class="subheader">Избранное</span>

                    </v-layout>

                  </v-flex>

                </v-layout>


                </v-layout>

              </v-flex>

              <v-flex xs5 class="grey">

                <!-- {{$store.state.devices.active}} -->

              </v-flex>


            </v-layout>

          </v-layout>

        </v-flex>

        <!-- {{getActiveDevice}} -->

      </v-layout>

  </v-container>
</template>

<script>

import Cabinet42 from '@/components/physical/cabinet/cabinet42/cabinet-42'

export default {

  components: {

    'cabinet-42': Cabinet42,

  },

  props: {},

  data: () => ({}),

  computed: {

    getActiveDevice: function () {


      return this.$store.getters['getActiveDevice']
      // return this.$store.state.devices.active
      // return this.$store.state.active

    },

    getRouterParams: function () {

      return this.$route.params

    },

  },

  watch: {


  },

  created () {

    console.log('cabinet created')
    // this.cabinet = Object.assign({}, this.cabinet, this.$store.getters['getActiveDevice'])
    // console.log('cabinet', this.cabinet)


  },

  mounted () {},

  updated () {

    console.log('cabinet updated')

  },

  beforeDestroy () {},

  methods: {


  },

}
</script>

<style lang="css" scoped>
</style>
