import { Store, StoreConfig } from '@datorama/akita';
import { IERC } from '../../interfaces/IERC';

/**
 *
 *
 * @export
 * @interface QuestionState
 */
export interface QuestionState {
  ercs: IERC[];
}


export const questionStoreInitialState = {
  ercs: []
};

/**
 *
 *
 * @export
 * @returns {QuestionState}
 */
export function createInitialState(): QuestionState {
  return questionStoreInitialState;
}

/**
 *
 *
 * @export
 * @class QuestionStore
 * @extends {Store<QuestionState>}
 */
@StoreConfig({ name: 'question', resettable: true })
export class QuestionStore extends Store<QuestionState> {
  /**
   * Creates an instance of QuestionStore.
   * @memberof QuestionStore
   */
  constructor() {
    super(createInitialState());
  }
}

export const questionStore = new QuestionStore();
