import { reactive } from 'vue';

import { IStore } from '../index';

interface UserState {
  userName: string;
  email: string;
}

const userState: UserState = reactive({ userName: 'Wei', email: 'howard83124@gmail.com' });

const store: IStore<UserState> = {
  state: userState,
  persistedState: true,
};

export default store;
export { UserState };
