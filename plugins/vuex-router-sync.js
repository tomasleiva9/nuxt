import store from '~store'
import router from '~router'
import { sync } from 'vuex-router-sync'

sync(store, router)
