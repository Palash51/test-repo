import actionCreatorFactory from 'typescript-fsa';

import { IThunk } from '../index';
// import { showSuccessToast, showErrorToast } from '#/utils/network';
// import * as StrategyListAPI from '#/interfaces/api/careAdmin/strategy/strategy.list';
// import * as strategyValidateAPI from '#/interfaces/api/careAdmin/strategy/strategy.validate';
// import * as createStrategyAPI from '#/interfaces/api/careAdmin/strategy/strategy.create';
import { get } from 'lodash';
// import { IAxiosResponseError } from '#/utils/axios';
import { IReducerState } from './reducer';
import * as data from './data'
import { ISingers } from '../../interfaces/music';

const actionCreator = actionCreatorFactory('MUSICLISTING');

interface IResponse {
  data: ISingers[];
}

const actions = {
    bannerListing: actionCreator.async<
  void,
  any
  >('bannerListing'),
//   validateStrategyName: actionCreator<string>('validateStrategyName'),
  bannerListingData: actionCreator<string[]>('bannerListingData'),
  resetState: actionCreator<Partial<IReducerState>>('resetState'),
};

const thunks = {
  resetStateAsync: (options: Partial<IReducerState>): IThunk => dispatch => {
    dispatch(actions.resetState(options));
  },

  bannerListingData: (preferredLanguages: string[]): IThunk => dispatch => {
    dispatch(actions.bannerListingData(preferredLanguages));
    
    // strategyValidateAPI.GET.service(strategyName)
        dispatch(
          actions.bannerListing.done({ result: data.singers }),
        );
    //   .catch((error: any) => {
    //     const errorMessage = get(
    //       error,
    //       'response.data.error.message',
    //       'Could not fetch data. Please try after some time.',
    //     );
        // dispatch(
        //   actions.bannerListing.failed({  error: 'unable to fetch data' }),
        // );
    //   });
  },
};

export default { ...actions, ...thunks };
