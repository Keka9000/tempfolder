<template>

    <!-- View 1 - Single Select Control -->
    <v-flex v-if="view == 1" pa-0>

        <!-- {{ value }} -->
        <!-- {{ selected }} -->
        <!-- {{ itemList }} -->
        <!-- {{ itemText }} -->
        <!-- {{ id }} -->
        <!-- {{ search }} -->

        <v-autocomplete

            ref="control"

            class="select-list"
            v-model="selected"

            :class="id"
            :label="computedLabel"
            :no-data-text="noDataText"
            :search-input.sync="search"

            :items="itemList"

            :item-text="itemText"
            :item-value="itemValue"

            :append-icon="computedAppendIcon"
            return-object

            @change="onChange"
            :disabled="computedDisabled"
            :readonly="computedReadOnly"
            :required="required"
            :loading="computedLoading"
            :single-line="singleLine"
            :clearable="computedClearable"
            :outline="outline"
            :color="color"
            :dense="dense"
            :solo="solo"
            :box="box"

            :attach="'.' + id"

        >
            <template
                slot="item"
                slot-scope="data"
            >
                <template v-if="typeof data.item !== 'object'">
                    <v-list-tile-content v-text="data.item"></v-list-tile-content>
                </template>

                <template v-else>

                    <v-list-tile-action style="min-width: 40px">
                        <v-radio-group class="select-list-radio-group" v-model="selected[itemValue]">
                            <v-radio :value="data.item[itemValue]" :color="color"></v-radio>
                        </v-radio-group>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title v-html="data.item[itemText]"></v-list-tile-title>
                    </v-list-tile-content>

                </template>

            </template>

            <!-- <v-checkbox v-if="multiple" :value="data.item[itemValue]" :color="color"></v-checkbox> -->
            <!-- <v-radio-group v-else class="select-list-radio-group" v-model="selected[itemValue]"> -->

        </v-autocomplete>

        <!-- @click:clear="onClear" -->
        <!-- @click:clear="onChange" -->

        <input type="hidden" :name="name" v-model="computedVal" />

    </v-flex>
</template>

<script>

    import uid from '@/components/utils/uid'

