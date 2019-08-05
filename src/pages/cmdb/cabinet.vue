<template>
  <v-container fluid fill-height ma-0 pa-0 class="orange--" px-2>

      <v-layout fill-height class="black--" justify-space-between ma-0 pa-0 >

        <v-flex xs4 ma-0 pa-0 px-2>

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

        <v-flex xs4 v-if="showRear"  ma-0 pa-0 px-2>

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

              <v-divider></v-divider>

              <v-flex xs6 v-if="getSelected" py-2>

                <!-- {{getSelected}} -->
                <v-layout row fill-height class="yellow--">

                  <v-flex xs6 class="pink--" >
                    <component
                      is="device-card"
                      :data="getSelected"
                    />
                  </v-flex>

                  <v-flex xs6 class="cyan--" >

                  </v-flex>

                </v-layout>


              </v-flex>
              <!-- {{getSelected}} -->

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
    },

    selectedDevice: null,

  }),

  computed: {

    getActiveCabinet: function () {

      this.selectedDevice = null

      let devices = this.$merge([], this.$store.getters['getActiveCabinet'])

      return devices

    },

    getSelected: function () {

      return this.selectedDevice

    },

    getSelectedSlot: function () {

      return this.selectedSlot

    },

  },

  watch: {},

  created () {

    // console.log('cabinet page created')

  },

  mounted () {},

  updated () {

    // console.log('cabinet page updated')

  },

  beforeDestroy () {},

  methods: {

    setup: function () {},

    deviceAddHandler: function (payload) {
      // console.log('addDevice started')
      this.selectedSlot.cabinetSide = payload.side
      this.selectedSlot.unitId = payload.id
      this.dialog.device.add.visible = true

      // console.log('catch addDevice on cabinet page', cabinetSide, unitId)
    },

    deviceSelectHandler: function (payload) {

      this.selectedDevice = payload
    }

  },

}
</script>

<style lang="css" scoped>
</style>
