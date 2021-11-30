import { App, inject, watch } from 'vue';

import userStore from './modules/user';

interface IStore<State, Mutations> {
  /**
   * 是否持久化
   */
  persistedState: boolean;
  /**
   * State
   */
  state: State;

  mutations: Mutations;
}

// 待註冊Stores
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Stores: Record<string, IStore<any, any>> = { userStore };

/**
 * 用於安裝vue外掛的方法，需要在main.ts裡匯入並呼叫app.use()才可以整合store
 * @param app Vue例項
 */
const store = (app: App): void => {
  // 遍历所有Store
  const keys = Stores && Object.keys(Stores);
  if (keys) {
    keys.forEach((item: string) => {
      // 注入
      app.provide(item, { state: Stores[item].state, mutations: Stores[item].mutations });
      // 持久化，保存至localStorage
      if (Stores[item].persistedState) {
        // 讀取localStorage的值
        const storageState = JSON.parse(localStorage.getItem(item) || '{}');
        Object.keys(storageState).forEach((key) => {
          Stores[item].state[key] = storageState[key];
        });

        // 監聽值變化，儲存到localStorage
        watch(
          () => Stores[item].state,
          () => {
            localStorage.setItem(item, JSON.stringify(Stores[item].state));
          },
          { deep: true },
        );
      }
    });
  }
};

function useInject<State, Mutations>(
  key: string,
): Pick<IStore<State, Mutations>, 'state' | 'mutations'> {
  const storeState = inject<Partial<IStore<State, Mutations>>>(key, {
    state: {} as State,
    mutations: {} as Mutations,
  });

  const state = storeState.state ? storeState.state : ({} as State);
  return {
    state,
    mutations: storeState.mutations || ({} as Mutations),
  };
}

export default store;
export { IStore, useInject };
