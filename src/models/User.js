export default class User {
    constructor({username, email, session, isAdmin: isAdmin, createdAt, updatedAt}) {
        this.username = username === undefined ? '' : username;
        this.email = email === undefined ? '' : email;
        this.session = session === undefined ? '' : session;
        this.isAdmin = isAdmin === undefined ? '' : isAdmin;
        this.createdAt = createdAt === undefined ? '' : createdAt;
        this.updatedAt = updatedAt === undefined ? '' : updatedAt;
    }
}