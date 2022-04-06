import http from "./http-common";
class ClassDataService {
    getAll() {
        return http.get("/~qhb18155/classes");
    }
    get(id) {
        return http.get(`/~qhb18155/classes/${id}`);
    }
    create(data) {
        return http.post("/~qhb18155/classes", data);
    }
    update(id, data) {
        return http.put(`/~qhb18155/classes/${id}`, data);
    }
    delete(id) {
        return http.delete(`/~qhb18155/classes/${id}`);
    }
    deleteAll() {
        return http.delete(`/~qhb18155/classes`);
    }
    findByTitle(title) {
        return http.get(`/~qhb18155/classes?title=${title}`);
    }
}
export default new ClassDataService();