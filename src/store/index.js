import Vuex from 'vuex'
import Vue from 'vue';
import profile from './modules/Profile'
import NewsFeed from './modules/NewsFeed'
import Suggestions from './modules/Suggestions'
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        profile,
        NewsFeed,
        Suggestions
    }
})