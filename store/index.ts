export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state: any, { authUser, claims }: any) => {
    if (authUser) {
      console.log(authUser.email);
      console.log(authUser.uid);
      console.log(authUser.displayName);
    }
    state.authUser = {
      uid: authUser ? authUser.uid : null,
      email: authUser ? authUser.email : null,
    };
  },
};
