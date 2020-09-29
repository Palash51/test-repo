import { reducerWithInitialState } from 'typescript-fsa-reducers';
import actions from './actions';
import { ISingers,IAlbums, IMusicData, ISongs } from '../../interfaces/music';

export interface IReducerState {
  loading: boolean;
  error: string;
  exists: boolean;
  result : Record<string, ISingers[] | IAlbums[] | ISongs[] >
  openLanguageModal: boolean;
}

const INITIAL_STATE: IReducerState = {
  loading: false,
  error: '',
  exists: false,
  result: {},
  openLanguageModal: false
}

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(actions.resetState, (state, payload) => ({
    ...state,
    ...INITIAL_STATE,
    ...payload,
  }))
  .case(actions.bannerListing.started, state => ({
    ...state,
    loading: true,
    error: '',
  }))
  .case(actions.bannerListing.done, (state, payload) => {
      
    // const { result } = payload;
    // const { result: [result] } = payload;
    // debugger
    return {
      ...state,
      result: payload.result,
      loading: false,
    };
  })
  .case(actions.setLanguage, (state, toggleModal) => {
    return {
      ...state,
      openLanguageModal: toggleModal,
      loading: false,
    };
  })

export default reducer;
