<template>
    <div class="">
        <!-- {{ $store.state.todo.title }} -->
        <h2 class="text-primary text-center">Todo</h2>
        <div class="container">
            <div class="row">
                <AddTodo />
                <FilteredTodo />
            </div>
            <div class="row justify-content-center flex-wrap">
                <!-- <div class="col-12"> -->
                    <!-- <div class=""> -->
                        <div 
                        @dblclick="toggleComplete(todo)"
                        :class="bgVariant(todo)"
                        class="col-3 m-3 p-3 py-4 rounded text-white 
                        bg-primary d-flex justify-content-between" 
                        v-for="todo in myTodos" :key="todo.id">
                            <!-- <div class="card-header">{{ todo?.id }}</div> -->
                            <span>{{ todo?.title }}</span>
                           <span>
                            <button @click="removeTodoId(todo.id)">Del</button>
                           </span>
                        </div>
                    <!-- </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import AddTodo from '../components/todo/AddTodo.vue';
import FilteredTodo from '../components/FilteredTodo.vue';
export default{
    components: {
    AddTodo,
    FilteredTodo
},
    computed:{
        print(){
            console.log('hello there')
        },
        ...mapGetters([
            'myTodos'
        ])
    },
    methods: {
        toggleComplete(todo){
            todo.completed = !todo.completed
            this.updateTodo(todo)
        },
        bgVariant(todo){
            return todo.completed ? "bg-success" : "bg-primary"
        },
        ...mapActions(['getTodos','removeTodoId','updateTodo'])
    },
    mounted(){
        this.print;
        this.getTodos();
        console.log(this.myTodos);
        // console.log('hello')
    }
}
</script>