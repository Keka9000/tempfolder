<template>
  <v-container fluid fill-height pa-0>
    <v-layout column fill-height ma-0>
      <v-flex xs3 class="yellow--" pa-0>
        <v-layout fill-height class="white--" ma-0>
          <v-flex xs8 class="blue--">
            <v-layout column>
              <v-flex xs12
                v-for="(field, index) in getMeta.fields"
                :key="index"
                py-2
              >
                <span class="title font-weight-medium font-condensend">{{field.name + ': '}}{{getData[field.name]}}</span>
              </v-flex>

            </v-layout>
          </v-flex>

          <v-flex xs4 class="grey lighten-1" pa-1>
            <component
              is="location-map"
            />
          </v-flex>

        </v-layout>
      </v-flex>

      <v-flex xs2 class="green--" pa-0>
        <v-layout column fill-height class="white--" ma-0>

          <v-flex class="blue lighten-4">
            <!-- {{getData}} -->
          </v-flex>
          <v-flex class="blue lighten-2">
            <!-- Доступные локации для создания {{getMeta.children}} -->
            <!-- {{getMeta}} -->
          </v-flex>

        </v-layout>
      </v-flex>

      <v-flex class="grey lighten-1" pa-1>
        <component
          is="location-map"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import LocationMap from '@/components/map/map'

export default {

  components: {
    LocationMap,
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