export default {



  props: {

    name: {

      type: String,
      default: 'condition_id'

    },

    // api: {
    //
    //   type: String,
    //   // required: true
    //
    // },

    items: {

        type: Array,
        default: () => ([])

    },

    api: String,

    label: {

      type: String

    },

    labelSelected: {

      type: String

    },

    itemText: {

        type: String,
        default: 'name'
    },

    itemValue: {

        type: String,
        default: 'id'
    },

    // labelSingle: {
    //
    //     type: String
    //
    // },

    loadingText: {

        type: String,
        // default: 'Загрузка списка…'
        default: 'Загрузка…'

    },

    noDataText: {

      type: String,
      default: 'Уточните поисковый запрос…'

    },

    // options: {
    //
    //   type: Array,
    //   default: () => ([])
    //
    // },

    value: {

      type: Number,
      default: null

    },

    returnObject: {

      type: Boolean,
      default: false

    },

    readonly: {

      type: Boolean,
      default: false

    },

    required: {

      type: Boolean,
      default: false

    },

    loading: {

      type: Boolean,
      default: false

    },

    disabled: {

      type: Boolean,
      default: false

    },

    singleLine: {

      type: Boolean,
      default: false

    },

    clearable: {

      type: Boolean,
      default: true

    },

    outline: {

      type: Boolean,
      default: false

    },

    color: {

      type: String,
      default: 'secondary'

    },

    dense: {

      type: Boolean,
      default: false

    },

    solo: {

      type: Boolean,
      default: false

    },

    box: {

      type: Boolean,
      default: false

    },

    multiple: {

      type: Boolean,
      default: true

    },

    view: {

      type: [Number],
      default: 1

    },

  },

  data: function() {

    return {

        id: null,

      selected: {},
      autoselected: null,

      list: [],

      search: null,

      indicator: {

          loading: false,

      },

      animation: {

        color: 'primary', //'secondary', // true | MD color | Theme color
        duration: 1000,

      },

    };

  },

  watch: {

    value: function (newVal) {

        this.selected[this.itemValue] = newVal

    },

    items: function(newVal) {

      this.list = newVal

    },

    list: function(newVal) {

      if (newVal && newVal.length == 1) {

        this.selected = newVal[0]

      }

    }

  },

  computed: {

    itemList: function() {

      return this.list

    },

    computedVal: function() {

      return (this.selected && this.selected[this.itemValue]) ? this.selected[this.itemValue] : null

    },

    computedLabel: function() {
      //
      // if (this.labelSingle && this.items && this.items.length == 1) {
      //
      //     return this.labelSingle
      //
      // }

      if (this.computedLoading) {

          // return 'Загрузка…'
          return this.loadingText

      } else {

           if (this.labelSelected && this.computedVal) {

             return this.labelSelected

           }

      }



      return this.label

    },

    computedReadOnly: function() {

      if (this.readonly || (this.items && this.items.length == 1)) {

        return true

      }

      return false

    },

    computedClearable: function() {

      if (this.clearable && (this.items && this.items.length > 1)) {

        return true

      }

      return false

    },

    computedLoading: function() {

      if (this.loading || this.indicator.loading) {

        return true

      }

      return false

    },

    computedDisabled: function() {

      // if (this.disabled || this.loading || this.indicator.loading || !this.list || this.list.length <= 1) {
      if (this.disabled || this.computedLoading || !this.list || this.list.length <= 1) {

        return true

      }

      return false

    },

    computedAppendIcon: function() {

      // if (!this.loading && !this.indicator.loading && this.list && this.list.length > 1) {
      // if (!this.computedLoading && this.list && this.list.length > 1) {
      // if (!this.computedLoading && this.list && this.list.length > 1 && !this.selected[this.itemValue]) {
      // if (!this.computedLoading && this.list && this.list.length && !this.selected[this.itemValue]) {
      if (!this.computedLoading && this.list && this.list.length && !this.search) {

        return 'expand_more'

      }

      return ''

    }

  },

  beforeCreate: function() {

      // this.$set(this.selected, this.itemValue, null)
      // this.$set(this.selected, this.itemText, null)

  },

  created: function() {

      this.id = uid('control')
      this.resetSelected(this.value)

      // this.$set(this.selected, this.itemValue, this.value)
      // this.$set(this.selected, this.itemText, null)
      // this.$set(this.selected, this.itemText, null)

    // this.selected.val = this.value || this.$route.query[this.name]
    this.list = this.items

    if (this.api && !this.list.length) {

      this.loadList()

    }

  },

  beforeMount: function() {},

  mounted: function() {

      // this.$refs.control.activateMenu()

  },

  beforeUpdate: function() {},

  updated: function() {

      // this.$refs.control.activateMenu()
  },

  beforeDestroy: function() {},

  destroyed: function() {},

  methods: {

    loadList: function() {

      // Animate loading - Start
      this.loading = this.animation.color
      this.$http.get(this.api).then((response) => {

        this.items = response.data

        // Animate loading - Stop
        setTimeout(() => {
          this.loading = false
        }, this.animation.duration)

      }, (error) => {

        // Error notification
        this.$snotify.error(error, 'Ошибка', {

          timeout: 0,
          showProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          backdrop: 0.5

        })

      })

    },

    onChange: function(payload) {

      console.log('onChange', 'payload', payload)

      if (!payload) {

          this.resetSelected()

      } else {

           if (this.selected[this.itemValue]) {

             this.selected[this.itemValue] = parseInt(this.selected[this.itemValue])

           }

      }

      if (this.returnObject) {

        this.$emit('change', this.selected)

      } else {

        this.$emit('change', this.selected[this.itemValue])

      }

    },

    // onClear: function () {
    //
    //     // alert(2)
    //
    //     this.resetSelected()
    //     // this.onChange()
    //
    // },

    resetSelected: function (value) {

        value = value || null
        this.selected = Object.assign({})

        this.$set(this.selected, this.itemValue, value)
        this.$set(this.selected, this.itemText, null)

    }

  }

}
</script>

<style lang="stylus">

    .select-list

        &.v-autocomplete

            .v-select-list

                .v-list

                    padding: 0

    .select-list-radio-group

        &.v-input--selection-controls

            &.v-input--radio-group

                .v-input__control

                    .v-input__slot

                        &:after,
                        &:before

                            display: none

            /* &.v-input--checkbox

                .v-input__control

                    .v-input__slot

                        &:after,
                        &:before

                            display: none */




</style>
