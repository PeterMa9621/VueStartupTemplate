export default function authMiddleware ({next, router, to, store}) {
    if(store.state.user.isAuthorized) {
        return next();
    } else {
        router.push({name: 'login', query: {next: to.path}});
    }
}