import axios from 'axios'

const state = {
    newsFeed: {}
}

const getters = {
    
     newsFeed: (state) => state.newsFeed,
}

const actions = {
    async getNewsFeed({ commit },page) {
        const resp = await axios.get('https://rickandmortyapi.com/api/character?page=page')
       
        commit('setnewsFeed', resp.data.results);
    }
}

const mutations = {
    setnewsFeed: (state, feed) => (state.newsFeed = feed)
}

export default {
    state, getters, actions, mutations
}