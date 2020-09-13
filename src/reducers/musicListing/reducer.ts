import { reducerWithInitialState } from 'typescript-fsa-reducers';
import actions from './actions';
import { ISingers } from '../../interfaces/music';

export interface IReducerState {
  loading: boolean;
  error: string;
  exists: boolean;
  // data: [];
  result: ISingers[];
  
}

const INITIAL_STATE: IReducerState = {
  loading: false,
  error: '',
  exists: false,
  // data: []
  result: []
  
};

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

export default reducer;
