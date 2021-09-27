export default [
  {
    path: '/',
    title: 'BasicLayout',
    routes: [
      {
        path: '/home',
        title: '首页',
        exact: true,
        icon: 'dashboard',
        component: import('@/routes/dashboard'),
        routes: [
          {
            path: '/test1',
            title: '统计',
            icon: 'file-text',
            component: import('@/routes/test1'),
          },
          {
            path: '/test2',
            title: '告警汇总',
            icon: 'file-text',
            component: import('@/routes/test2'),
          },
        ],
      },
      {
        path: '/themeTest',
        title: '主题',
        exact: true,
        icon: 'file-text',
        component: import('@/routes/themeTest'),
      },
      {
        path: '/my',
        title: '用户管理',
        icon: 'form',
        routes: [
          {
            path: '/a',
            title: '人事部门',
            icon: 'file-text',
            component: import('@/routes/personnel'),
          },
          {
            path: '/b',
            title: '财务部门',
            icon: 'file-text',
            authority: ['admin', 'user'],
            component: import('@/routes/financial'),
          },
          {
            path: '/c',
            title: '技术使用',
            hideInMenu: true,
            icon: 'file-text',
            component: import('@/routes/technologyIntroduced'),
          },
        ],
      },
      {
        path: '/ht',
        title: '拓扑学习',
        icon: 'dashboard',
        routes: [
          {
            path: '/a',
            title: '第一天',
            icon: 'file-text',
            component: import('@/routes/day_01'),
          },
        ],
      },
    ],
  },
  {
    path: '/topology',
    title: '拓扑图',
    exact: true,
    icon: 'share-alt',
    component: import('@/routes/topology'),
  },
  { path: '/', exact: true, redirect: '/ht/a' },
];
