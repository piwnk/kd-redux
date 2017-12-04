import uuid from 'uuid';

import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  THUMB_UP_COMMENT,
  THUMB_DOWN_COMMENT } from './actionTypes';


// ACTIONS
export function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  };
}

export function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    id,
    text
  };
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  };
}

export function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  };
}

export function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  };
}
