/// <reference path='../_all.ts' />

namespace todos {
	export interface ITodoStorage {
		get (): TodoItem[];
		put(todos: TodoItem[]);
	}
}