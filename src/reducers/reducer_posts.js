import _ from 'lodash';
import { FETCH_POSTS } from '../actions/index';

export default function(state={}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // Convert list to dictionary by id
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
