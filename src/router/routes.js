const routes = [

    {
        path: '/',
        redirect: '/physical',

    },
    {
        path: '/login',
        name: 'login',
        // meta: {requiresAuth: false},
        component: () => import('@/pages/auth/auth.vue')

    },
    // {
    //     path: '/main',
    //     // name: 'monitoring',
    //     component: () => import('@/layouts/baseline'),
    //     props: {
    //       data: {
    //         title: 'Main page',
    //       }
    //     },
    //     children: [],
    // },
    {
        path: '/cmdb',
        meta: {
          name: 'CMDB',
          // requiresAuth: true
        },
        props: {
          data: {
            title: 'CMDB',
            key: 'cmdb'
          }
        },
        component: () => import('@/layouts/baseline'),
        children: [
            {
              path: '/physical',
              meta: {
                name: 'Physical location',
                sidebar: 'physical',

                // requiresAuth: true
              },
              component: () => import('@/pages/cmdb/location'),

            },
    //
            {
              // path: '/physical/location/:location_id(\\d+)',
              path: '/physical/building',
              name: 'building',
              meta: {
                sidebar: 'physical',
                // requiresAuth: true
              },
              component: () => import('@/pages/cmdb/building'),
            },
    //
            {
              // path: '/physical/location/:location_id(\\d+)',
              path: '/physical/cabinet',
              name: 'cabinet',
              meta: {
                sidebar: 'physical',
                // requiresAuth: true
              },
              params: {
                test: 'test',
              },
              component: () => import('@/pages/cmdb/cabinet'),
            },
    //
            {
              // path: '/physical/location/:location_id(\\d+)',
              path: '/physical/device',
              name: 'device',
              meta: {
                sidebar: 'physical',
                // requiresAuth: true
              },
              component: () => import('@/pages/cmdb/device'),
            },
    //
            {
              path: '/logical',
              meta: {
                name: 'Logical resources',
                sidebar: 'logical',
                // requiresAuth: true
              },
              // component: () => import('@/components/cmdb/logical/main'),
            },
            {
              path: '/catalogues',
              meta: {
                name: 'Catalogues',
                // requiresAuth: true
              },
              // component: () => import('@/components/cmdb/catalogues'),
            },
            {
              path: '/topology',
              meta: {
                name: 'Topology',
                // requiresAuth: true
              },
              // component: () => import('@/components/cmdb/topology'),
            },
        ],
    },

    // {
    //     path: '/monitoring',
    //     // name: 'monitoring',
    //     component: () => import('@/layouts/baseline'),
    //     children: [
    //         {
    //             path: '/alarm-log',
    //             meta: {
    //               name: 'Alarm Log',
    //               // requiresAuth: true
    //             },
    //             component: () => import('@/components/monitoring/views/alarm-log.vue')
    //         },
    //         {
    //             path: '/schema',
    //             meta: {
    //               name: 'Schema',
    //               // requiresAuth: true
    //             },
    //             component: () => import('@/components/monitoring/views/schema.vue')
    //         },
    //
    //     ]
    // },

    // {
    //     path: '/alarm-log',
    //     // name: 'monitoring',
    //     component: () => import('@/layouts/baseline'),
    //     children: [
    //
    //         {
    //             path: '',
    //             // meta: {requiresAuth: true},
    //             component: () => import('@/components/monitoring/views/alarm-log')
    //         }
    //     ]
    // },

    //
    // {
    //     path: '/table',
    //     name: 'table',
    //     component: () => import('@/layouts/baseline'),
    //     children: [
    //
    //         {
    //             path: '',
    //             // meta: {requiresAuth: true},
    //             component: () => import('@/components/table/table')
    //         }
    //     ]
    // },
    // {
    //     path: '/list',
    //     name: 'list',
    //     component: () => import('@/layouts/baseline'),
    //     children: [
    //
    //         {
    //             path: '',
    //             // meta: {requiresAuth: true},
    //             component: () => import('@/components/list/list')
    //         }
    //     ]
    // },

]

export default routes
