'use strict';

angular.module('testApp')
  .provider('usermanager', function () {
    this.$get = function () {
      var _userInfo;

      return {
        //
        // User manipulation
        //

        /**
         * Sets the info for user
         */
        setUserInformation: function (info) {
          _userInfo = angular.copy(info);
        },
        /**
         * Get info for user
         */
        getUserInformation: function () {
          return _userInfo;
        }
      };
    };
  });