import http from "./http-common";
class AnnouncementDataService {
    create(data) {
        return http.post("/announcements", data);
    }
    findOne(classCode) {
        return http.get("/announcements", classCode);
    }
    moss(language){
        return http.post("/announcements", language);
    }
}
export default new AnnouncementDataService();