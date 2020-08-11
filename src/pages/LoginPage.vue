<template>
    <div class="container">
        <h1>This is the login page</h1>
        <h3>Queries are: {{ query }}</h3>
        <h4>{{ msg }}</h4>
    </div>
</template>

<script>
    export default {
        name: "LoginPage",
        data() {
            return {
                query: [],
                msg: 'This is a test'
            }
        },
        mounted() {
            this.query = this.$route.query;
            console.log(this.query);
        }
    }
</script>

<style scoped>

</style>