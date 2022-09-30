import { http } from "./http";

//자랑하기 글 목록 가져오기
export const getShowList = async () => {
  return await http.get(`/show-pet/list`);
};

//자랑하기 글 등록
export const postShowpet = async (data) => {
  return await http.post(`/show-pet`, data);
};

//자랑하기 글 수정
export const putShowpet = async (data) => {
  return await http.put(`/show-pet`, data);
};

//자랑하기 글 삭제
export const deleteShowpet = async (id) => {
  return await http.delete(`/show-pet/${id}`);
};

//자랑하기 글 상세 조회 가져오기
export const getShowListDetail = async (id) => {
  return await http.get(`/show-pet/${id}`);
};

//자랑하기 목록 조회
export const getShowpetComments = async (id) => {
  //글 id
  return await http.get(`/show-pet/comment/list/${id}`);
};

//자랑하기 댓글 등록
export const postShowpetComment = async (data) => {
  return await http.post(`/show-pet/comment`, data);
};

//자랑하기 댓글 수정
export const putShowpetComment = async (data) => {
  return await http.put(`/show-pet/comment`, data);
};

//자랑하기 댓글 삭제
export const deleteShowpetComment = async (id) => {
  return await http.delete(`/show-pet/comment/${id}`);
};
