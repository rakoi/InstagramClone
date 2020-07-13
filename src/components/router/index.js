import Vue from 'vue'
import Router from 'vue-router'

import Profile from '../../components/Profile'
import Home from '../../components/Home'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/profile/:username',
            name:'/profile',
            component:Profile
        },
        {
            path:'/',
            name:'/',
            component:Home
        }
        
    ]
})