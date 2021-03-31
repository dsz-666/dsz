import Vue from 'vue'

import loading from './load/loading.vue'

const createLoading = Vue.extend(loading)
const instance = new createLoading({
    el: document.createElement('div')
})

instance.show = false

const $loading = {
    show(msg) {
        instance.show = true
        instance.msg = msg
        document.body.appendChild(instance.$el)
    },

    hide() {
        instance.show = false
    }
}

export default {
    install() {
        if(!Vue.$loading) {
            Vue.$loading = $loading
        }

        Vue.mixin({
            created() {
                this.$loading = Vue.$loading
            }
        }) 
    }
}