import http from "./http-common";
class AddClassDataService {
    getAll() {
        return http.get("/addClass");
    }
    get(id) {
        return http.get(`/addClass/${id}`);
    }
    create(data) {
        return http.post("/addClass", data);
    }
    update(id, data) {
        return http.put(`/addClass/${id}`, data);
    }
    delete(id) {
        return http.delete(`/addClass/${id}`);
    }
    deleteAll() {
        return http.delete(`/addClass`);
    }
    findByTitle(title) {
        return http.get(`/addClass?title=${title}`);
    }
}
export default new AddClassDataService();