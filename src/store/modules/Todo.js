import axios from "axios";

export default {
    state:{
        title: "Vuex With Todo",
        todos: [
            // {id:1,title:"title 1"},
            // {id:2,title:"title 2"},
            // {id:3,title:"title 3"},
        ]
    },
    getters:{
        myTodos(state){
            return state.todos;
        },
    },
    actions:{
        async getTodos({commit}){
            let res = await axios.get('https://jsonplaceholder.typicode.com/todos');
            let datas = res.data;
            console.log('---',res)
            commit('setTodos',datas)
        },
        async addNewTodo(context,newTodo){
            let res = await axios.post('https://jsonplaceholder.typicode.com/todos',newTodo);
            // console.log('+++',res.data)
            context.commit('setTodo',res.data)
        },
        async removeTodoId(context,removeId){
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${removeId}`);
            // console.log('+++',res.data)
            context.commit('removeTodo',removeId)
        },
        async filterTodos(context,limit){
            let res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
            // console.log('+++',res.data)
            context.commit('setTodos',res.data)
        },
        async updateTodo(context,todo){
            let res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,todo);
            // console.log('update',res.data)
            context.commit('updateTodos',res.data)
        },
        
    },
    mutations:{
        setTodos(state,todos){
            state.todos =  todos
        },
        setTodo(state,newTodo){
            state.todos.unshift(newTodo);
        },
        removeTodo(state,removeId){
            state.todos = state.todos.filter(todo=>{
                return todo.id !== removeId;
            })
        },
        updateTodos(state,todo){
            state.todos.forEach(t => {
                if(t.id === todo.id){
                    t = todo
                }
            });
        }
    },
}

