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
    path: '/manage-company',
    name: 'manage-company',
    component: () => import('@/views/admin/dashboard/manage-company.vue'),
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
    path: '/manage-skills',
    name: 'manage-skills',
    component: () => import('@/views/admin/dashboard/manage-skills.vue'),
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
    path: '/manage-account',
    name: 'manage-account',
    component: () => import('@/views/admin/dashboard/manage-account.vue'),
    meta: {
      pageTitle: 'Manage Account',
      breadcrumb: [
        {
          text: 'Dashboard',
        },
        {
          text: 'Manage Account',
          active: true,
        },
      ],
    },
  },
  {
    path: '/manage-people',
    name: 'manage-people',
    component: () => import('@/views/admin/dashboard/manage-people.vue'),
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
    path: '/manage-app',
    name: 'manage-app',
    component: () => import('@/views/admin/dashboard/manage-app.vue'),
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
  {
    path: '/super-admin-order',
    name: 'super-admin-order',
    component: () => import('@/views/admin/dashboard/super-admin-order.vue'),
    meta: {
      pageTitle: 'Super Admin Order',
      breadcrumb: [
        {
          text: 'Dashboard',
        },
        {
          text: 'Super Admin Order',
          active: true,
        },
      ],
    },
  },
  {
    path: '/company-order',
    name: 'company-order',
    component: () => import('@/views/admin/dashboard/company-order.vue'),
    meta: {
      pageTitle: 'Company Order',
      breadcrumb: [
        {
          text: 'Dashboard',
        },
        {
          text: 'Company Order',
          active: true,
        },
      ],
    },
  },
  {
    path: '/company-wifi',
    name: 'company-wifi',
    component: () => import('@/views/admin/dashboard/company-wifi.vue'),
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
    path: '/company-mesh',
    name: 'company-mesh',
    component: () => import('@/views/admin/dashboard/company-mesh.vue'),
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
    path: '/company-knx',
    name: 'company-knx',
    component: () => import('@/views/admin/dashboard/company-knx.vue'),
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
    path: '/company-lorawan',
    name: 'company-lorawan',
    component: () => import('@/views/admin/dashboard/company-lorawan.vue'),
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
]
