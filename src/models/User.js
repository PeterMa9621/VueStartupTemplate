export default class User {
    constructor({username, email, token, isAdmin, createdAt, updatedAt, isAuthorized}) {
        this.username = username === undefined ? '' : username;
        this.email = email === undefined ? '' : email;
        this.token = token === undefined ? '' : token;
        this.isAdmin = isAdmin === undefined ? false : isAdmin;
        this.createdAt = createdAt === undefined ? '' : createdAt;
        this.updatedAt = updatedAt === undefined ? '' : updatedAt;
        this.isAuthorized = isAuthorized === undefined ? false : isAuthorized;
    }
}