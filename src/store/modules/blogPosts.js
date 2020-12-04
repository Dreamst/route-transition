import axios from "axios"

const state = {
    posts: []
};

const getters = {
    allPosts: (state) => {return state.posts},
};

const mutations = {
    setPosts: (state, posts) => {
        state.posts = posts;
    }
};

const actions = {
    async fetchPosts({ commit }) {
        const response = await axios.get('https://public-api.wordpress.com/rest/v1.1/sites/jigasite.wordpress.com/posts/?number=2');
        commit('setPosts', response.data);
      }
};

export default {
    state,
    getters,
    mutations,
    actions
}