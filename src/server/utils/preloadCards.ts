import { mainCardsApi } from '../../store/API/mainCardsApi';
import { AppStore } from '../../store/store';

const preloadCards = async (store: AppStore) => {
  store.dispatch(mainCardsApi.endpoints.getAllCards.initiate(''));
  return await Promise.all(store.dispatch(mainCardsApi.util.getRunningQueriesThunk()));
};

export default preloadCards;
