import http from "./http-common";
class AddClassDataService {
    create(data) {
        return http.post("/~qhb18155/addClass", data);
    }
}
export default new AddClassDataService();