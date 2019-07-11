<template>
  <v-container fluid fill-height pa-0 ma-0>

    <sidebar/>

    <v-layout fill-height pa-2>
      <v-flex xs12>

        <v-data-table
          :headers="alarm_table.headers"
          :items="getItems"
          class="elevation-1"

          must-sort
          hide-actions
        >


          <!-- <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="subheading text-general"
                v-text="header.text"
              />
          </template> -->

          <!-- <template v-slot:headers="props">
            <th
              v-for="header in props.headers"
              :key="header.text"
              class="primary text-xs-left "
            >
              <span
                class="subheading"
                v-text="header.text"
              />
            </th>
          </template> -->

          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.date }}</td>
            <td>
              <v-btn
                dark---
                small
                depressed
                block
                :class="alarm_table.statuses[props.item.status].color"
                :disabled="!props.item.active"
              >

                  {{alarm_table.statuses[props.item.status].name}}
              </v-btn>
            </td>
            <td class="text-xs-left">{{ props.item.device }}</td>
            <td class="text-xs-left">{{ props.item.data.message }}</td>
            <td class="text-xs-left">{{ props.item.description }}</td>
            <!-- <td class="text-xs-left">
              <v-flex>
                <span>{{ props.item.service.name }}</span>
              </v-flex>
              <v-flex>
                <span>{{ props.item.service.contacts }}</span>
              </v-flex>
            </td> -->
            <!-- <td class="text-xs-right">{{ moment(props.item.date_start).format('DD-MM-YYYY') }}</td> -->
            <td class="justify-center layout align-center px-0">
              <v-btn
                small
                class="primary"
                :disabled="!props.item.active"
                @click="editItem(props.item)"
              >
                Квитировать
                <!-- <v-icon
                  small
                  @click=""
                >
                  edit
                </v-icon> -->
                <!-- <v-icon
                  small
                  @click="deleteItem(props.item)"
                >
                  delete
                </v-icon> -->
              </v-btn>
            </td>
          </template>
        </v-data-table>

      </v-flex>

      <v-dialog
        v-if="dialog"
        v-model="dialog"
        max-width="600px"
      >

        <confirmation-form
          :item="editedItem"
          @close="dialog = !dialog"
        />
        <!-- <form-task
          :id="editedId"
          :item="editedItem"

          @close="close"
          @deleted="(payload) => deleteItem(payload)"
          @changed="(payload) => changeItem(payload)"
          @created="(payload) => createItem(payload)"
        /> -->

      </v-dialog>

    </v-layout>



  </v-container>



</template>


<script>

  import Sidebar from './../sidebar/sidebar'
  import ConfirmationForm from './../forms/confirmation-form'

  export default {

    name: 'alarm-log',

    components: {

      'sidebar': Sidebar,
      'confirmation-form': ConfirmationForm,

    },

    data: () => ({
      dialog: false,
      alarm_table: {
        filtered: 0,
        editedItem: null,
        statuses: {
          1: {
            color: 'red',
            name: 'alarm'
          },
          2: {
            color: 'orange',
            name: 'warning'
          },
          3: {
            color: 'yellow',
            name: 'message'
          },
        },
        headers: [
          { text: 'Дата', value: 'date', align: 'left' },
          { text: 'Статус', value: 'status', align: 'left' },
          { text: 'Источник', value: 'device' },
          { text: 'Метрика', value: 'data', sortable: false },
          { text: 'Описание', value: 'description', align: 'left', sortable: false },
          // { text: 'Дополнительно', value: 'service', align: 'left', sortable: false },
          // { text: 'Лимит', value: 'estimate', align: 'right' },
          // { text: 'Дата создания', value: 'date_start', align: 'right' },
          { text: 'Действия', value: 'name', align: 'center', sortable: false }
        ],
        rows: [
          {
            status: 1,
            active: true,
            date: '14.06.2019',
            timing: '',
            device: 'Устройство 1',
            data: {
              message: 'Температура CPU на Слот5/11123/Слот 2/345',
              data: 60,
            },
            description: 'Превышен температурный лимит (до 50 градусов)',
            service: {
              name: 'ООО Рога и копыта',
              contacts: 'Диспечер, тел: 332-33-4444'
            },
          },
          {
            status: 2,
            active: true,
            date: '14.06.2019',
            timing: '',
            device: 'Устройство 2',
            data: {
              message: 'Некая метрика',
              data: 60,
            },
            description: 'Некое описание',
            service: {
              name: 'ООО Связь',
              contacts: 'Диспечер, тел: 445-08-215'
            },
          },
          {
            status: 1,
            active: false,
            date: '13.06.2019',
            timing: '10:05',
            device: 'Устройство 3',
            data: {
              message: 'Некая метрика',
              data: 60,
            },
            description: 'Некое описание',
            service: {
              name: 'ООО Телеком-оператор',
              contacts: 'Диспечер, тел: 667-12-8414'
            },
          },
        ]

      }

    }),

    computed: {

      getItems () {

        return (this.alarm_table.filtered != 0) ? this.alarm_table.rows.filter(row => {return row.status == this.alarm_table.filtered}) : this.alarm_table.rows

      },

    },

    filters: {

      formatDate: function (val) {

          let $_date = val.split('-').reverse().join('.')
          return $_date

      }
    },

    watch: {

      // dialog (val) {
      //   val || this.close()
      // },

    },

    methods: {

      editItem: function (item) {

        // this.editedId = item.id
        this.editedItem = Object.assign({}, item)
        this.dialog = true

      },
      //
      // deleteItem: function (payload) {
      //
      //   confirm('Уверены?') && this.$store.dispatch('removeTask', payload)
      //   this.close()
      //
      // },
      //
      // changeItem: function (payload) {
      //
      //   this.$store.dispatch('changeTask', payload)
      //   this.close()
      //
      // },
      //
      // createItem: function (payload) {
      //
      //   this.$store.dispatch('addTask', payload)
      //   this.close()
      //
      // },
      //
      // close: function () {
      //     this.dialog = false
      //     this.editedItem = Object.assign({}, this.defaultItem)
      //     this.editedId = -1
      // },
    }
  }
</script>
