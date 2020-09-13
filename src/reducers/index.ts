import { combineReducers } from 'redux';
import { Location } from 'redux-little-router';
import { ThunkAction } from 'redux-thunk';



export interface IRootState {
  
}

export const rootReducer: typeof appReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    // @ts-ignore
    state = undefined;
  }

  return appReducer(state, action);
};

const appReducer = combineReducers<IRootState>({
  // router: reduxLittleRouterReducer,
  // $patient: $patientReducer,
  // error: errorReducer,
  // $careAdmin: $careAdminReducer,
  // toast: toastReducer,
});

export type IThunk = ThunkAction<any, any, IRootState, any>;
