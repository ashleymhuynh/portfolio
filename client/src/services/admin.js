import api from "./apiConfig";

export const login = async (adminData) => {
  const res = await api.post("/admin/login", { admin: adminData });
  const { token } = res.data;
  if (token) {
    localStorage.setItem("authToken", token);
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    return res.data.admin;
  }
};

export const verifyAdmin = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const res = await api.get("/admin/verify");
    return res.data;
  }
};

export const logout = () => {
  localStorage.removeItem("authToken");
  api.defaults.headers.common.authorization = null;
};
