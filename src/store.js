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

const saveUserToCache = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const loadUserFromCache = () => {
  const userJson = localStorage.getItem('user');
  return userJson ? JSON.parse(userJson) : null;
};

const getAccessToken = async () => {
};

const login = async (token) => {
};

const getCurrentUser = async () => {
};

export default store;
