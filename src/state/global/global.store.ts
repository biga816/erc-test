import { Store, StoreConfig } from '@datorama/akita';

/**
 *
 *
 * @export
 * @interface GlobalState
 */
export interface GlobalState {
  score: number;
}


export const globalStoreInitialState = {
  score: 0
};

/**
 *
 *
 * @export
 * @returns {GlobalState}
 */
export function createInitialState(): GlobalState {
  return globalStoreInitialState;
}

/**
 *
 *
 * @export
 * @class GlobalStore
 * @extends {Store<GlobalState>}
 */
@StoreConfig({ name: 'global', resettable: true })
export class GlobalStore extends Store<GlobalState> {
  /**
   * Creates an instance of GlobalStore.
   * @memberof GlobalStore
   */
  constructor() {
    super(createInitialState());
  }
}

export const globalStore = new GlobalStore();
