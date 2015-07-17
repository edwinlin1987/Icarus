var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
//var dbUtils = require('../utils/database-utils'); //can't require it here: causes circular reference

var dbUtils;

module.exports = {

  //User Actions
  getProfileInfo: function (user_id) {
    dbUtils = require('../utils/database-utils');
    dbUtils.getProfileInfo(user_id);
  },

  getAllRequests: function () {
    dbUtils = require('../utils/database-utils');
    dbUtils.getAllRequests();
  },

  getAllTags: function () {
    dbUtils = require('../utils/database-utils');
    dbUtils.getAllTags();
  },

  addRequest: function(text, username, tags){
    dbUtils = require('../utils/database-utils');
    dbUtils.addRequest(text, username, tags);
  },

  pickRequest: function(id) {
    dbUtils = require('../utils/database-utils');
    dbUtils.getRequest(id);
  },

  getAllPhotos: function(id) {
    dbUtils = require('../utils/database-utils');
    dbUtils.getAllPhotos();
  },

  getPhotosForTag: function(tagName) {
    dbUtils = require('../utils/database-utils');
    dbUtils.getPhotosForTag(tagName);
  },

  getPhotosForSearch: function(query) {
    dbUtils = require("../utils/database-utils");
    dbUtils.getPhotosForSearch(query);
  },

  addPhoto: function(photo, username, request_id, tags, description){
    dbUtils = require("../utils/database-utils");
    dbUtils.addPhoto(photo, username, request_id, tags, description);
  },

  likePhoto: function(id) {
    dbUtils = require("../utils/database-utils");
    dbUtils.likePhoto(id);
  },

  unlikePhoto: function(id) {
    dbUtils = require("../utils/database-utils");
    dbUtils.unlikePhoto(id);
  },
  
  addPhoto: function(photo, username, request_id, tags){
    dbUtils = require('../utils/database-utils');
    dbUtils.addPhoto(photo, username, request_id, tags);
  },

  addComment: function(text, username, photo_id){
    dbUtils = require('../utils/database-utils');
    dbUtils.addComment(text, username, photo_id);
  },

  loadComments: function(id) {
    dbUtils = require('../utils/database-utils');
    dbUtils.getComments(id);
  },

  // Server Actions

  receiveProfileInfo: function(data) {
    AppDispatcher.dispatch({
      type: AppConstants.RECEIVE_PROFILE_INFO,
      data: data
    });
  },

  receiveAllRequests: function(data) {
    AppDispatcher.dispatch({
      type: AppConstants.RECEIVE_REQUESTS,
      data: data
    });
  },

  receiveRequest: function (data) {
    AppDispatcher.dispatch({
      type: AppConstants.RECEIVE_REQUEST,
      data: data
    });
  },

  receivePhotos: function(data) {
    AppDispatcher.dispatch({
      type: AppConstants.RECEIVE_PHOTOS,
      data: data
    });
  },

  receiveTags: function(data) {
    AppDispatcher.dispatch({
      type: AppConstants.RECEIVE_TAGS,
      data: data
    });
  },

  receiveComments: function(data) {
    AppDispatcher.dispatch({
      type: AppConstants.RECEIVE_COMMENTS,
      data: data
    });
  },

  receivePhotoLike: function(data) {
    AppDispatcher.dispatch({
      type: AppConstants.LIKE_PHOTO,
      data: data
    });
  },
  // - also still need to consider sockets

  loggedIn: function(data, token) {
    AppDispatcher.dispatch({
      type: AppConstants.LOGGED_IN,
      data: data,
      token: token
    });
  },

  notLoggedIn: function(data) {
    AppDispatcher.dispatch({
      type: AppConstants.NOT_LOGGED_IN,
      data: data
    });
  }

};