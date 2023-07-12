import { AccountType } from "~/types/account";
import { StateType } from "~/types/state";

export const state = (): StateType => ({
  account: undefined,
});

export const getters = {
  account(state: StateType): AccountType | null | undefined  {
    return state.account;
  },
  isAuthenticated(state: StateType): boolean {
    return !!state.account;
  },
  accountLoaded(state: StateType): boolean {
    return state.account !== undefined;
  }
};

export const actions = {}

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state: StateType, { authUser, claims }: any) => {
    if (authUser) {
      state.account = {
        uid: authUser.uid,
        email: authUser.email,
        displayName: authUser.displayName,
        photoURL: authUser.photoURL,
      };
    } else {
      state.account = null;
    }
  },
};
