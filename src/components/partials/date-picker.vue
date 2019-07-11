<template>

  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="date"
    persistent
    lazy
    full-width
    width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        label="Picker in dialog"
        prepend-icon="event"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
      <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
    </v-date-picker>
  </v-dialog>

</template>

<script>
export default {

  name: 'date-picker',

  data: () => ({}),

  computed: {

    getItems () {},

  },

  filters: {},

  watch: {},

  created () {},

  methods: {}

}
</script>

<style lang="css" scoped>
</style>
