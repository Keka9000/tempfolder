import Vue from 'vue'
import Vuetify, {
  VApp, VAutocomplete, VAvatar, VBreadcrumbs, VBtn, VCard, VCheckbox, VChip, VCombobox, VDataTable, VDialog, VDivider,
  VForm, VGrid, VIcon, VInput, VList, VMenu, VNavigationDrawer, VProgressLinear, VSelect, VTabs, VTextField, VToolbar, VTreeview
}  from 'vuetify/lib'

import { Ripple } from 'vuetify/lib/directives'
import 'vuetify/dist/vuetify.min.css'

  Vue.use(Vuetify, {

      components: {
        VApp, VAutocomplete, VAvatar, VBreadcrumbs, VBtn, VCard, VCheckbox, VChip, VCombobox, VDataTable, VDialog, VDivider,
        VForm, VIcon, VInput, VList, VMenu, VNavigationDrawer, VProgressLinear, VSelect, VTabs, VTextField, VToolbar, VTreeview
      },

      directives: {
        Ripple,
      },

      theme: {

          // primary: '#4989CC',
          back: '#fafafa',
          secondary: '#1E4972',
          primary: '#F7941D',
          accent: '#f77e12',
          error: '#FF5252',
          warning: '#FFC107',
          success: '#1a7e2a',
          grey: '#58595B'

      }

  })

  export default new Vuetify({ ... })
