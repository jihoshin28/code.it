import { ActionType } from '../action-types';
import { Action } from '../actions';

interface BundlesState {
    text: string;
}

const initialState: BundlesState = {
    text: ''
}

const reducer = (state: BundlesState = initialState, action: Action):BundlesState =>  {
    switch(action.type){
        case ActionType.UPDATE_CELL:
            return state;
    }
    
    return state
}

export default reducer