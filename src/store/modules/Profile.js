import axios from 'axios'

const state = {
    userInfo: {},
    userPosts: {}
};

const getters = {
    userInfo: (state) => state.userInfo,
    userPosts: (state) => state.userPosts,
};

const actions = {
    async getUserInfo({ commit },username) {
       
        if(username){
            let url=`https://rickandmortyapi.com/api/character/?name=${username}&status=alive`;
            const resp = await axios.get(url);
    
            commit('setUserInfo', resp.data.results[0]);
        }else{
            let url=`https://rickandmortyapi.com/api/character/?name=rick&status=alive`;
            const resp = await axios.get(url);
    
            commit('setUserInfo', resp.data.results[0]);
        }
        
     
    },
    async getuserPosts({ commit },username) {
        if(username){
        const resp = await axios.get(`https://rickandmortyapi.com/api/character/?name=${username}&status=alive`);
        var posts = resp.data.results;
        
        commit('setUserPosts', posts);
        }
    },
    async getTaggedPosts({ commit },username) {
        const resp = await axios.get(`https://rickandmortyapi.com/api/character/?name=${username}&status=dead`);
        var posts = resp.data.results;

        commit('setUserPosts', posts);
    },
    async getIgtv({ commit }) {
       // const resp = await axios.get('https://rickandmortyapi.com/api/character/?name=rick&status=dead');
        var posts;

        commit('setUserPosts', posts);
    }

};

const mutations = {
    setUserInfo: (state, data) => (state.userInfo = data),
    setUserPosts: (state, posts) => (state.userPosts = posts)

};

export default {
    state,
    getters,
    actions,
    mutations
}