export default () => ({
    todoItems: [],
    newTodo: '',

    init() {
        console.log(this.todoItems);
    },

    addTodo() {
        this.todoItems.push({
            text: this.newTodo,
            completed: false
        })

        this.newTodo = '';
    },

    removeTodo(index) {
        this.todoItems = this.todoItems.filter((todo, todoIndex) => {
            return index !== todoIndex
        })
    },
})