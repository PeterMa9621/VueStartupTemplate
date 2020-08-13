<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style="z-index: 100">
        <router-link class="navbar-brand" to="/">
            <img src="../../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
            Application Name
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'home'}">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'about'}">About</router-link>
                </li>
            </ul>
            <ul class="navbar-nav form-inline my-2 my-lg-0">
                <li v-if="!user.username" class="nav-item">
                    <router-link class="nav-link" :to="{name:'login'}">Login</router-link>
                </li>
                <li v-if="!user.username" class="nav-item">
                    <router-link class="nav-link" :to="{name:'register'}">Register</router-link>
                </li>
                <li v-if="user.username && user.isAdmin===true" class="nav-item">
                    <router-link class="nav-link" :to="{name:'admin'}">Admin Board</router-link>
                </li>
                <li v-if="user.username" id="profile" class="nav-item dropleft">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{user.username}}
                    </a>
                    <div class="dropdown-menu justify-content-center" aria-labelledby="navbarDropdown">
                        <router-link class="dropdown-item dropdown-hover" :to="{name:'profile'}">Profile</router-link>
                        <div class="dropdown-divider"></div>
                        <button class="dropdown-item dropdown-hover" @click="logout">Logout</button>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

    export default {
        name: "navigation",
        computed: {
            user: function () {
                return this.$store.state.user;
            }
        },
        created() {
            // When a user open the website, then check auth first
            //this.$store.commit('checkAuth', this.$router);
        },
        methods: {
            logout() {
                // When a user wants to logout, then clear data saved on the website
                //this.$store.commit('clearUser', this.$router);
            },
        },
        mounted() {
            /*
            this.$root.$on('onLogout', () => {
                //this.$store.commit('clearUser', this.$router);
            })
             */
        }
    }
</script>

<style scoped>
    .dropdown-hover:hover {
        background-color: #007bff;
        color: white;
    }
</style>