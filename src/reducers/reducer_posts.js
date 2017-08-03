import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';

export default function(state={}, action) {
  switch (action.type) {
    case DELETE_POST:
      _.omit(state, action.payload);
    case FETCH_POSTS:
      // Convert list to dictionary by id
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      // Merging new object to any current state using spread operator
      return { ...state, [action.payload.data.id]: action.payload.data }

    default:
      return state;
  }
}
