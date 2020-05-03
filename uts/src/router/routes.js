
const routes = [
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/admin/home/DataSparpart.vue') },
      { path: 'inputdata', component: () => import('pages/admin/home/InputSparpart.vue') },
      { path: 'transaksi', component: () => import('pages/admin/transaksi/DataTransaksi.vue') }
    ]
  },
  {
    path: '/pembeli',
    component: () => import('layouts/PembeliLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pembeli/DataSparpart/DataSparpart.vue') },
      { path: 'transaksi', component: () => import('pages/pembeli/DataTransaksi/DataTransaksi.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/users/Login.vue') },
      { path: 'registrasi', component: () => import('pages/users/Registrasi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
