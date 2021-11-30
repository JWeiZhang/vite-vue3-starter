import { reactive, readonly } from 'vue';

import { IStore } from '../index';

interface UserState {
  userName: string;
  email: string;
}

interface UserMutations {
  updateMail: (data: string) => void;
}

const createUserStore = (): IStore<UserState, UserMutations> => {
  const userState: UserState = reactive({ userName: 'Wei', email: 'howard83124@gmail.com' });
  const mutations: UserMutations = {
    updateMail(data: string): void {
      userState.email = data;
    },
  };

  return {
    state: readonly(userState),
    persistedState: true,
    mutations,
  };
};

export default createUserStore();
export { UserMutations, UserState };
