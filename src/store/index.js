import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import database from '@/database'
import VuexORMLocalForage from 'vuex-orm-localforage'

Vue.use(Vuex)

VuexORM.use(VuexORMLocalForage, {
  database
})

const store = new Vuex.Store({
  namespaced: true,
  plugins: [VuexORM.install(database)]
})

export default store
