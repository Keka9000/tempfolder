<template>

    <v-flex class="create-bus-modal">

        <!-- Form -->
        <v-container fluid grid-list-md fill-height color="grey lighten-4">

            <v-layout row fill-height>

                <v-flex column class="pa-2">

                    <!-- Title -->
                    <div class="title mb-4 pa-2">Добавить устройство в слот {{data.unitId}}</div>

                    <!-- Route -->
                    <v-container fluid grid-list-md>
                        <v-layout align-center row>

                            <v-flex xs6>
                              <v-select
                                  name="type"
                                  v-model="newDevice.type"
                                  label="Тип устройства"
                                  :items="devices.type"
                                  :disabled="!devices.type.length"
                                  item-text="name"
                                  item-value="id"
                                  multiple--
                              ></v-select>
                            </v-flex>

                            <v-flex xs6>
                              <v-select
                                  name="vendor"
                                  v-model="newDevice.vendor"
                                  label="Производитель"
                                  :items="devices.vendor"
                                  :disabled="!devices.vendor.length || !newDevice.type"
                                  item-text="name"
                                  item-value="id"
                                  multiple
                              ></v-select>
                            </v-flex>

                        </v-layout>
                    </v-container>

                    <!-- Description -->
                    <v-container fluid grid-list-md>
                        <v-layout align-center row>
                            <v-flex xs12>

                              <v-select
                                  name="device"
                                  v-model="newDevice.device"
                                  label="Устройство"
                                  :items="getDevice"
                                  :disabled="!newDevice.vendor.length"
                                  no-data-text="нет доступных устройств"
                                  item-text="name"
                                  item-value="id"
                                  multiple---
                              ></v-select>

                            </v-flex>
                        </v-layout>
                    </v-container>

                    <!-- Protocol & Date -->
                    <v-container fluid grid-list-md>
                      <!-- {{newDevice}} -->
                      <!-- <div class="subtitle mb-1 pa-2">Координаты</div> -->

                        <v-layout align-center row>

                            <!-- Protocol -->
                            <v-flex xs6>

                                <!-- <v-text-field
                                    name="lat"
                                    v-model="request.lat"
                                    label="Широта"
                                    hint="Широта"
                                ></v-text-field> -->

                            </v-flex>

                            <v-flex xs6>

                              <!-- <v-text-field
                                  name="lng"
                                  v-model="request.lng"
                                  label="Долгота"
                                  hint="Долгота"
                              ></v-text-field> -->

                            </v-flex>

                        </v-layout>

                    </v-container>

                </v-flex>

            </v-layout>

        </v-container>

        <v-divider></v-divider>

        <!-- Footer -->
        <v-footer height="auto" color="grey lighten-4">

            <v-container fluid grid-list-md>

                <v-layout row ma-0>

                    <!-- Controls -->
                    <v-flex xs12 text-xs-right pa-0>

                        <v-btn small color="primary" @click="">Добавить</v-btn>

                        <v-btn small flat active-class @click="()=>this.$emit('close')">Отменить</v-btn>

                    </v-flex>

                </v-layout>

            </v-container>

        </v-footer>

    </v-flex>

</template>

<script>

    export default {

        props: {

          data: {
            type: Object,
            default: () => ({})
          },

        },

        data: () => ({

          devices: {
            type: [
              {
                id: 1,
                name: "test type 1"
              },
              {
                id: 2,
                name: "test type 2"
              },
              {
                id: 3,
                name: "test type 3"
              }],
              vendor: [{
                id: 1,
                name: "test vendor 1"
              },
              {
                id: 2,
                name: "test vendor 2"
              },
              {
                id: 3,
                name: "test vendor 3"
              }],
              device: [{
                id: 1,
                name: "test device 1 + long device name",
                type: 1,
                vendors: [1,3]
              },
              {
                id: 2,
                name: "test device 2 + long device name",
                type: 2,
                vendors: [2]
              },
              {
                id: 3,
                name: "test device 3 + long device name",
                type: 1,
                vendors: [2]
              },
              {
                id: 4,
                name: "test device 4 + long device name",
                type: 1,
                vendors: [1,2,3]
              },
              {
                id: 5,
                name: "test device 5 + long device name",
                type: 1,
                vendors: [2,3]
              }
            ]
          },

          newDevice: {
            type: null,
            vendor: [],
            device: null
          },


        }),

        computed: {

          getDevice: function () {

            return this.devices.device.filter(device => {
              let type = device.type == this.newDevice.type
              let compatible = device.vendors.some(id => {

                // return id == this.newDevice.vendor
                let c = this.newDevice.vendor.some(vendor => {
                  return vendor == id
                })
                // console.log('c', c)
                return c

              })

              if (type && compatible) return device

            })

          },

        },

        created: function () {},

        mounted: function () {

            // this.focus()

        },


        methods: {

            submit: function () {},

            focus: function (field = 'login') {

                setTimeout(() => this.$refs[field].focus())
                return this

            },

            reset: function () {}

        }

    }

</script>

<style scoped>

.form {
  width: 100%;
  height: 100%;
  z-index: 5;
}

.create-bus-modal {

  background-color: #ffffff
}



</style>
