export default () => ({
    todoItems: [],
    newTodo: '',
    todoCompleted: false,
    isActive: false,
    isCompleted: false,
    completedTrue: (element) => element.completed === true,
    checkForCompletedItems: function() {
       return this.todoItems.some(this.completedTrue);
    },

    addTodo() {
        this.todoItems.push({
            text: this.newTodo,
            completed: false
        });

        this.newTodo = '';
        console.log(this.todoItems);
    },

    removeTodo(index) {
        this.todoItems = this.todoItems.filter((todo, todoIndex) => {
            return index !== todoIndex
        })
    },

    completeTodo(index) {
        this.todoItems[index].completed = !this.todoItems[index].completed;
    },

    itemsTodoLeft() {
        const completedTodoAmount = this.todoItems.filter(todo => todo.completed).length;
        return this.todoItems.length - completedTodoAmount;
    },

    clearCompletedTodo() {
        this.todoItems = this.todoItems.map(todo => ({ ...todo, completed: false }));
    },

    filterTodo() {
        let results = this.todoItems;
        let filteredResults = [];

        if (this.isActive) {
            for (const todo of results) {
                if (todo.completed === false) {
                    filteredResults.push(todo);
                }
            }
            results = filteredResults;
        }

        if (this.isCompleted) {
            for (const todo of results) {
                if (todo.completed === true) {
                    filteredResults.push(todo);
                }
            }
            results = filteredResults;
        }
        return results;
    },
})