import http from "./http-common";
class AddClassDataService {
    create(data) {
        return http.post("/addClass", data);
    }
}
export default new AddClassDataService();