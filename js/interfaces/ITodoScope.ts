/// <reference path='../_all.ts' />

module todos {
	export interface ITodoScope extends ng.IScope {
		todos: TodoItem[];
		newTodo: string;
		statusFilter: { completed?: boolean };
		location: ng.ILocationService;
		vm: TodoCtrl;
	}
}