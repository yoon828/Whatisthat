import API from "./index";

export const reqShowList = async () => {
  const { type, keyword, pageSize, lastIdx, lastView } = condition;
  let body;
  if (condition.type === "최신순") {
    body = { type, keyword, pageSize, lastIdx, category };
  }
  if (condition.type === "조회순") {
    body = { type, keyword, pageSize, lastIdx, category, lastView };
  }
  const res = await API.post("/community/list", body);
  return res.data;
};

export const showCreate = async () => {
  const accessToken = sessionStorage.getItem("access-token");
  const res = await API.post("/showpet", data, {
    headers: {
      Authorization: accessToken,
    },
  });
  return res.data.postIdx;
};

export const showUpdate = async () => {
  const accessToken = sessionStorage.getItem("access-token");
  const res = await API.put(`/showpet/${idx}`, data, {
    headers: {
      Authorization: accessToken,
    },
  });
  return res;
};

export const showRead = async () => {
  const accessToken = sessionStorage.getItem("access-token");
  if (accessToken) {
    const res = await API.get(`/showpet/detail/${idx}`, {
      headers: {
        Authorization: accessToken,
      },
    });
    return res.data;
  }
  const res = await API.get(`/showpet/detail/${idx}`);
  return res.data;
};

export const showDelete = async () => {
  const accessToken = sessionStorage.getItem("access-token");
  const res = await API.delete(`/showpet/${idx}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return res.data.message;
};

export const reqLostList = async () => {
  const { type, keyword, pageSize, lastIdx, lastView } = condition;
  let body;
  if (condition.type === "최신순") {
    body = { type, keyword, pageSize, lastIdx, category };
  }
  if (condition.type === "조회순") {
    body = { type, keyword, pageSize, lastIdx, category, lastView };
  }
  const res = await API.post("/community/list", body);
  return res.data;
};

export const lostCreate = async () => {
  const accessToken = sessionStorage.getItem("access-token");
  const res = await API.post("/lost", data, {
    headers: {
      Authorization: accessToken,
    },
  });
  return res.data.postIdx;
};

export const lostUpdate = async () => {
  const accessToken = sessionStorage.getItem("access-token");
  const res = await API.put(`/lost/${idx}`, data, {
    headers: {
      Authorization: accessToken,
    },
  });
  return res;
};

export const lostRead = async () => {
  const accessToken = sessionStorage.getItem("access-token");
  if (accessToken) {
    const res = await API.get(`/lost/detail/${idx}`, {
      headers: {
        Authorization: accessToken,
      },
    });
    return res.data;
  }
  const res = await API.get(`/lost/detail/${idx}`);
  return res.data;
};

export const lostDelete = async () => {
  const accessToken = sessionStorage.getItem("access-token");
  const res = await API.delete(`/lost/${idx}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return res.data.message;
};

export default {};
