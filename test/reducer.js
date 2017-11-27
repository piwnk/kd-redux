import { combineReducers } from 'redux';

import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from './actionTypes';
import { comments } from './comments';

const initialState = {
  comments: [],
  users: []
};

const app = combineReducers({
  comments
});
