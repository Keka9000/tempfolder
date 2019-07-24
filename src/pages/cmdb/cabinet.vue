<template>
  <v-container fluid fill-height ma-0 pa-0 class="orange--" px-2>

      <v-layout fill-height class="black--" justify-space-between ma-0 pa-0 >

        <v-flex xs3 ma-0 pa-0 px-2>

          <v-layout fill-height class="blue--" style="position: relative" justify-space-around align-center ma-0 pa-0 >

            <!-- <cabinet/> -->
            <component
              is="cabinet"
              :mountSide="sides.front"
              :data="getActiveCabinet"
              @addDevice="(payload) => deviceAddHandler(payload)"
              @selectDevice="(payload) => deviceSelectHandler(payload)"
            />

          </v-layout>

        </v-flex>

        <v-flex xs3 v-if="showRear"  ma-0 pa-0 px-2>

          <v-layout fill-height class="blue--" style="position: relative" justify-space-around align-center ma-0 pa-0 >

            <component
              is="cabinet"
              :mountSide="sides.rear"
              :data="getActiveCabinet"
              @addDevice="(payload) => deviceAddHandler(payload)"
              @selectDevice="(payload) => deviceSelectHandler(payload)"
            />


          </v-layout>

        </v-flex>

        <v-flex xs12 ma-0 pa-0 >

          <v-layout column fill-height class="cyan--"ma-0 pa-2 >

            <v-layout column class="blue--" justify-start>

              <v-flex xs1>

                <v-layout column class="yellow--">

                  <v-layout class="pink--" justify-start px-1>
                    <span class="title font-weight-medium">Собираем</span>
                  </v-layout>

                  <v-layout class="pink--" justify-space-between px-1>

                    <span v-if="getSelected" class="display-1 font-weight-black">{{getSelected.name}}</span>
                    <span v-if="!getSelected && getActiveCabinet" class="display-1 font-weight-black">{{getActiveCabinet.name}}</span>

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

                  <v-layout class="pink--" justify-start>

                    <v-btn v-if="showRear" @click="() => {this.showRear = !this.showRear}" small color="primary">
                      Скрыть rear
                    </v-btn>
                    <v-btn v-if="!showRear" @click="() => {this.showRear = !this.showRear}" small color="primary">
                      Показать rear
                    </v-btn>


                  </v-layout>


                </v-layout>

              </v-flex>

              <v-flex xs5 v-if="getSelected" >

                <!-- {{getSelected}} -->
                <component
                  is="device-card"
                  :data="getSelected"
                />

              </v-flex>


            </v-layout>

          </v-layout>

        </v-flex>

      </v-layout>

      <v-dialog v-model="dialog.device.add.visible" max-width="50%" v-if="dialog.device.add.visible">
          <form-device-add
            :data="getSelectedSlot"
            @close="() => this.dialog.device.add.visible = false"
          />
      </v-dialog>

  </v-container>

</template>

<script>

import Cabinet from '@/components/physical/cabinet/cabinet.vue'
import FormDeviceAdd from './forms/form-device-add'
import DeviceCard from '@/components/physical/device/device-card'

export default {

  components: {

    Cabinet,
    FormDeviceAdd,
    DeviceCard

  },

  props: {},

  data: () => ({

    sides: {
      front: "front",
      rear: 'rear'
    },

    showRear: false,

    dialog: {
      device: {
        add: {
          visible: false
        },
      },
    },

    selectedSlot: {
      cabinetSide:null,
      unitId: null
    }

  }),

  computed: {

    getActiveCabinet: function () {

      let devices = this.$store.getters['getActiveCabinet']

      return devices
      // if (devices) {
      //
      //   return devices.children.filter(device => {
      //
      //     return device.mount == this.side
      //
      //   })
      //
      // }

    },

    getSelected: function () {


      return this.$store.getters['getSelected']
      // return this.$store.state.devices.active
      // return this.$store.state.active

    },

    getSelectedSlot: function () {

      return this.selectedSlot

    },




  },

  watch: {


  },

  created () {

    console.log('cabinet page created')
    // this.cabinet = Object.assign({}, this.cabinet, this.$store.getters['getActiveDevice'])
    // console.log('cabinet', this.cabinet)


  },

  mounted () {},

  updated () {

    console.log('cabinet page updated')

  },

  beforeDestroy () {},

  methods: {

    setup: function () {

      // let cabinet = this.$store.getters['getActiveCabinet']
      // console.log('cabinet page data', cabinet)
    },

    deviceAddHandler: function (payload) {
      // console.log('addDevice started')
      this.selectedSlot.cabinetSide = payload.side
      this.selectedSlot.unitId = payload.id
      this.dialog.device.add.visible = true

      // console.log('catch addDevice on cabinet page', cabinetSide, unitId)
    },

    deviceSelectHandler: function (payload) {

      this.$store.dispatch('addSelected', payload)

    }

  },

}
</script>

<style lang="css" scoped>
</style>
