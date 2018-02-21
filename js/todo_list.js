/*
 *  A simple todo list app.
 *
 * @Pratik Mulpury and Christine Wang
 */

// visibility filters
var filters = {
    all: function (todos) {
        return todos;
    },
    active: function (todos) {
        return todos.filter(todo => !todo.completed);
    },
    completed: function (todos) {
        return todos.filter(todo => todo.completed);
    }
}

// Define custom filter to correctly pluralize the word
Vue.filter('pluralize', function (n) {
    return n === 1 ? 'item' : 'items';
});

// Example data that represents the list of todo items
var todoList = [
    {
        title: 'Download code',
        completed: true
    },
    {
        title: 'Study code',
        completed: true
    },
    {
        title: 'Finish code',
        completed: true
    }
];

// app Vue instance
var app = new Vue({
     data:todoList,
     methods: {
        removeCompleted: function(){
            this.todos.splice(this.todos.indexOf(todo), 1)
        }
     },
})

// mount
app.$mount('#todoapp')

