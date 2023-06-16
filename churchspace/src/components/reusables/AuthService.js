import axios from "axios";

const register = (username, email, password) => {
  console.log("Welcome to the register component in the Auth Servce! "+username)
  return axios.post("http://localhost:8080/api/auth/SignUp", {
    username,
    email,
    password,
  })
  .then((response) => {
    return response.data
  });
};



const login = (username, password) => {
  return axios
    .post("http://localhost:8080/api/auth/SignIn", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        const user = {
          token: response.data.token,
          type: "Bearer",
          email: response.data.email,
          name:response.data.name,
          roles: response.data.roles,
        };
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      }
      throw new Error("Failed to login");
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;