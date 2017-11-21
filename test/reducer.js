import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from './actions';

const initialState = {
  comments: [],
  users: []
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return Object.assign({}, state, {
        comments: [
          {
            id: action.id,
            text: action.text,
            votes: 0
          },
          ...state]
      });

    case REMOVE_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.filter(comment => comment.id !== action.id)
      });

    case EDIT_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment => (
          comment.id !== action.id ? comment : {
          // trzeba przebudować cały obiekt czy jakoś spreadem?
            id: comment.id,
            text: action.text,
            votes: comment.votes
          }
        ))
      });

    case THUMB_UP_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment => (
          comment.id !== action.id ? comment : {
            id: comment.id,
            text: comment.text,
            votes: comment.votes + 1
          }
        ))
      });

    case THUMB_DOWN_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment => (
          comment.id !== action.id ? comment : {
            id: comment.id,
            text: comment.text,
            votes: comment.votes - 1
          }
        ))
      });

    default:
      return state;
  }
}
