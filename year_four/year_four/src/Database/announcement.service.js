import http from "./http-common";
class AnnouncementDataService {
    create(data) {
        return http.post("/announcements", data);
    }
    findAll(classCode) {
        return http.get("/announcements", classCode);
    }
}
export default new AnnouncementDataService();