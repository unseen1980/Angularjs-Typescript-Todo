/// <reference path='../_all.ts' />

namespace todos {
	'use strict';

	export class TodoCtrl {

		private todos: TodoItem[];
		public static $inject = [
			'$scope',
			'$location',
			'todoStorage'
		];

		constructor(
			private $scope: ITodoScope,
			private $location: ng.ILocationService,
			private todoStorage: ITodoStorage
		) {
			this.todos = $scope.todos = todoStorage.get();

			$scope.newTodo = '';
			$scope.vm = this;
			$scope.$watch('todos', () => this.onTodos(), true);
		}

		onTodos() {
			this.todoStorage.put(this.todos);
		}

		addTodo() {
			var newTodo: string = this.$scope.newTodo.trim();
			if (!newTodo.length) {
				return;
			}

			this.todos.push(new TodoItem(newTodo, false));
			this.$scope.newTodo = '';
		}

		removeTodo(todoItem: TodoItem) {
			this.todos.splice(this.todos.indexOf(todoItem), 1);
		}

	}

}
