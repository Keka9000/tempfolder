<template>

    <v-app>

        <v-toolbar flat color="back" mb-3>

            <v-menu :nudge-width="100">
              <template v-slot:activator="{ on }">
                <!-- <v-toolbar-side-icon  v-on="on" class="primary"></v-toolbar-side-icon> -->
                <!-- <v-toolbar-side-icon v-on="on">
                  <v-icon color="primary">menu</v-icon>
                </v-toolbar-side-icon> -->
                <v-btn v-on="on" icon>
                    <v-icon x-large color="primary">menu</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-tile
                  v-for="item in modules"
                  :key="item"
                  @click=""
                >
                  <v-list-tile-title v-text="item"></v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>

            <!-- <v-toolbar-title class="ml-2">
                {{data.title}}
            </v-toolbar-title> -->

            <div style="border-bottom: solid 1px #F7941D; padding-left: 30px">
              <v-tabs
                v-model="activePage"
                color="back" light
                align-with-title--
                dense
              >
                <v-tabs-slider color="primary" style="height: 6px"></v-tabs-slider>

                <v-tab
                  class="font-weight-black"
                  v-for="(page, index) in pages[data.key]"
                  :key="index"
                  :to="page.path"
                >
                  {{ page.title }}
                </v-tab>
              </v-tabs>

            </div>
            <v-spacer/>
<!--
            <v-tooltip bottom>
                <v-btn slot="activator" icon to="/sandbox">
                    <v-icon>build</v-icon>
                </v-btn>
                <span>Песочница</span>
            </v-tooltip> -->

            <!-- <v-tooltip bottom>
                <v-btn slot="activator" icon to="/cmdb">
                    <v-icon>storage</v-icon>
                </v-btn>
                <span>Устройства</span>
            </v-tooltip>

            <v-tooltip bottom>
                <v-btn slot="activator" icon to="/schema">
                    <v-icon class="flip-vertical">equalizer</v-icon>
                </v-btn>
                <span>Схемы</span>
            </v-tooltip>


            <v-badge overlap color="error">
              <template v-slot:badge >
                <span>3</span>
              </template>

            <v-tooltip bottom>
                <v-btn slot="activator" icon to="/alarm-log">
                    <v-icon>assignment</v-icon>
                </v-btn>
                <span>Журнал</span>
            </v-tooltip>

            </v-badge> -->

            <!-- <v-tooltip bottom>
                <v-btn slot="activator" icon to="">
                  <v-icon
                    dark
                  >
                    notifications
                  </v-icon>
                </v-btn>
                <span>События</span>
            </v-tooltip> -->
            <!-- <v-toolbar-items>
              <v-btn flat>Иван Иванович</v-btn>
            </v-toolbar-items> -->


                <!-- <v-badge overlap color="error">
                  <template v-slot:badge >
                    <span>3</span>
                  </template> -->

              <v-toolbar-items>
                <v-layout column class="green--" align-start justify-start>


                  <v-layout>
                    <v-flex pa-1 class="error">
                      <span class="subheading back--text">28 аварий</span>
                    </v-flex>
                    <v-flex pa-1 class="warning">
                      <span class="subheading back--text">12 предупреждений</span>
                    </v-flex>
                    <v-flex pa-1 class="yellow">
                      <span class="subheading back--text">131 сбой</span>
                    </v-flex>
                    <v-flex pa-1 class="grey">
                      <span class="subheading back--text">4538 потерь связи</span>
                    </v-flex>

                    <!-- <v-btn depressed small color="warning darken-1">Предупреждений 12</v-btn>
                    <v-btn depressed small color="accent">Потерь связи 38</v-btn> -->
                    <v-btn disabled flat>Иван Иванович</v-btn>
                  </v-layout>

                  <v-layout fill-height>
                </v-layout>
                </v-layout>
              </v-toolbar-items>
                <!-- </v-badge> -->


                <!-- <v-badge color="error" overlap>
    							<template slot="badge">3</template>
    							<v-icon color>notifications</v-icon>
                  <v-btn slot="activator" icon to="">
                    <v-icon
                      dark
                    >
                      notifications
                    </v-icon>
                  </v-btn>
    						</v-badge> -->
            <!-- <v-flex xs1> -->
            <!-- <v-layout row justify-end align-center> -->
              <!-- {{$route.path}} -->
              <!-- <v-tooltip bottom>
                  <v-btn slot="activator" icon @click="logout">
                      <v-icon>power_settings_new</v-icon>
                  </v-btn>
                  <span>Выход</span>
              </v-tooltip> -->
            <!-- </v-layout> -->
            <!-- </v-flex> -->



        </v-toolbar>

        <v-content>

            <!-- <v-container fluid fill-height> -->

                <v-layout fill-height row>

                    <!-- <sidebar v-if="$route.path === '/physical' || $route.path === '/logical'"/> -->
                    <sidebar v-if="$route.meta.sidebar"/>

                    <v-flex xs12>

                        <router-view />

                    </v-flex>

                </v-layout>

            <!-- </v-container> -->

        </v-content>

    </v-app>

</template>

<script>

    import Sidebar from './sidebar'

    export default {

        components: {

          Sidebar,

        },

        props: {
          data: Object,
        },

        data: () => ({

            logo: require('@/assets/mosaica_logo.png'),
            modules: ['CMDB', 'Monitoring', 'Dashboard'],
            activePage: null,
            pages: {
              cmdb: [
                {
                  path: '/physical',
                  title: 'Физические'
                },
                {
                  path: '/logical',
                  title: 'Логические'
                },
                {
                  path: '/catalogues',
                  title: 'Справочники'
                },
                {
                  path: '/topology',
                  title: 'Топология'
                },
              ],
              monitoring: [],
              dashboard: [],
            }
        }),

        computed: {

          getPages () {


          },

          getUserName () {

            // return this.$store.getters.user_name

          }

        },

        created: function () {

          this.setup()

        },

        methods: {

          setup: function () {

            // this.$store.dispatch('loadTasks')


          },

          logout: function () {

            // this.$store.dispatch('clearUser')
            // sessionStorage.removeItem('user')
            // this.$router.replace('login')

          }

        }

    }
</script>

<style lang="stylus">

    .toolbar__title_layout_baseline
        margin-left: 0

    .btn-icon_inactive

        &:hover,
        &:focus

            .btn__content

                &:before

                    background-color: transparent

</style>
