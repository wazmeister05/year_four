import http from "./http-common";
class CourseworkDataService {
    getAll() {
        return http.get("/coursework");
    }
    get(id) {
        return http.get(`/coursework/${id}`);
    }
    create(data) {
        return http.post("/coursework", data);
    }
    update(id, data) {
        return http.put(`/coursework/${id}`, data);
    }
    delete(id) {
        return http.delete(`/coursework/${id}`);
    }
    deleteAll() {
        return http.delete(`/coursework`);
    }
    findByTitle(title) {
        return http.get(`/coursework?title=${title}`);
    }
}
export default new CourseworkDataService();