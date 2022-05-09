import http from "./http-common";
class CourseworkDataService {
    getAll() {
        return http.get("/courseworks");
    }
    get(id) {
        return http.get(`/courseworks/${id}`);
    }
    create(data) {
        return http.post("/coursework", data);
    }
    update(id, data) {
        return http.put(`/courseworks/${id}`, data);
    }
    delete(id) {
        return http.delete(`/courseworks/${id}`);
    }
    deleteAll() {
        return http.delete(`/courseworks`);
    }
    findByTitle(title) {
        return http.get(`/courseworks?title=${title}`);
    }
}
export default new CourseworkDataService();