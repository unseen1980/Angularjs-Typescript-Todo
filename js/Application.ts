/// <reference path='_all.ts' />

/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */
module todos {
    'use strict';

    angular.module('todomvc', [])
        .controller('todoCtrl', TodoCtrl)
        .directive('todosLength', todosLength)
        .service('todoStorage', TodoStorage);
}
