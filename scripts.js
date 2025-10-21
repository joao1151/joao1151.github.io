var todos = [
];



const todosApp= {
    data() {
        return {
            todos: window.todos,
            newTodo: {
                text: '',
                done: false
            }
            
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.text){
            this.todos.push(this.newTodo);
            this.newTodo={
                text:'',
                done:false
            };
            localStorage.setItem('tarefas', JSON.stringify(this.todos));
        } else {
            alert('Por favor, escreva uma tarefa antes de adicionar.');
        }
            },
    },
created() {
    this.todos= localStorage.getItem('tarefas') ? JSON.parse(localStorage.getItem('tarefas')) : this.todos;
},
updated() {
    localStorage.setItem('tarefas', JSON.stringify(this.todos));
}
};

Vue.createApp(todosApp).mount('#app');