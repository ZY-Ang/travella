/**
 * Database API for firebase to data related operations - fetching, pushing, updating, etc.
 *
 * This is an interface between the official Firebase API and the webapp.
 */

import {dbase} from './firebase';

export const getAllPostsOnce = () =>
  dbase.ref('posts').once('value');

export const doOnPostValueChanged = (postId, _function) =>
  dbase.ref(`posts/${postId}`).on('value', _function);

export const getPostsOnceUpToLimitEndOn = (unitId, limit, endOn) =>
  dbase.ref(`posts/${unitId}`)
    .orderByKey()   // Sort by insertion order (oldest to newest)
    .endAt(endOn)
    .limitToLast(limit)
    .once('value');

export const doAddNewPost = (post) =>
  dbase.ref('posts').push(post);
