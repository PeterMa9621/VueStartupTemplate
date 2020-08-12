import Vuex from 'vuex'
import Vue from "vue";
import User from "../models/User";

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        user: new User({username: 'Peter', isAdmin: true})
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