import axios from 'axios'
const state={
    suggestions:{}
}

const getters={

    Suggestions:(state)=>state.suggestions
}

const actions={
    async getSuggestions({commit}){
        const resp=await axios.get('https://rickandmortyapi.com/api/character/?page=19');
        commit('setSuggestions',resp.data.results)
    }
}

const mutations={
    setSuggestions:(state,data)=>(state.suggestions=data)
}

export default {
    state,getters,actions,mutations
}