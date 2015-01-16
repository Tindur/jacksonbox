'use strict';
angular.module('testApp')
  .provider('datafetcher', function () {
    // Method for instantiating
    this.$get = function ($http, $q) {
      return {
        /**
         * Generic GET method. 
         * param: url - the complete URL of the requested resource
         * param: cacheIt - should the result be cached?
         */
        get: function(url, cacheIt) {
          var deferred = $q.defer();
          $http({
            method: 'GET',
            url: url,
            cache: cacheIt
          }).success( function (data) {
            deferred.resolve(data);
          }).error( function (data) {
            var errObj = {method: 'GET', location: url, msg: data};
            deferred.reject(errObj);
          });
          return deferred.promise;
        },
        /**
         * Generic POST method.
         * param: url - the complete URL of the requested POST location
         * param: payload - the payload that should be sent with the POST method
         */
        post: function(url, payload) {
          var deferred = $q.defer();
          $http({
            method: 'POST',
            url: url,
            data: payload
          }).success(function (data) {
            deferred.resolve(data);
          }).error(function (data) {
            var errObj = { method: 'POST', location: url, payload: payload, msg: data };
            deferred.reject(errObj);
          });
          return deferred.promise;
        },
        /**
         * Generic PUT method.
         * param: url - the complete URL of the requested PUT location
         * param: payload - the payload that should be sent with the POST method
         */
        put: function(url, payload) {
          var deferred = $q.defer();
          $http({
            method: 'PUT',
            url: url,
            data: payload
          }).success(function (data) {
            deferred.resolve(data);
          }).error(function (data) {
            var errObj = {method: 'PUT', location: url, payload: payload, msg: data};
            deferred.reject(errObj);
          });
          return deferred.promise;
        },
        /**
         * Generic delete method
         * param: url - the complete URL of the requested DELETE location
         */
        delete: function(url) {
          var deferred = $q.defer();
          $http({
            method: 'DELETE',
            url: url
          }).success(function (data) {
            deferred.resolve(data);
          }).error(function (reason) {
            var errObj = { method: 'DELETE', location: url, msg: reason };
            deferred.reject(errObj);
          });
          return deferred.promise;
        }
      };
    };
  });
