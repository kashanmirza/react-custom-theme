import { combineReducers } from 'redux';
import datalistReducers from './datalist';
import selectitemReducers from './selecteditem';
import stateReducer from './statereducers';

const rootReducers = combineReducers({
    // state: (state = {}) => state
    datalistfetch: datalistReducers,
    itemSelected: selectitemReducers,
    stateManagement: stateReducer


});

export default rootReducers;
