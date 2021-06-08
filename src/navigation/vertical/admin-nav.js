export default [
  {
    header: 'Developer Pages',
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
    header: 'Company Pages',
  },
  {
    title: 'Company Login',
    route: 'company-login',
    icon: 'UsersIcon',
  },
  {
    title: 'Manage Comany',
    route: 'manage-company-admin',
    icon: 'HomeIcon',
  },
  {
    title: 'Manage Skills',
    route: 'manage-skills-admin',
    icon: 'BriefcaseIcon',
  },
  {
    title: 'Manage Order',
    route: 'manage-order-admin',
    icon: 'CodesandboxIcon',
  },
  {
    title: 'Manage People',
    route: 'manage-people-admin',
    icon: 'UsersIcon',
  },
  {
    title: 'Manage App',
    route: 'manage-app-admin',
    icon: 'SmartphoneIcon',
  },
  {
    title: 'View Log',
    route: 'view-log',
    icon: 'BookOpenIcon',
  },
]
