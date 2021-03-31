import Vue from 'vue'
import Vuex from 'vuex'
import per from 'vuex-persistedstate'
 
Vue.use(per)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list1: [],
    list2: [],
  },
  mutations: {
    addList1(state,val) {
      state.list1.push(val)
    },
    delList(state,i) {
      state.list1.splice(i,1)
    },
    goodList(state,val) {
      state.list2.push(val)
    },
    allDel(state,i) {
      state.list2.splice(i,1)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    per()
  ]
})
