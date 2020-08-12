<template>
    <div class="container-fluid mt-5 h-100">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <div class="form-group">
                    <div class="card login-card">
                        <div class="card-body" style="background-color: aliceblue">
                            <label for="username">
                                UserName:
                                <input id="username" name="username" class="form-control">
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4"></div>
        </div>
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
    .login-card {
        box-shadow: 0 10px 25px rgba(0,0,0,0.05), 0 20px 48px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.1);
        flex: 1 0 auto;
    }
</style>