import { Query } from '@datorama/akita';
import { QuestionState, QuestionStore, questionStore } from './question.store';

/**
 *
 *
 * @export
 * @class QuestionQuery
 * @extends {Query<QuestionState>}
 */
export class QuestionQuery extends Query<QuestionState> {
  ercs$ = this.select('ercs');

  /**
   * Creates an instance of QuestionQuery.
   * @param {QuestionStore} store
   * @memberof QuestionQuery
   */
  constructor(protected store: QuestionStore) {
    super(store);
  }
}

export const questionQuery = new QuestionQuery(questionStore);
