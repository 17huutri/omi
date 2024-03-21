
import { createStore } from 'zmp-core/lite'

const store = createStore({
  state: {
    user: null,
  },
  getters: {
    user({ state }) {
      return state.user;
    },
  },
  actions: {
    async setUser({ state }, user) {
      state.user = user;
      saveUserToCache(user);
    },

    async login({ dispatch }) {
      const cachedUser = loadUserFromCache();
      if (cachedUser) {
        dispatch('setUser', cachedUser);
        return;
      }

      const token = await getAccessToken();
      const success = await login(token);
      if (success) {
        const user = await getCurrentUser();
        if (user) {
          dispatch('setUser', user);
        }
      }
    }
  },
});

// Lưu thông tin người dùng vào cache (localStorage)
const saveUserToCache = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

// Lấy thông tin người dùng từ cache (localStorage)
const loadUserFromCache = () => {
  const userJson = localStorage.getItem('user');
  return userJson ? JSON.parse(userJson) : null;
};

// Hàm lấy access token từ server
const getAccessToken = async () => {
  // Implement logic to get access token from server
};

// Hàm đăng nhập với access token
const login = async (token) => {
  // Implement login logic using the access token
};

// Hàm lấy thông tin người dùng từ server
const getCurrentUser = async () => {
  // Implement logic to get current user from server
};

export default store;
