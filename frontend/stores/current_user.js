  import {EventEmitter} from 'events';
  import CurrentUserConstants from './../constants/current_user_constants';
  import dispatcher from './../dispatcher/dispatcher';
  var CHANGE_EVENT = "change";
  var _currentUser = {};

  var CurrentUserStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    currentUser: function () {
      return $.extend({}, _currentUser);
    },

    isLoggedIn: function () {
      return (typeof _currentUser.id !== "undefined");
    },

    dispatcherId: dispatcher.register(function (payload) {
      switch (payload.actionType) {

        case CurrentUserConstants.RECEIVE_CURRENT_USER:
          _currentUser = payload.currentUser;
          CurrentUserStore.emit(CHANGE_EVENT);
          break;

      }
    }),
  });

export default CurrentUserStore;
