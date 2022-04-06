import http from "./http-common";
class RemClassDataService {
    delete(id) {
        return http.delete(`/~qhb18155/remClass/${id}`);
    }
}
export default new RemClassDataService();