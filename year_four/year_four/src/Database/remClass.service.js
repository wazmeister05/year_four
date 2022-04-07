import http from "./http-common";
class RemClassDataService {
    delete(id) {
        return http.delete(`/remClass/${id}`);
    }
}
export default new RemClassDataService();