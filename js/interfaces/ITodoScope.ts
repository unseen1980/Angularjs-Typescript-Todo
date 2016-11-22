/// <reference path='../_all.ts' />

namespace todos {
	export interface ITodoScope extends ng.IScope {
		todos: TodoItem[];
		newTodo: string;
		statusFilter: { completed?: boolean };
		vm: TodoCtrl;
	}
}
