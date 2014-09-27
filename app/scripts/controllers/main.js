'use strict';

/**
 * @ngdoc function
 * @name selectionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * This is manin Controller file.
 */
angular.module('selectionApp')
  .controller('MainCtrl', ['$scope', 'sendEmail', function ($scope, sendEmail) {
    $scope.currentView = 'selection';
    $scope.visitor = {'email': '', 'submission': false};
    $scope.validation = {};
    $scope.totalSelected = 0;

    $scope.selectedSectors = [];
    $scope.sectors = [
      {id: 1, text: 'Materials', selected: false},
      {id: 2, text: 'Energy', selected: false},
      {id: 3, text: 'Financials', selected: false},
      {id: 4, text: 'Healthcare', selected: false},
      {id: 5, text: 'Industrials', selected: false},
      {id: 6, text: 'Technology', selected: false},
      {id: 7, text: 'Utilities', selected: false},
      {id: 8, text: 'Random', selected: false},
    ];

    $scope.sectorSelector = function (selectedIndex) {
      if ($scope.sectors[selectedIndex] === undefined) {
        return false; // invalid selection
      }

      $scope.visitor.warning = false;
      var sector = $scope.sectors[selectedIndex];
      // Allowed upto 4 selections
      if ($scope.totalSelected < 4) {
        if (!sector.selected) {
          $scope.totalSelected++;
        } else {
          $scope.totalSelected--;
        }
        sector.selected = !sector.selected; // toggle the selection flag
      } else if(sector.selected){
        $scope.totalSelected--;
        sector.selected = !sector.selected;
      } else {
        $scope.visitor.warning = 'You can select upto 4 choices at a time';
      }
    };

    var returnSelected = function () {
      var selectedSectors = [];
      for (var i = 0; i < $scope.sectors.length; i++) {
        if ($scope.sectors[i].selected === true) {
          selectedSectors.push($scope.sectors[i]);
        }
      }
      return selectedSectors;
    };

    $scope.checkSelection = function () {
      var selected = returnSelected();
      if (selected.length > 0) {
        return false;
      }

      return true;
    };

    $scope.selectedSector = function (sector) {
      return sector.selected;
    };

    // Submit choices and the selected options will appear
    $scope.submit = function () {
      if ($scope.currentView === 'submit') {
        $scope.currentView = 'selection';
        $scope.visitor = {};
        $scope.visitor.submission = false;
      } else {
        $scope.currentView = 'submit';
      }

    };

    // Send email to webmaster through factory function
    // which will do REST API call (implementation is not required now)
    $scope.submitEmail = function () {
      $scope.visitor.submission = true;
      var data = {};
      data.email = $scope.visitor.email;
      data.choice = angular.toJson(returnSelected()); // Get Selected choices
      console.log(data);
      $scope.visitor.response = sendEmail.send(data);
    };

  }]);
