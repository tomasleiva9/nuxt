module.exports = {
  loading: false,
  router: {
    routes: [
      { path: '/item/:id(\\d+)', component: 'pages/_item' },
      { path: '/user/:id', component: 'pages/_user' },
      { path: '/:category/:page(\\d+)?', component: 'pages/_list' }
    ]
  },
  plugins: ['plugins/vuex-router-sync', 'plugins/filters'],
  build: {
    vendor: ['vuex-router-sync', 'firebase/app', 'firebase/database']
  }
}
