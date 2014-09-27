'use strict';

/**
 * @ngdoc service
 * @name selectionApp.sendEmail
 * @description
 * # sendEmail
 * Factory in the selectionApp.
 */
angular.module('selectionApp')
  .factory('sendEmail', function () {
    // Service logic

    // Public API here
    return {
      send: function (data) {
        // Here we will do REST API call to the server
        return 'Thanks for submission. Our team will contact you at: ' + data.email;
      }
    };
  });
