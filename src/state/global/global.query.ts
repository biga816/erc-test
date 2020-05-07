import { Query } from '@datorama/akita';
import { GlobalState, GlobalStore, globalStore } from './global.store';

/**
 *
 *
 * @export
 * @class GlobalQuery
 * @extends {Query<QuestionState>}
 */
export class GlobalQuery extends Query<GlobalState> {
  score$ = this.select('score');

  /**
   * Creates an instance of GlobalQuery.
   * @param {QuestionStore} store
   * @memberof GlobalQuery
   */
  constructor(protected store: GlobalStore) {
    super(store);
  }
}

export const globalQuery = new GlobalQuery(globalStore);
