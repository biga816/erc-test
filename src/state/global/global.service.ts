import { GlobalStore, globalStore, globalStoreInitialState } from './global.store';

/**
 *
 *
 * @export
 * @class GlobalService
 */
export class GlobalService {
  /**
   * Creates an instance of GlobalService.
   * @param {AppStore} appStore
   * @param {AboutService} aboutService
   * @memberof GlobalService
   */
  constructor(private readonly globalStore: GlobalStore) {}

  /**
   * Increment Score
   *
   * @memberof GlobalService
   */
  incrementScore(): void {
    this.globalStore.update(({score}) => ({score: score + 1}));
  }

  
  /**
   * Clear score
   *
   * @memberof GlobalService
   */
  clearScore(): void {
    this.globalStore.update({ score: globalStoreInitialState.score });
  }
}

export const globalService = new GlobalService(globalStore);
