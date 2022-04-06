import http from "./http-common";
class UserDataService {
    getAll() {
        return http.get("/~qhb18155/users");
    }
    get(id) {
        return http.get(`/~qhb18155/users/${id}`);
    }
    create(data) {
        return http.post("/~qhb18155/users", data);
    }
    update(id, data) {
        return http.put(`/~qhb18155/users/${id}`, data);
    }
    delete(id) {
        return http.delete(`/~qhb18155/users/${id}`);
    }
    deleteAll() {
        return http.delete(`/~qhb18155/users`);
    }
    findByTitle(title) {
        return http.get(`/~qhb18155/users?title=${title}`);
    }
}
export default new UserDataService();