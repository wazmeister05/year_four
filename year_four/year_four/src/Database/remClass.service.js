import http from "./http-common";
class RemClassDataService {
    getAll() {
        return http.get("/remClass");
    }
    get(id) {
        return http.get(`/remClass/${id}`);
    }
    create(data) {
        return http.post("/remClass", data);
    }
    update(id, data) {
        return http.put(`/remClass/${id}`, data);
    }
    delete(id) {
        return http.delete(`/remClass/${id}`);
    }
    deleteAll() {
        return http.delete(`/remClass`);
    }
    findByTitle(title) {
        return http.get(`/remClass?title=${title}`);
    }
}

export default new RemClassDataService();