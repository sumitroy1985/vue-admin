export default [
  {
    path: '/admin/dashboard',
    name: 'dashboard',
    component: () => import('@/views/admin/dashboard/dashboard.vue'),
  },
  {
    path: '/dashboard/manage-companies',
    name: 'manage-companies',
    component: () => import('@/views/admin/dashboard/manage-companies.vue'),
    meta: {
      pageTitle: 'Manage Companies',
      breadcrumb: [
        {
          text: 'Dashboard',
        },
        {
          text: 'Manage Companies',
          active: true,
        },
      ],
    },
  },
  {
    path: '/dashboard/manage-devices',
    name: 'manage-devices',
    component: () => import('@/views/admin/dashboard/manage-devices.vue'),
    meta: {
      pageTitle: 'Manage Devices',
      breadcrumb: [
        {
          text: 'Dashboard',
        },
        {
          text: 'Manage Devices',
          active: true,
        },
      ],
    },
  },
  {
    path: '/dashboard/manage-users',
    name: 'manage-users',
    component: () => import('@/views/admin/dashboard/manage-users.vue'),
    meta: {
      pageTitle: 'Manage Users',
      breadcrumb: [
        {
          text: 'Dashboard',
        },
        {
          text: 'Manage Users',
          active: true,
        },
      ],
    },
  },
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
]
