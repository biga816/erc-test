import { QuestionStore, questionStore, questionStoreInitialState } from './question.store';
import { IERC } from '../../interfaces/IERC';
import { getFirestoreData } from "../../utils/firebaseUtil";

/**
 *
 *
 * @export
 * @class QuestionService
 */
export class QuestionService {
  /**
   * Creates an instance of QuestionService.
   * @param {AppStore} appStore
   * @param {AboutService} aboutService
   * @memberof QuestionService
   */
  constructor(private readonly questionStore: QuestionStore) {}

  /**
   * Get Erc info from firestore
   *
   * @memberof QuestionService
   */
  async getErcs(): Promise<void> {
    const ercsData = await getFirestoreData('ercs')
    let ercs = ercsData.docs.map((doc) => {
      let erc = doc.data() as IERC;
      erc.title = erc.title.split(' ').filter((value) => value.indexOf('ERC') === -1).join(' ');
      return erc;
    });
    ercs = ercs.sort(() => (Math.random() - 0.5))
    this.questionStore.update({ ercs });
  }

  
  /**
   * Clear score
   *
   * @memberof QuestionService
   */
  clearErcs() {
    this.questionStore.update({ ercs: questionStoreInitialState.ercs });
  }
}

export const questionService = new QuestionService(questionStore);
