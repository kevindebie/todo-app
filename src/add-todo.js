export default () => ({
    todoItems: [],
    newTodo: '',
    todoCompleted: false,
    isActive: false,
    isCompleted: false,

    init() {
        if(localStorage.getItem('todoItems').length > 0) {
            this.todoItems = JSON.parse(localStorage.getItem('todoItems'));
        }
    },

    updateLocalStorage() {
        localStorage.setItem('todoItems', JSON.stringify(this.todoItems))
    },

    addTodo() {
        this.todoItems.push({
            text: this.newTodo,
            completed: false
        });

        this.newTodo = '';
        console.log(this.todoItems);
        this.updateLocalStorage();
    },

    removeTodo(index) {
        this.todoItems = this.todoItems.filter((todo, todoIndex) => {
            return index !== todoIndex
        })
        this.updateLocalStorage();
    },

    completeTodo(index) {
        this.todoItems[index].completed = !this.todoItems[index].completed;
        this.updateLocalStorage();
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

    checkForCompletedItems() {
        const completedTrue = (element) => element.completed === true;
        return this.todoItems.some(completedTrue);
    },
})