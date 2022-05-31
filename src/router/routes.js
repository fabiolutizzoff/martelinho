
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MainPage.vue') }
    ]
  },
  {
    path: '/orcamento1',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Orcamento1Page.vue') }
    ]
  },
  {
    path: '/orcamento2',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Orcamento2Page.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
