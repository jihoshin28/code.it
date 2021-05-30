import { ActionType } from '../action-types'
import { Cell, CellTypes } from '../cell'
import { DirectionTypes } from '../direction'

export interface MoveCellAction {
    type: ActionType.MOVE_CELL;
    payload: {
        id: string;
        direction: DirectionTypes
    }
}

export interface DeleteCellAction {
    type: ActionType.DELETE_CELL;
    payload: string;
}

export interface InsertCellAction {
    type: ActionType.INSERT_CELL_AFTER;
    payload: {
        id: string | null;
        type: CellTypes;
    }
}

export interface UpdateCellAction {
    type: ActionType.UPDATE_CELL;
    payload: {
        id: string;
        content: string;
    }
}

export interface BundleStartAction {
    type: ActionType.BUNDLE_START;
    payload: {
        id: string; 
    }
}

export interface BundleCompleteAction {
    type: ActionType.BUNDLE_COMPLETE;
    payload: {
        id: string; 
        bundle: {
            code: string;
            err: string;
        }
    }
}

export type Action = 
    | MoveCellAction
    | InsertCellAction
    | DeleteCellAction
    | UpdateCellAction
    | BundleCompleteAction
    | BundleStartAction
