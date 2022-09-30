import { http } from "./http";

//자랑하기 글 목록 가져오기
export const getShowList = async () => {
  return await http.get("/show-pet/list");
};
