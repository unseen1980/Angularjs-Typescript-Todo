/// <reference path='../_all.ts' />

namespace todos {
	'use strict';
	export function todosLength(): ng.IDirective {
		return {
			scope: {
				num: '='
			},
			template: '<p>Number of tasks to do: {{num}}</p>',
			link: ($scope: ng.IScope, element: JQuery, attributes: any) => {
				console.log($scope);
			}
		};
	}
}
