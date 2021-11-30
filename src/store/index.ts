import { App, watch } from 'vue';

import userStore from './modules/user';

interface IStore<State> {
  /**
   * 是否持久化
   */
  persistedState: boolean;
  /**
   * State
   */
  state: State;
}

// 待註冊Stores
const Stores: Record<string, IStore<any>> = { userStore };

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
      app.provide(item, Stores[item].state);
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

export default store;
export { IStore };
