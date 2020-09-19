import actionCreatorFactory from 'typescript-fsa';

import { IThunk } from '../index';

import { get } from 'lodash';
import { IReducerState } from './reducer';
import * as data from './data'
import { IMusicData } from '../../interfaces/music';

const actionCreator = actionCreatorFactory('MUSICLISTING');

interface IResponse {
  data: IMusicData[];
}

const actions = {
    bannerListing: actionCreator.async<
  void,
  any
  >('bannerListing'),
  bannerListingData: actionCreator<string[]>('bannerListingData'),
  resetState: actionCreator<Partial<IReducerState>>('resetState'),
};

const thunks = {
  resetStateAsync: (options: Partial<IReducerState>): IThunk => dispatch => {
    dispatch(actions.resetState(options));
  },

  bannerListingData: (preferredLanguages: string[]): IThunk => dispatch => {

    dispatch(actions.bannerListingData(preferredLanguages));
      // use API here with promises (if success pass to done else catch and dispatch error state)
        dispatch(
          actions.bannerListing.done({ result: data.musicData }),
        );
  },
};

export default { ...actions, ...thunks };
