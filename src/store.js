
import { createStore } from 'zmp-core/lite'
import { zmp } from 'zmp-framework/react'


const store = createStore({
  state: {

    users: [],
  },
  getters: {
    users({ state }) {
      return state.users
    },

  },
  actions: {
    setUser({ state }, user) {
      state.user = user
      saveUserToCache(user)
    },

    async login({ dispatch }) {
      const cachedUser = await loadUserFromCache()
      if (cachedUser) {
        dispatch('setUser', cachedUser)
      }
      const token = await getAccessToken()
      const success = await login(token)
      if (success) {
        const user = await getCurrentUser()
        if (user) {
          dispatch('setUser', user)
        }
      }
    }
  },
}
)

export default store
