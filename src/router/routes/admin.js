export default [
  {
    path: '/login',
    name: 'super-admin-login',
    component: () => import('@/views/admin/authentication/super-admin-login.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '/company-login',
    name: 'company-login',
    component: () => import('@/views/admin/authentication/company-login.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '/super-dashboard',
    name: 'super-dashboard',
    component: () => import('@/views/admin/dashboard/super-admin-dashboard.vue'),
  },
  {
    path: '/manage-infrastructure',
    name: 'manage-infrastructure',
    component: () => import('@/views/admin/dashboard/manage-infrastructure.vue'),
    meta: {
      pageTitle: 'Manage Infrastructure',
    },
  },
  {
    path: '/wifi-director',
    name: 'wifi-director',
    component: () => import('@/views/admin/dashboard/wifi-director.vue'),
    meta: {
      pageTitle: 'Wifi Director',
      breadcrumb: [
        {
          text: 'Manage Infrastructure',
        },
        {
          text: 'Wifi Director',
          active: true,
        },
      ],
    },
  },
  {
    path: '/mesh-network',
    name: 'mesh-network',
    component: () => import('@/views/admin/dashboard/mesh-network.vue'),
    meta: {
      pageTitle: 'Mesh Network',
      breadcrumb: [
        {
          text: 'Manage Infrastructure',
        },
        {
          text: 'Mesh Network',
          active: true,
        },
      ],
    },
  },
  {
    path: '/knx-communication',
    name: 'knx-communication',
    component: () => import('@/views/admin/dashboard/knx-communication.vue'),
    meta: {
      pageTitle: 'KNX Communication',
      breadcrumb: [
        {
          text: 'Manage Infrastructure',
        },
        {
          text: 'KNX Communication',
          active: true,
        },
      ],
    },
  },
  {
    path: '/lorawan',
    name: 'lorawan',
    component: () => import('@/views/admin/dashboard/lorawan.vue'),
    meta: {
      pageTitle: 'Lorawan',
      breadcrumb: [
        {
          text: 'Manage Infrastructure',
        },
        {
          text: 'Lorawan',
          active: true,
        },
      ],
    },
  },
  {
    path: '/manage-company-admin',
    name: 'manage-company-admin',
    component: () => import('@/views/admin/dashboard/manage-company-admin.vue'),
    meta: {
      pageTitle: 'Manage Company',
      breadcrumb: [
        {
          text: 'Dashboard',
        },
        {
          text: 'Manage Company',
          active: true,
        },
      ],
    },
  },
  {
    path: '/manage-skills-admin',
    name: 'manage-skills-admin',
    component: () => import('@/views/admin/dashboard/manage-skills-admin.vue'),
    meta: {
      pageTitle: 'Manage Skills',
      breadcrumb: [
        {
          text: 'Dashboard',
        },
        {
          text: 'Manage Skills',
          active: true,
        },
      ],
    },
  },
  {
    path: '/manage-order-admin',
    name: 'manage-order-admin',
    component: () => import('@/views/admin/dashboard/manage-order-admin.vue'),
    meta: {
      pageTitle: 'Manage Order',
      breadcrumb: [
        {
          text: 'Dashboard',
        },
        {
          text: 'Manage Order',
          active: true,
        },
      ],
    },
  },
  {
    path: '/manage-people-admin',
    name: 'manage-people-admin',
    component: () => import('@/views/admin/dashboard/manage-people-admin.vue'),
    meta: {
      pageTitle: 'Manage People',
      breadcrumb: [
        {
          text: 'Dashboard',
        },
        {
          text: 'Manage People',
          active: true,
        },
      ],
    },
  },
  {
    path: '/manage-app-admin',
    name: 'manage-app-admin',
    component: () => import('@/views/admin/dashboard/manage-app-admin.vue'),
    meta: {
      pageTitle: 'Manage App',
      breadcrumb: [
        {
          text: 'Dashboard',
        },
        {
          text: 'Manage App',
          active: true,
        },
      ],
    },
  },
  {
    path: '/view-log',
    name: 'view-log',
    component: () => import('@/views/admin/dashboard/view-log.vue'),
    meta: {
      pageTitle: 'View Log',
      breadcrumb: [
        {
          text: 'Dashboard',
        },
        {
          text: 'View Log',
          active: true,
        },
      ],
    },
  },
]
