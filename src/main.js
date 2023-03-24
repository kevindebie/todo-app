import Alpine from 'alpinejs'
import addTodo from './add-todo.js'

document.addEventListener('alpine:init', () => {
    Alpine.data('AddTodo', addTodo );
})

window.Alpine = Alpine

Alpine.start()