import connector from '../../utils/connector/Connector';
import { AppDispatch } from '../../store/store';
import { mainCardSlice } from './mainCardSlice';

const getCards =
  (search = '') =>
  async (dispatch: AppDispatch) => {
    dispatch(mainCardSlice.actions.cardFetching);
    const cards = await connector.getProducts(search);
    dispatch(mainCardSlice.actions.cardFetchingOk(cards));
  };

export { getCards };
