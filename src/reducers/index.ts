import { combineReducers } from 'redux';
import { Location } from 'redux-little-router';
import { ThunkAction } from 'redux-thunk';

import {
  reducer as musicListingReducer,
} from './musicListing';

import {
  IReducerState as IMusicListingState,
} from './musicListing/reducer'

export interface IRootState {
  musicListing: IMusicListingState
}


export const rootReducer: typeof appReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    // @ts-ignore
    state = undefined;
  }

  return appReducer(state, action);
};

const appReducer = combineReducers<IRootState>({
  musicListing: musicListingReducer
  // toast: toastReducer,
});

export type IThunk = ThunkAction<any, any, IRootState, any>;
