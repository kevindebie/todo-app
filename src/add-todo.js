export default () => ({
    todoItems: [],
    newTodo: '',
    todoCompleted: false,

    init() {
        console.log(this.todoItems);
    },

    addTodo() {
        this.todoItems.push({
            text: this.newTodo,
            completed: false
        })

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
})