import actionCreatorFactory from 'typescript-fsa';
import axios from 'axios';
import { IThunk } from '../index';
import { get } from 'lodash';
import { IReducerState } from './reducer';


const actionCreator = actionCreatorFactory('MOVIESLISTING');


const actions = {
    bannerListing: actionCreator.async<
  void,
  any
  >('bannerListing'),
  bannerListingData: actionCreator<string[]>('bannerListingData'),
  setLanguage: actionCreator<boolean>('setLanguage'),
  resetState: actionCreator<Partial<IReducerState>>('resetState'),
};

const thunks = {
  resetStateAsync: (options: Partial<IReducerState>): IThunk => dispatch => {
    dispatch(actions.resetState(options));
  },

  bannerListingData: (preferredLanguages: string[]): IThunk => dispatch => {
    dispatch(actions.bannerListingData(preferredLanguages));
      // use API here with promises (if success pass to done else catch and dispatch error state)
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b2b52d6854fda94c340884661c288e68`)
      .then(res => {
        const movies = res.data;
        dispatch(
          actions.bannerListing.done({ result: movies.results }),
        );
      })
  },
  
  setLanguageAsync: (toggleModal: boolean): IThunk => dispatch => {
    dispatch(actions.setLanguage(toggleModal))
  }
};

export default { ...actions, ...thunks };
