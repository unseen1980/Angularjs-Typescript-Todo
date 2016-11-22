/// <reference path='../_all.ts' />

namespace todos {
    'use strict';
    export class TodoStorage implements ITodoStorage {

        STORAGE_ID = 'todos';

        get (): TodoItem[] {
            return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
        }

        put(todos: TodoItem[]) {
            localStorage.setItem(this.STORAGE_ID, JSON.stringify(todos));
        }
    }
}