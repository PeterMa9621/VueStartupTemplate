import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        user: {
            username: 'Peter',
            isAuthorized: false
        }
    },
    mutations: {
        setUser(state, newUser) {
            state.user = newUser;
        }
    },
    actions: {
        setUser({commit}, newUser) {
            commit.setUser(newUser);
        }
    }
});

export default store;