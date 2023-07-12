export const state = () => ({
  authUser: null,
});

export const getters = {
  authUser(state: any) {
    return state.authUser;
  },
};

export const actions = {}

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state: any, { authUser, claims }: any) => {
    if (authUser) {
      state.authUser = {
        uid: authUser.uid,
        email: authUser.email,
        displayName: authUser.displayName,
        photoURL: authUser.photoURL,
      };
    } else {
      state.authUser = null;
    }
  },
};
