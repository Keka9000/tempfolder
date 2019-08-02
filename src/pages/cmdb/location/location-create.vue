<template>
  <v-container fluid fill-height pa-0>
    <v-layout column ma-0>

      <v-flex xs1 class="red--" pa-1>
        <v-layout fill-height ma-0 align-center>
          <!-- <v-flex class="text-xs-center" shrink pa-1> -->
            <span class="subheading font-weight-regular">Локация создается в</span>
          <!-- </v-flex> -->
          <component
            is="crumbs"
            :crumbs="getCrumbs"
            @crumbClick="(payload) => testAlert(payload)"
          />
        </v-layout>
        <!-- <v-layout fill-height class="white" ma-0>
          <v-flex xs8 class="blue">

          </v-flex>

          <v-flex xs4 class="blue lighten-3">

          </v-flex>

        </v-layout> -->
      </v-flex>
      <v-flex xs1 class="green" pa-1>

        <!-- {{getCrumbs}} -->
        <!-- <v-layout fill-height class="white" ma-0>
          <v-flex xs8 class="blue">

          </v-flex>

          <v-flex xs4 class="blue lighten-3">

          </v-flex>

        </v-layout> -->
      </v-flex>
      <v-flex xs3 class="red" pa-1>
        {{getMeta.children}}
        <!-- <v-layout fill-height class="white" ma-0>
          <v-flex xs8 class="blue">

          </v-flex>

          <v-flex xs4 class="blue lighten-3">

          </v-flex>

        </v-layout> -->
      </v-flex>

      <!-- <v-flex xs2 class="green" pa-1>
        <v-layout fill-height class="white" ma-0>

          <v-flex class="blue lighten-4">
            {{getData}}
          </v-flex>

        </v-layout>
      </v-flex> -->

      <v-layout class="grey--" justify-end pa-1>
        <v-btn small color="primary" @click="">Добавить</v-btn>

        <v-btn small flat active-class @click="()=>this.$emit('cansel')">Отменить</v-btn>
      </v-layout>

    </v-layout>
  </v-container>
</template>

<script>

import Crumbs from '@/components/partials/bread-crumbs'

export default {

  components: {
    Crumbs
  },

  props: {
    data: {
      type: Object,
      default: () => ({})
    },

    meta: {
      type: Object,
      default: () => ({})
    },

    crumbs: {
      type: Array,
      default: () => ([])
    },
  },

  data: () => ({}),

  computed: {

    getData: function () {

      return this.data

    },

    getMeta: function () {

      return this.meta

    },

    getCrumbs: function () {

      return this.crumbs

    }

  },

  methods: {

    testAlert: function (message) {

      alert(message)

    },

  },


}
</script>

<style scoped>

.create-location {
  background-color: transparent;
}

.create-location:hover {
    background-color: blue;
    cursor: pointer;
}

</style>
