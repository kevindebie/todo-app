import Alpine from 'alpinejs'
import globals from './globals.js'
import addTodo from './add-todo.js'

document.addEventListener('alpine:init', () => {
    Alpine.store('Globals', globals );
    Alpine.data('AddTodo', addTodo );
})

window.Alpine = Alpine

Alpine.start()