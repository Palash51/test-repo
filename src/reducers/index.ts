import { combineReducers } from 'redux';
import { Location } from 'redux-little-router';
import { ThunkAction } from 'redux-thunk';

import {
  reducer as moviesListingReducer,
} from './moviesListing';

import {
  IReducerState as IMoviesListingState,
} from './moviesListing/reducer'

export interface IRootState {
  moviesListing: IMoviesListingState
}


export const rootReducer: typeof appReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    // @ts-ignore
    state = undefined;
  }

  return appReducer(state, action);
};

const appReducer = combineReducers<IRootState>({
  moviesListing: moviesListingReducer
  // toast: toastReducer,
});

export type IThunk = ThunkAction<any, any, IRootState, any>;
