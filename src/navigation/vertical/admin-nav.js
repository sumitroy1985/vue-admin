export default [
  {
    header: 'Super Admin',
  },
  {
    title: 'Super Admin Login',
    route: 'super-admin-login',
    icon: 'UsersIcon',
  },
  {
    title: 'Dashboard',
    route: 'super-dashboard',
    icon: 'HomeIcon',
  },
  {
    title: 'Manage Account',
    route: 'manage-account',
    icon: 'BookOpenIcon',
  },
  {
    title: 'Manage Infrastructure',
    route: 'manage-infrastructure',
    icon: 'SettingsIcon',
    tag: '4',
    tagVariant: 'light-warning',
    children: [
      {
        title: 'WiFi Director',
        route: 'wifi-director',
        icon: 'ChevronsRightIcon',
      },
      {
        title: 'Mesh Network',
        route: 'mesh-network',
        icon: 'ChevronsRightIcon',
      },
      {
        title: 'KNX Communication',
        route: 'knx-communication',
        icon: 'ChevronsRightIcon',
      },
      {
        title: 'Lorawan',
        route: 'lorawan',
        icon: 'ChevronsRightIcon',
      },
    ],
  },
  {
    title: 'Manage Comany',
    route: 'manage-company',
    icon: 'HomeIcon',
  },
  {
    title: 'Super Admin Order',
    route: 'super-admin-order',
    icon: 'CodesandboxIcon',
  },
  {
    title: 'Manage People',
    route: 'manage-people',
    icon: 'UsersIcon',
  },
  {
    title: 'Manage App',
    route: 'manage-app',
    icon: 'SmartphoneIcon',
  },
  {
    title: 'Manage Skills',
    route: 'manage-skills',
    icon: 'BriefcaseIcon',
  },
  {
    title: 'View Log',
    route: 'view-log',
    icon: 'FileTextIcon',
  },
  {
    title: 'Email',
    route: 'apps-email',
    icon: 'MailIcon',
  },
  {
    title: 'Chat',
    route: 'apps-chat',
    icon: 'MessageSquareIcon',
  },
  {
    title: 'Todo',
    route: 'apps-todo',
    icon: 'CheckSquareIcon',
  },
  {
    title: 'Calendar',
    route: 'apps-calendar',
    icon: 'CalendarIcon',
  },
  {
    title: 'Invoice',
    icon: 'FileTextIcon',
    children: [
      {
        title: 'List',
        route: 'apps-invoice-list',
      },
      {
        title: 'Preview',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
      },
      {
        title: 'Edit',
        route: { name: 'apps-invoice-edit', params: { id: 4987 } },
      },
      {
        title: 'Add',
        route: { name: 'apps-invoice-add' },
      },
    ],
  },
  {
    title: 'eCommerce',
    icon: 'ShoppingCartIcon',
    children: [
      {
        title: 'Shop',
        route: 'apps-e-commerce-shop',
      },
      {
        title: 'Details',
        route: { name: '', params: { slug: '' } },
      },
      {
        title: 'Wishlist',
        route: 'apps-e-commerce-wishlist',
      },
      {
        title: 'Checkout',
        route: 'apps-e-commerce-checkout',
      },
    ],
  },
  {
    title: 'User',
    icon: 'UserIcon',
    children: [
      {
        title: 'List',
        route: 'apps-users-list',
      },
      {
        title: 'View',
        route: { name: 'apps-users-view', params: { id: 21 } },
      },
      {
        title: 'Edit',
        route: { name: 'apps-users-edit', params: { id: 21 } },
      },
    ],
  },
  {
    header: 'Company Admin',
  },
  {
    title: 'Company Login',
    route: 'company-login',
    icon: 'UsersIcon',
  },
  {
    title: 'Company Order',
    route: 'company-order',
    icon: 'CodesandboxIcon',
  },
  {
    title: 'Manage Infrastructure',
    route: 'manage-infrastructure',
    icon: 'SettingsIcon',
    tag: '4',
    tagVariant: 'light-warning',
    children: [
      {
        title: 'WiFi Director',
        route: 'company-wifi',
        icon: 'ChevronsRightIcon',
      },
      {
        title: 'KNX Communication',
        route: 'company-knx',
        icon: 'ChevronsRightIcon',
      },
    ],
  },
  {
    title: 'View Log',
    route: 'view-log',
    icon: 'FileTextIcon',
  },
  {
    title: 'Chat',
    route: 'apps-chat',
    icon: 'MessageSquareIcon',
  },
  {
    title: 'Calendar',
    route: 'apps-calendar',
    icon: 'CalendarIcon',
  },
  {
    title: 'Invoice',
    icon: 'FileTextIcon',
    children: [
      {
        title: 'List',
        route: 'apps-invoice-list',
      },
      {
        title: 'Preview',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
      },
      {
        title: 'Edit',
        route: { name: 'apps-invoice-edit', params: { id: 4987 } },
      },
      {
        title: 'Add',
        route: { name: 'apps-invoice-add' },
      },
    ],
  },
  {
    title: 'eCommerce',
    icon: 'ShoppingCartIcon',
    children: [
      {
        title: 'Shop',
        route: 'apps-e-commerce-shop',
      },
      {
        title: 'Details',
        route: { name: 'apps-e-commerce-product-details', params: { slug: 'apple-watch-series-5-27' } },
      },
      {
        title: 'Wishlist',
        route: 'apps-e-commerce-wishlist',
      },
      {
        title: 'Checkout',
        route: 'apps-e-commerce-checkout',
      },
    ],
  },
  {
    header: 'Members Admin',
  },
  {
    title: 'Members Login',
    route: 'company-login',
    icon: 'UsersIcon',
  },
  {
    title: 'Manage People',
    route: 'manage-people',
    icon: 'UsersIcon',
  },
  {
    title: 'Todo',
    route: 'apps-todo',
    icon: 'CheckSquareIcon',
  },
  {
    title: 'Manage App',
    route: 'manage-app',
    icon: 'SmartphoneIcon',
  },
  {
    header: 'Cloud Admin',
  },
  {
    title: 'Cloud Admin Login',
    route: 'company-login',
    icon: 'UsersIcon',
  },
  {
    title: 'Manage Infrastructure',
    route: 'manage-infrastructure',
    icon: 'SettingsIcon',
    tag: '4',
    tagVariant: 'light-warning',
    children: [
      {
        title: 'WiFi Director',
        route: 'wifi-director',
        icon: 'ChevronsRightIcon',
      },
      {
        title: 'Mesh Network',
        route: 'mesh-network',
        icon: 'ChevronsRightIcon',
      },
      {
        title: 'KNX Communication',
        route: 'knx-communication',
        icon: 'ChevronsRightIcon',
      },
      {
        title: 'Lorawan',
        route: 'lorawan',
        icon: 'ChevronsRightIcon',
      },
    ],
  },
  {
    title: 'Manage App',
    route: 'manage-app',
    icon: 'SmartphoneIcon',
  },
  {
    title: 'Manage Skills',
    route: 'manage-skills',
    icon: 'BriefcaseIcon',
  },
  {
    title: 'Email',
    route: 'apps-email',
    icon: 'MailIcon',
  },
  {
    title: 'Chat',
    route: 'apps-chat',
    icon: 'MessageSquareIcon',
  },
  {
    title: 'Todo',
    route: 'apps-todo',
    icon: 'CheckSquareIcon',
  },
  {
    title: 'Calendar',
    route: 'apps-calendar',
    icon: 'CalendarIcon',
  },
]
