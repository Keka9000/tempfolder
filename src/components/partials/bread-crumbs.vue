<template>
  <v-container fluid fill-height pa-0>
    <!-- {{getCrumbs}} -->
    <v-toolbar
      class---="primary"
      flat
      dense
    >

      <v-breadcrumbs :items="getCrumbs">
        <template v-slot:item="props">
          <v-flex pa-0
            class="crumbs subheading font-weight-regular text-uppercase"
            :id="props.item.cls + '$' + props.item.id"
            @click="(payload) => clickHandler(payload)"
          >
            <!-- {{ props.item.name }} -->
            {{ props.item.name }}
          </v-flex>
        </template>
      </v-breadcrumbs>

    </v-toolbar>


  </v-container>
</template>

<script>
export default {

  props: {
    crumbs: {
      type: Array,
      default: () => ([])
    },
  },

  computed: {

    getData: function () {

      return this.data

    },

    getCrumbs: function () {

      return this.crumbs

    },

  },

  methods: {

    clickHandler: function (payload) {
      console.log('clickHandler', payload.target.id)
      // this.$emit('crumbClick', payload.target.id)
      this.loadData(payload.target.id)
    },

    loadData: async function (id) {

      // await this.$bridge.connect('http://192.168.50.38', '1', '2')
      let data = await this.$bridge.getObjectsById([id])
      console.log('loadData', data[0].data)
      // console.log(await this.$bridge.getObjectsById(['facility$1']))
    },

  },
}
</script>

<style scoped>
.crumbs {
  color: black;
}

.crumbs:hover {
  color: red;
  cursor: pointer;
}
</style>
